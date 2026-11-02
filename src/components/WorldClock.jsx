import { useEffect, useState } from 'react'

const TIME_API_URL = 'https://timeapi.io/api/Time/current/zone?timeZone=America%2FSao_Paulo'

function getTimestamp(data) {
  const parts = ['year', 'month', 'day', 'hour', 'minute', 'seconds'].map((key) => data[key])
  if (!parts.every(Number.isInteger)) {
    throw new Error('A API retornou um horário inválido.')
  }

  const [year, month, day, hour, minute, seconds] = parts
  const date = new Date(Date.UTC(year, month - 1, day, hour, minute, seconds))
  if (
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() !== month - 1 ||
    date.getUTCDate() !== day ||
    hour < 0 ||
    hour > 23 ||
    minute < 0 ||
    minute > 59 ||
    seconds < 0 ||
    seconds > 59
  ) {
    throw new Error('A API retornou um horário inválido.')
  }

  return date.getTime()
}

export default function WorldClock() {
  const [clock, setClock] = useState(null)
  const [now, setNow] = useState(Date.now())
  const [error, setError] = useState('')
  const [retry, setRetry] = useState(0)

  useEffect(() => {
    let active = true
    let controller

    async function syncTime() {
      controller?.abort()
      controller = new AbortController()

      try {
        const response = await fetch(TIME_API_URL, { signal: controller.signal })
        if (!response.ok) {
          throw new Error(`A consulta de horário falhou (HTTP ${response.status}).`)
        }

        const timestamp = getTimestamp(await response.json())
        if (active) {
          setClock({ timestamp, syncedAt: Date.now() })
          setError('')
        }
      } catch (requestError) {
        if (requestError.name === 'AbortError') return
        if (active) {
          setError('Não foi possível consultar a hora agora. Verifique sua conexão e tente novamente.')
        }
      }
    }

    void syncTime()
    const tick = setInterval(() => setNow(Date.now()), 1000)
    const refresh = setInterval(() => void syncTime(), 60_000)

    return () => {
      active = false
      controller?.abort()
      clearInterval(tick)
      clearInterval(refresh)
    }
  }, [retry])

  const currentTime = clock
    ? new Date(clock.timestamp + now - clock.syncedAt).toISOString().slice(11, 19)
    : null

  return (
    <div className="mx-auto mt-6 flex max-w-[780px] flex-col items-center gap-1 rounded-lg border border-hud bg-surface px-6 py-4">
      <span className="font-mono text-[0.7rem] tracking-[1.5px] text-cyan-hud">
        HORA ATUAL // SÃO PAULO
      </span>
      {currentTime ? (
        <time
          dateTime={currentTime}
          className="font-mono text-[2rem] leading-tight font-bold tabular-nums text-optics"
          aria-label={`Horário atual em São Paulo: ${currentTime}`}
        >
          {currentTime}
        </time>
      ) : (
        <span role={error ? 'alert' : 'status'} className="font-mono text-sm text-muted">
          {error || 'Consultando horário...'}
        </span>
      )}
      {error && currentTime && (
        <p role="status" className="text-center text-xs text-muted">
          {error}
        </p>
      )}
      {error && (
        <button
          type="button"
          onClick={() => setRetry((count) => count + 1)}
          className="cursor-pointer font-mono text-xs text-cyan-hud underline underline-offset-2"
        >
          Tentar novamente
        </button>
      )}
      {!error && currentTime && (
        <span className="text-xs text-muted">Sincronizado pela API TimeAPI.io</span>
      )}
    </div>
  )
}
