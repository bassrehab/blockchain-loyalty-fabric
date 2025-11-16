# Blockchain Loyalty Platform v2

Modern, AI-powered SDK/SaaS platform for blockchain-based loyalty rewards built on Hyperledger Fabric 2.5+.

> **Note:** This is v2 - a complete rewrite of the platform. For the legacy v1 codebase, see the `v1` branch.

## Overview

This is a complete modernization of the blockchain loyalty platform, featuring:

- 🔗 **Modern Blockchain:** Hyperledger Fabric 2.5+ with TypeScript chaincode
- 🤖 **AI-Powered:** Conversational AI assistant, fraud detection, personalized recommendations
- 📦 **SDK-First:** Easy integration for any platform via JavaScript/TypeScript SDK
- 🔌 **Plugin Ecosystem:** Shopify, WooCommerce, WordPress integrations
- 🎨 **Modern Stack:** NestJS backend, Next.js frontend, React components

## Project Structure

```
blockchain-loyalty-platform/
├── packages/
│   ├── types/          # Shared TypeScript types
│   ├── sdk/            # Core JavaScript/TypeScript SDK
│   ├── chaincode/      # Hyperledger Fabric chaincode
│   ├── backend/        # NestJS REST API
│   ├── frontend/       # Next.js web application
│   └── react/          # React component library
├── dev/                # Development documentation (gitignored)
└── chats/              # Planning notes (gitignored)
```

## Prerequisites

- Node.js 18+ (currently using v22.13.1)
- pnpm 8+ (currently using v10.14.0)
- Docker & Docker Compose (for Fabric network)
- Git

## Quick Start

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Build All Packages

```bash
pnpm run build
```

### 3. Run Tests

```bash
pnpm run test
```

## Development

### Available Commands

```bash
# Build all packages
pnpm run build

# Run all packages in dev/watch mode
pnpm run dev

# Run all tests
pnpm run test

# Lint all code
pnpm run lint

# Format all code
pnpm run format

# Type check all packages
pnpm run typecheck

# Clean all build artifacts
pnpm run clean
```

### Working with Packages

Each package can be developed independently:

```bash
# Build specific package
pnpm --filter @loyalty/sdk build

# Run specific package in dev mode
pnpm --filter @loyalty/backend dev

# Test specific package
pnpm --filter @loyalty/chaincode test
```

## Packages

### @loyalty/types

Shared TypeScript type definitions for all packages.

### @loyalty/sdk

Core JavaScript/TypeScript SDK for integrating loyalty features into any application.

### @loyalty/chaincode

Hyperledger Fabric chaincode (smart contracts) written in TypeScript:
- Program management
- Points transactions
- Member accounts
- Rewards catalog

### @loyalty/backend

NestJS REST API providing:
- Blockchain Gateway integration
- Authentication & authorization
- AI services integration
- Webhooks and notifications

### @loyalty/frontend

Next.js 14 web application with:
- Admin dashboard
- Member portal
- Analytics and reporting

### @loyalty/react

React component library for building loyalty UIs:
- Points balance widgets
- Transaction history
- Rewards gallery
- AI chat assistant

## Development Roadmap

### Phase 1: Foundation (Months 1-3) - Current
- ✅ Monorepo setup with Turborepo
- ✅ TypeScript types package
- ✅ Basic SDK structure
- 🚧 Hyperledger Fabric 2.5 network
- 🚧 TypeScript chaincode
- 🚧 NestJS API
- 🚧 Next.js frontend

### Phase 2: Platform Integrations (Months 4-5)
- Shopify app/plugin
- WooCommerce plugin
- WordPress plugin
- React component library

### Phase 3: AI Features (Months 6-8)
- Conversational AI assistant
- Fraud detection agent
- Personalized recommendations
- Predictive analytics

### Phase 4: Scale & Polish (Months 9-12)
- Multi-tenant architecture
- Kubernetes deployment
- Monitoring & observability
- Billing system

## Technology Stack

- **Blockchain:** Hyperledger Fabric 2.5+
- **Chaincode:** TypeScript with fabric-contract-api
- **Backend:** NestJS, PostgreSQL, Redis
- **Frontend:** Next.js 14, TailwindCSS, React Query
- **AI:** OpenAI/Claude, LangChain, Pinecone
- **Build:** Turborepo, pnpm workspaces, tsup
- **Testing:** Vitest, Playwright
- **DevOps:** Docker, Kubernetes, GitHub Actions

## Contributing

This is currently a private project. For contribution guidelines, see [CONTRIBUTING.md](CONTRIBUTING.md) (coming soon).

## License

MIT License - see [LICENSE](LICENSE) for details.

## Author

**Subhadip Mitra**
- Email: contact@subhadipmitra.com
- GitHub: [@bassrehab](https://github.com/bassrehab)

## Links

- [Repository](https://github.com/bassrehab/blockchain-loyalty-fabric)
- [v1 Branch](https://github.com/bassrehab/blockchain-loyalty-fabric/tree/v1) (legacy code)
- [Hyperledger Fabric Docs](https://hyperledger-fabric.readthedocs.io/)
- [Project Documentation](dev/) (for developers with repository access)

---

**Status:** 🚀 Active Development - Phase 1
**Version:** 2.0.0-alpha
**Last Updated:** 2025-11-16
