# Blockchain Loyalty Platform - Project Context

## Project Overview

This is a blockchain-based loyalty rewards platform built on Hyperledger Fabric. The project is undergoing a major modernization from v1 (Fabric 1.0.2) to v2 with modern tech stack, AI-powered features, and SDK/plugin ecosystem.

## Current State (v1)

**Branch:** `v1` (backup of original codebase)

**Technology Stack:**
- Hyperledger Fabric 1.0.2 (2017 - very outdated)
- AngularJS 1.8 (End of Life)
- Node.js with callback patterns
- Go chaincode
- Pre-generated crypto material

**Issues:**
- Single organization setup (not production-ready)
- Hardcoded configurations
- No authentication/authorization
- No multi-tenancy support
- Limited error handling
- No testing infrastructure

## Target State (v2)

**Goal:** Transform into a modern, AI-powered SDK/SaaS platform for loyalty programs

### Key Features

1. **Modern Blockchain Infrastructure**
   - Hyperledger Fabric 2.5+
   - TypeScript chaincode
   - Fabric Gateway SDK
   - Multi-organization support

2. **AI/Agentic Features**
   - Conversational AI assistant for members
   - Fraud detection agent
   - Personalized reward recommendations
   - Predictive analytics (churn, LTV)
   - Campaign automation

3. **SDK/Plugin Ecosystem**
   - Core SDK (JavaScript/TypeScript, Python, Go, PHP)
   - React component library
   - Platform plugins:
     - Shopify app
     - WooCommerce plugin
     - WordPress plugin
   - Plugin marketplace

4. **Modern Architecture**
   - Backend: NestJS (TypeScript)
   - Frontend: Next.js 14 + TailwindCSS
   - AI: OpenAI/Claude + LangChain
   - Database: PostgreSQL + Redis
   - Deployment: Docker + Kubernetes

## Project Structure

```
blockchain-loyalty-fabric/
├── chats/                  # Chat history with Claude (gitignored)
├── dev/                    # Development docs and planning (gitignored)
├── network/                # [v1] Fabric network config
├── chaincode/              # [v1] Smart contracts (Go)
├── points-app/             # [v1] AngularJS frontend
├── server/                 # [v1] Node.js backend
└── [Future v2 structure]
    ├── packages/
    │   ├── chaincode/      # TypeScript chaincode
    │   ├── backend/        # NestJS API
    │   ├── frontend/       # Next.js web app
    │   ├── sdk/            # Core SDK
    │   ├── react/          # React components
    │   └── plugins/        # Platform integrations
    └── docs/
```

## Development Roadmap

### Phase 1: Foundation (Months 1-3) - MVP
- Hyperledger Fabric 2.5+ network
- TypeScript chaincode (points, programs, members, rewards)
- NestJS REST API
- Basic JavaScript/TypeScript SDK
- Simple React UI
- Docker deployment

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
- Admin dashboard
- Billing system (Stripe)

## Key Documents

See `dev/` folder for:
- Master project plan
- Technical architecture spec
- Development tracker
- Claude Code prompts
- Design documents

## Development Guidelines

### For Claude Code

When working on this project:

1. **Always check phase context** - Know which phase of the roadmap you're working on
2. **Maintain backwards compatibility** - v1 code may still be referenced
3. **Follow modern patterns** - TypeScript, async/await, proper error handling
4. **Security first** - No hardcoded secrets, validate all inputs
5. **Test coverage** - Aim for >80% coverage on new code
6. **Documentation** - Update docs as you build

### Git Commit Guidelines

**IMPORTANT - Commit Messages:**
- ❌ **DO NOT** add Claude attribution to git commit messages
- ❌ **DO NOT** include "Generated with Claude Code" or similar in commits
- ✅ **DO** write clean, professional commit messages following conventional commits format

**Code Attribution:**
- ✅ Code files, documentation, and README files can include attribution to:
  - **Author:** Subhadip Mitra
  - **Email:** contact@subhadipmitra.com
- ✅ License headers and file headers can include author information
- ❌ Git commit messages should remain clean and professional

**Commit Message Format:**
```
<type>: <subject>

<body>

<footer>
```

Examples:
```
feat: add points transaction endpoint

Implement POST /api/v1/points/earn endpoint with validation
and blockchain integration.

Closes #123
```

```
fix: resolve chaincode deployment issue

Update network script to properly wait for peer initialization
before deploying chaincode.
```

**Commit Types:**
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `test:` Test additions or changes
- `refactor:` Code refactoring
- `chore:` Build/tooling changes
- `perf:` Performance improvements

### Technology Preferences

- **Language:** TypeScript (strict mode)
- **API Framework:** NestJS
- **Frontend:** Next.js 14 with App Router
- **Testing:** Jest/Vitest + Playwright
- **Linting:** ESLint + Prettier
- **Monorepo:** Nx or Turborepo (TBD)

## Important Notes

⚠️ **Security Vulnerabilities:** The current v1 codebase has 23 known vulnerabilities (1 critical, 7 high). Do not use v1 dependencies in v2.

⚠️ **Breaking Changes:** v2 is a complete rewrite. Migration path from v1 will be provided separately.

✅ **SDK-First Approach:** All features should be accessible via SDK before building UI.

✅ **AI Integration:** AI features are core differentiators, not afterthoughts.

## How to Start Each Claude Code Session

### 📋 Pre-Session Checklist

Before starting work with Claude Code:

1. **Check Current Status**
   ```bash
   # View current branch and status
   git status

   # Check what phase/sprint we're in
   cat dev/03-TRACKER.md
   ```

2. **Review Progress**
   - Open `dev/03-TRACKER.md` to see:
     - Current sprint goals
     - Completed tasks
     - In-progress tasks
     - Known blockers

3. **Identify Next Task**
   - Pick a task from the tracker that's ready to work on
   - Check if there's a relevant prompt in `dev/prompts/`
   - Review any related architecture decisions in `dev/04-DECISIONS.md`

### 🎯 Session Startup Flow

**Step 1: Context Loading**
When starting a new Claude Code conversation, provide this context:

```
I'm working on the blockchain loyalty platform v2.
Please review claude.md for project context.

Current Status:
- Phase: [Phase X - Name]
- Sprint: [Week X]
- Last Completed: [Brief summary]
- Next Task: [Task from tracker]

[Paste relevant section from tracker if needed]
```

**Step 2: Task Execution**
- Reference relevant prompts from `dev/prompts/`
- Work on the identified task
- Test as you go
- Document any decisions made

**Step 3: Progress Update**
After completing work, update the tracker:

```bash
# Update tracker with completed tasks
# Mark new tasks as in-progress
# Document any blockers
```

### 📝 During the Session

**Keep Tracker Updated:**
- Move tasks from `pending` → `in_progress` → `completed`
- Add new tasks as they're discovered
- Document blockers immediately

**Document Decisions:**
- Any architectural decisions → `dev/04-DECISIONS.md`
- Quick notes → `dev/notes/YYYY-MM-DD.md`
- Design changes → `dev/designs/`

**Use Prompts:**
- Check `dev/prompts/README.md` for available prompts
- Use prompts to maintain consistency
- Update prompts if you discover better approaches

### 🔄 End of Session

Before ending your Claude Code session:

1. **Update Tracker** (`dev/03-TRACKER.md`)
   - Mark completed tasks ✅
   - Update progress percentages
   - Add any new tasks discovered
   - Document blockers 🔴

2. **Commit Your Work**
   ```bash
   # Stage changes
   git add .

   # Commit with clean message (NO Claude attribution)
   git commit -m "feat: implement chaincode points contract

   Add TypeScript implementation of points earning, redemption,
   and balance queries with full test coverage."

   # Push to remote
   git push origin master
   ```

3. **Create Session Notes** (Optional but recommended)
   ```bash
   # Copy template and fill in
   cp dev/notes/TEMPLATE.md dev/notes/$(date +%Y-%m-%d)-session.md
   ```

4. **Plan Next Session**
   - Look at tracker to see what's next
   - Note any prerequisites needed
   - Identify any blockers to resolve

### 🎯 Quick Reference for Common Sessions

**Starting Monorepo Setup:**
```
Working on: Monorepo setup with Turborepo
Using prompt: dev/prompts/monorepo-setup.md
Goal: Initialize monorepo structure for all packages
```

**Starting Fabric Network:**
```
Working on: Hyperledger Fabric 2.5 network setup
Using prompt: dev/prompts/01-fabric-network-setup.md
Goal: Get development blockchain network running
```

**Starting Chaincode Development:**
```
Working on: TypeScript chaincode for points transactions
Using prompt: dev/prompts/02-chaincode-development.md
Goal: Implement and test points contract
```

### 📊 Tracking Progress Across Sessions

**Daily Progress:**
- Update `dev/03-TRACKER.md` daily log section
- Quick notes on what got done

**Weekly Progress:**
- Review weekly goals vs actual completion
- Update milestone progress
- Adjust timeline if needed

**Monthly Progress:**
- Compare against master plan
- Document lessons learned
- Update velocity metrics

### 💡 Tips for Effective Sessions

1. **Start Small:** Pick one focused task per session
2. **Test Frequently:** Run tests after each significant change
3. **Commit Often:** Small, focused commits are better
4. **Document as You Go:** Don't leave documentation for later
5. **Use Prompts:** Leverage existing prompts for consistency
6. **Update Tracker:** Keep it current for next session

### 🚨 If You Get Stuck

1. Check `dev/04-DECISIONS.md` for relevant architecture decisions
2. Review `dev/02-TECHNICAL-ARCHITECTURE.md` for design details
3. Check if there's a related prompt in `dev/prompts/`
4. Document the blocker in tracker
5. Consider if this needs an architecture decision

### 📈 Progress Indicators

Always know where you are:
- **Current Phase:** Check tracker header
- **Current Sprint:** Week number in tracker
- **Overall Progress:** Milestone completion percentage
- **Next Milestone:** See milestone tracking in tracker

## Quick Links

- Original Repository: https://github.com/bassrehab/blockchain-loyalty-fabric
- Hyperledger Fabric Docs: https://hyperledger-fabric.readthedocs.io/
- Fabric Gateway SDK: https://hyperledger.github.io/fabric-gateway/

## Getting Started

### First Time Setup (Already Complete!)
1. ✅ Review `dev/01-MASTER-PROJECT-PLAN.md`
2. ✅ Review `dev/02-TECHNICAL-ARCHITECTURE.md`
3. ✅ Review `dev/03-TRACKER.md` for current progress
4. ✅ Familiarize with `dev/prompts/` for development guidance

### Starting Development Now!

**You're ready to build!** Follow the workflow in "How to Start Each Claude Code Session" above.

**Next Immediate Tasks (Week 1):**
1. Set up monorepo with Turborepo (use `dev/prompts/monorepo-setup.md`)
2. Initialize package structure
3. Set up GitHub Actions CI/CD
4. Prepare development environment

**See `dev/03-TRACKER.md` for detailed current sprint tasks.**

---

**Project Status:** 🚀 Ready to Start Building - Phase 1, Week 1
**Last Updated:** 2025-11-16
**Author:** Subhadip Mitra (contact@subhadipmitra.com)
**Repository:** https://github.com/bassrehab/blockchain-loyalty-fabric
