/**
 * Reward types
 * @author Subhadip Mitra <contact@subhadipmitra.com>
 */

import { EntityStatus, Timestamps } from './common';

/**
 * Reward
 */
export interface Reward extends Timestamps {
  id: string;
  programId: string;
  name: string;
  description?: string;
  /** Points cost to redeem */
  pointsCost: number;
  /** Available inventory */
  inventory: number;
  /** Category */
  category?: string;
  /** Image URL */
  imageUrl?: string;
  /** Terms and conditions */
  terms?: string;
  status: EntityStatus;
  metadata?: Record<string, unknown>;
}

/**
 * Create reward DTO
 */
export interface CreateRewardDto {
  programId: string;
  name: string;
  description?: string;
  pointsCost: number;
  inventory: number;
  category?: string;
  imageUrl?: string;
  terms?: string;
  metadata?: Record<string, unknown>;
}

/**
 * Update reward DTO
 */
export interface UpdateRewardDto {
  name?: string;
  description?: string;
  pointsCost?: number;
  inventory?: number;
  category?: string;
  imageUrl?: string;
  terms?: string;
  status?: EntityStatus;
  metadata?: Record<string, unknown>;
}

/**
 * Reward redemption
 */
export interface Redemption extends Timestamps {
  id: string;
  rewardId: string;
  memberId: string;
  programId: string;
  pointsCost: number;
  /** Redemption status */
  status: 'pending' | 'fulfilled' | 'cancelled';
  /** Fulfillment details */
  fulfillmentDetails?: string;
  transactionId?: string;
}
