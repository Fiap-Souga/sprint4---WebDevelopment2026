# JoviStudy — Web Development | Sprint 4

Projeto de **Web Development — Sprint 4**: evolução da solução JoviSmartCam/JoviStudy, originalmente apresentada como Landing Page, para uma aplicação React. O projeto reúne a página institucional, navegação por rotas, uma área de acesso restrito para consultar os feedbacks enviados e consumo de uma API pública.

## Links do projeto

- **Deploy na Vercel:** [https://sprint2-web-development2026.vercel.app/](https://sprint4-web-development2026.vercel.app/)
- **Repositório Git:** [https://github.com/Fiap-Souga/sprint4---WebDevelopment2026](https://github.com/Fiap-Souga/sprint4---WebDevelopment2026)

## Funcionalidades e requisitos

- Aplicação desenvolvida com React e Vite, organizada em páginas e componentes reutilizáveis com passagem de props.
- Rotas públicas para a Landing Page, login e página 404; rota `/painel` protegida por autenticação demonstrativa.
- Hooks nativos do React e hook customizado `useAuth`, com autenticação centralizada em Context API.
- Estilização com Tailwind CSS v4 e layout responsivo para desktop, tablet e mobile.
- Relógio da página inicial sincronizado com a API pública TimeAPI.io, configurada para o fuso de São Paulo.
- Formulário de contato com armazenamento local dos feedbacks em `localStorage`; o painel permite consultá-los e excluí-los.
- Código de sessão demonstrativo gerado ao carregar a página inicial.
- Deploy publicado na Vercel, com configuração de fallback para as rotas da aplicação.

> O formulário e a autenticação são demonstrações executadas no navegador. Este projeto não possui back-end; os feedbacks e a sessão são armazenados no `localStorage` do navegador em uso.

## Tecnologias

- React e JavaScript 
- Vite
- Tailwind CSS v4 (`tailwindcss` e `@tailwindcss/vite`)
- React Router (`react-router-dom`)
- API pública TimeAPI.io
- HTML5, CSS Grid e `localStorage`

## Rotas

| Rota | Acesso | Descrição |
|---|---|---|
| `/` | Público | Landing Page JoviStudy |
| `/login` | Público | Login demonstrativo |
| `/painel` | Privado | Consulta e exclusão dos feedbacks deste navegador |
| Qualquer rota inexistente | Público | Página 404 |

### Credenciais para teste

- **E-mail:** `admin@jovistudy.com`
- **Senha:** `jovi123`

As credenciais são fixas para demonstração e **não representam autenticação segura**.

## Pré-requisitos

Instale o **Node.js 20.19 ou superior** (ou **22.12 ou superior**) e o npm. Essas versões atendem ao requisito do Vite utilizado pelo projeto.

Confira as instalações:

```bash
node --version
npm --version
```

## Instalação

Clone o repositório e acesse a pasta:

```bash
git clone https://github.com/Fiap-Souga/sprint4---WebDevelopment2026.git
cd sprint4---WebDevelopment2026
```

Instale as dependências listadas no arquivo de lock:

```bash
npm ci
```

## Executar em desenvolvimento

```bash
npm run dev
```

Abra no navegador o endereço informado pelo Vite, normalmente `http://localhost:5173`. Para encerrar o servidor, pressione `Ctrl + C` no terminal.

## Testes manuais sugeridos

1. Navegue pelas seções da Landing Page e teste a interface em desktop, tablet e mobile.
2. Confira o relógio e a sincronização com a API TimeAPI.io.
3. Envie um feedback pelo formulário e atualize a página para confirmar que foi salvo no navegador.
4. Acesse `/painel` sem autenticação e confira o redirecionamento para `/login`.
5. Entre com as credenciais de teste e verifique a listagem e a exclusão de feedbacks.
6. Teste o botão de saída e acesse uma rota inexistente para conferir a página 404.

## Build de produção

Gere a versão de produção:

```bash
npm run build
```

Para executar uma prévia local do build:

```bash
npm run preview
```

O Vite informará o endereço local da prévia, normalmente `http://localhost:4173`.

## Uso de inteligência artificial

A inteligência artificial foi utilizada como apoio na conversão de estilos CSS para classes utilitárias do Tailwind CSS e na implementação das rotas públicas e privadas com React Router. O código e o resultado foram revisados pela equipe.

## Integrantes

- Eduardo Menzel — RM 570405
- Guilherme de Sousa Caiano — RM 570491
- Guilherme Nascimento dos Santos — RM 572539
- Luís Carlos — RM 569214
- Victor da Silva Souto — RM 571093

O arquivo `INTEGRANTES.TXT`, com os nomes e RMs, acompanha o projeto.
