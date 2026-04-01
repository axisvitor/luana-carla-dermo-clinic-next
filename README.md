# Luana Carla Dermo Clinic — Website Next.js

Stack atual:
- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- TypeScript

Projeto preparado para deploy na Vercel.

## Estrutura
- `app/` — rotas e metadata
- `components/site/` — header, footer, seções e componentes de interface
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
### Pela interface web
1. Suba esta pasta para um repositório Git.
2. Na Vercel, importe o repositório.
3. Se este projeto estiver em monorepo, defina o Root Directory como:
   - `website-next-v1`
4. Configure a variável opcional:
   - `NEXT_PUBLIC_SITE_URL=https://seu-dominio.com`
5. Faça o deploy.

### Pela CLI
```bash
pnpm dlx vercel login
pnpm dlx vercel
pnpm dlx vercel --prod
```

Observação:
- neste ambiente, `pnpm dlx vercel` funciona, mas ainda não há credenciais configuradas para publicar direto pela CLI

A build local já foi validada com:
- `pnpm lint`
- `pnpm build`

## SEO / metadata
- metadata base consistente
- Open Graph e Twitter cards configurados
- sitemap.xml e robots.txt gerados pelo App Router
- manifest.webmanifest configurado
- JSON-LD básico de LocalBusiness no layout raiz

## Observações
- O fluxo de primeiro contato continua orientado para WhatsApp pela equipe da clínica, sem formulários e sem self-service.
- Quando o link oficial do WhatsApp estiver definido, os CTAs podem apontar diretamente para o canal real.
- Ainda vale trocar imagens por fotos próprias da clínica quando disponíveis, principalmente laser e retratos institucionais.
