# @loyalty/sdk

JavaScript/TypeScript SDK for the Blockchain Loyalty Platform.

## Installation

```bash
npm install @loyalty/sdk
# or
pnpm add @loyalty/sdk
```

## Quick Start

```typescript
import { LoyaltySDK } from '@loyalty/sdk';

const sdk = new LoyaltySDK({
  apiKey: 'your-api-key',
  environment: 'production',
});

// Test connection
const connected = await sdk.testConnection();
console.log('Connected:', connected);
```

## Features

- 🎯 Simple, intuitive API
- 📦 TypeScript support with full type definitions
- 🔄 Promise-based async operations
- 🛡️ Built-in error handling
- 📊 Automatic retries and timeout handling

## API (Coming Soon)

### Programs
- `programs.create()` - Create loyalty program
- `programs.get()` - Get program details
- `programs.list()` - List programs

### Points
- `points.earn()` - Award points
- `points.redeem()` - Redeem points
- `points.getBalance()` - Check balance

### Members
- `members.create()` - Register member
- `members.get()` - Get member details

## Author

Subhadip Mitra <contact@subhadipmitra.com>
