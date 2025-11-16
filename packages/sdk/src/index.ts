/**
 * Blockchain Loyalty Platform - JavaScript/TypeScript SDK
 * @author Subhadip Mitra <contact@subhadipmitra.com>
 */

export { LoyaltySDK } from './client';
export type { SDKConfig } from '@loyalty/types';

// Re-export common types for convenience
export type {
  Program,
  Member,
  Transaction,
  Reward,
  EarnPointsDto,
  RedeemPointsDto,
  CreateProgramDto,
  CreateMemberDto,
} from '@loyalty/types';
