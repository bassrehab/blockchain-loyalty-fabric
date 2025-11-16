# @loyalty/types

Shared TypeScript types for the blockchain loyalty platform.

## Overview

This package contains all shared type definitions used across the platform:
- Domain types (Program, Member, Transaction, Reward)
- API types (DTOs, responses)
- Chaincode types (state models, events)

## Usage

```typescript
import {
  Program,
  Member,
  Transaction,
  EarnPointsDto,
  TransactionType,
} from '@loyalty/types';

const transaction: EarnPointsDto = {
  memberId: 'member123',
  programId: 'prog456',
  amount: 100,
};
```

## Types Included

### Domain Types
- `Program` - Loyalty program
- `Member` - Program member
- `MemberAccount` - Member's account in a program
- `Transaction` - Points transaction
- `Reward` - Redeemable reward
- `Redemption` - Reward redemption

### API Types
- `SDKConfig` - SDK configuration
- `ApiResponse<T>` - Standard API response wrapper
- `ApiError` - Error response
- `QueryOptions` - Query/filter options

### Chaincode Types
- `ChaincodeContext` - Contract context
- `ChaincodeStub` - Stub interface
- `PointsEarnedEvent` - Event types

## Development

```bash
# Build types
pnpm build

# Watch mode
pnpm dev

# Type check
pnpm typecheck
```

## Author

Subhadip Mitra <contact@subhadipmitra.com>
