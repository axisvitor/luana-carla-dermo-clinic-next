# Luana Carla Dermo Clinic — Website Next.js

Stack atual:
- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- TypeScript

Projeto preparado para deploy na Vercel.

## Estrutura
- `app/` — rotas e metadata
- `components/site/` — header, footer, seções e formulário
- `lib/` — config do site e helpers
- `public/brand/` — favicon, OG e ícones
- `public/generated/` — imagens refinadas e assets vindos do Stitch

## Scripts
- `pnpm dev`
- `pnpm lint`
- `pnpm build`
- `pnpm start`

## Desenvolvimento local
```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Abra:
- `http://localhost:3000`

## Deploy na Vercel
1. Suba esta pasta para um repositório Git.
2. Na Vercel, importe o repositório.
3. Se este projeto estiver em monorepo, defina o Root Directory como:
   - `website-next-v1`
4. Configure a variável opcional:
   - `NEXT_PUBLIC_SITE_URL=https://seu-dominio.com`
5. Faça o deploy.

A build local já foi validada com:
- `pnpm lint`
- `pnpm build`

## Observações
- O fluxo de primeiro contato continua orientado para WhatsApp pela equipe da clínica.
- Quando o link oficial do WhatsApp estiver definido, o CTA pode ser conectado diretamente ao canal real.
- Ainda vale trocar imagens por fotos próprias da clínica quando disponíveis, principalmente laser e retratos institucionais.
