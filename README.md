# NexaLume Digital

Site institucional da NexaLume Digital. Landing page com apresentacao de servicos, integracao WhatsApp e formulario de contato.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deploy:** Docker + Azure DevOps pipeline (multi-branch: develop/main)

## Getting Started

### Docker (recomendado)

```bash
git clone https://github.com/Rahgomes/nexalumedigital.git
cd nexalumedigital
cp .env.example .env.local    # ajustar variaveis
docker build -t nexalume .
docker run -p 3000:3000 --env-file .env.local nexalume
```

Acesse http://localhost:3000

### Local

Prerequisites: Node.js 22+.

```bash
git clone https://github.com/Rahgomes/nexalumedigital.git
cd nexalumedigital
cp .env.example .env.local    # ajustar variaveis
npm install
npm run dev
```

### Registry privado

```bash
# DEV
docker pull registry.ramongomessilva.com.br/nexalume-dev:latest
docker run -p 3000:3000 registry.ramongomessilva.com.br/nexalume-dev:latest

# PROD
docker pull registry.ramongomessilva.com.br/nexalume-prod:latest
docker run -p 3000:3000 registry.ramongomessilva.com.br/nexalume-prod:latest
```

## Variaveis de Ambiente

| Variavel | Descricao |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL do site |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Numero WhatsApp para contato |
| `NEXT_PUBLIC_WHATSAPP_MESSAGE` | Mensagem padrao do WhatsApp |

## CI/CD

Pipeline Azure DevOps com fluxo multi-branch:

- Push em `develop` -> deploy automatico em DEV -> cria PR para `main`
- Merge na `main` -> deploy automatico em PROD -> sync develop com main

Imagens versionadas no registry privado.
