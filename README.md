# Clínica Saudades

Site institucional da Clínica Saudades, desenvolvido com Next.js e Tailwind CSS.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`. Se a porta estiver ocupada, o Next.js informará a porta alternativa no terminal.

## Feed automático do Instagram

O site consulta a API oficial da Meta, atualiza o feed a cada cinco minutos e destaca automaticamente a publicação com mais curtidas entre as publicações retornadas.

1. Use uma conta profissional do Instagram (Business ou Creator) vinculada à configuração exigida pelo aplicativo da Meta.
2. Crie/configure o aplicativo no Meta for Developers e obtenha o ID da conta do Instagram e um token de acesso válido.
3. Copie `.env.example` para `.env.local`.
4. Preencha `INSTAGRAM_USER_ID` e `INSTAGRAM_ACCESS_TOKEN`.
5. Reinicie o servidor local.

Sem essas variáveis, o site mostra as publicações fixas já cadastradas como alternativa. Nunca envie `.env.local` ou o token para o GitHub.

## Publicação na Vercel

Cadastre as mesmas variáveis em **Project Settings > Environment Variables** na Vercel e faça um novo deploy. Depois disso, novas publicações aparecerão automaticamente, sem alteração de código.

## Verificações

```bash
npx tsc --noEmit
npm run build
```
