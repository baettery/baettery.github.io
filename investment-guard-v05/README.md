# Investment Guard v0.5

Vercel-deployed source snapshot for the personal investment watcher.

## Live deployment
- https://investment-guard.vercel.app/

## v0.5 changes
- US + Korean holdings in one portfolio
- KRW/USD valuation split
- Korean quote/chart proxy via Naver Finance public endpoints
- Twelve Data retained for US quotes, QQQ and FX
- OpenAI server-side review endpoint
- OpenAI key is never committed; use Vercel environment variable `OPENAI_API_KEY`
- Cost-control model setting: `OPENAI_MODEL=gpt-5.6-luna`
- AI output is short and framed as risk/checkpoint review, not trade execution

## Deployment note
This folder is the Vercel source snapshot. The existing `/investment-guard/` GitHub Pages folder remains on v0.4 so it is not broken by server-only `/api/*` routes.

## Environment variables
- `OPENAI_API_KEY` — required for AI review
- `OPENAI_MODEL` — currently `gpt-5.6-luna`

## Korean market data
Korean market data uses unofficial Naver Finance endpoints through `api/kr.js`. It is free for this personal prototype but can break if Naver changes the endpoint. Manual price entry remains a fallback.
