/**
 * Transaction types
 * @author Subhadip Mitra <contact@subhadipmitra.com>
 */

import { GeoLocation } from './common';

/**
 * Points transaction types
 */
export type TransactionType =
  | 'EARN'
  | 'REDEEM'
  | 'TRANSFER'
  | 'EXPIRE'
  | 'ADJUST';

/**
 * Points transaction
 */
export interface Transaction {
  id: string;
  type: TransactionType;
  programId: string;
  memberId: string;
  /** Points amount (positive for earn, negative for redeem) */
  amount: number;
  /** Balance after this transaction */
  balance: number;
  /** Transaction metadata */
  metadata: TransactionMetadata;
  /** Transaction timestamp */
  timestamp: string;
}

/**
 * Transaction metadata
 */
export interface TransactionMetadata {
  /** Associated order ID (for e-commerce) */
  orderId?: string;
  /** Merchant/store ID */
  merchantId?: string;
  /** Associated reward ID (for redemptions) */
  rewardId?: string;
  /** Description */
  description?: string;
  /** Source system */
  source?: 'api' | 'shopify' | 'woocommerce' | 'manual' | 'system';
  /** Geographic location */
  location?: GeoLocation;
  /** Additional custom metadata */
  custom?: Record<string, unknown>;
}

/**
 * Earn points DTO
 */
export interface EarnPointsDto {
  memberId: string;
  programId?: string;
  /** Amount of currency spent */
  amount: number;
  merchantId?: string;
  orderId?: string;
  description?: string;
  metadata?: Record<string, unknown>;
}

/**
 * Redeem points DTO
 */
export interface RedeemPointsDto {
  memberId: string;
  programId?: string;
  /** Points to redeem */
  points: number;
  rewardId?: string;
  description?: string;
  metadata?: Record<string, unknown>;
}

/**
 * Transfer points DTO
 */
export interface TransferPointsDto {
  fromMemberId: string;
  toMemberId: string;
  programId: string;
  /** Points to transfer */
  points: number;
  description?: string;
  metadata?: Record<string, unknown>;
}

/**
 * Transaction history query
 */
export interface TransactionHistoryQuery {
  memberId?: string;
  programId?: string;
  type?: TransactionType;
  startDate?: string;
  endDate?: string;
  limit?: number;
  offset?: number;
}

/**
 * Transaction history response
 */
export interface TransactionHistory {
  transactions: Transaction[];
  total: number;
  hasMore: boolean;
}
