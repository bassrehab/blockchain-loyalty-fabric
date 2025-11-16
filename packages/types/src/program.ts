/**
 * Loyalty Program types
 * @author Subhadip Mitra <contact@subhadipmitra.com>
 */

import { EntityStatus, Timestamps } from './common';

/**
 * Loyalty Program
 */
export interface Program extends Timestamps {
  id: string;
  name: string;
  description?: string;
  organizationId: string;
  rules: ProgramRules;
  tiers?: MembershipTier[];
  status: EntityStatus;
  metadata?: Record<string, unknown>;
}

/**
 * Program rules configuration
 */
export interface ProgramRules {
  /** Points earned per currency unit (e.g., 1 point per dollar) */
  earnRate: number;
  /** Currency units required per point when redeeming */
  redemptionRate: number;
  /** Minimum points for redemption */
  minimumRedemption?: number;
  /** Points expiry policy */
  expiryPolicy?: ExpiryPolicy;
  /** Earning multipliers for special conditions */
  multipliers?: EarningMultiplier[];
}

/**
 * Points expiry policy
 */
export interface ExpiryPolicy {
  /** Enable points expiration */
  enabled: boolean;
  /** Days until points expire */
  expiryDays?: number;
  /** Warning days before expiry */
  warningDays?: number;
  /** Expiry calculation method */
  method?: 'rolling' | 'fixed' | 'tier-based';
}

/**
 * Earning multipliers for special conditions
 */
export interface EarningMultiplier {
  id: string;
  name: string;
  /** Multiplier value (e.g., 2 for 2x points) */
  multiplier: number;
  /** Condition for this multiplier */
  condition: MultiplierCondition;
  /** Start date (optional) */
  startDate?: string;
  /** End date (optional) */
  endDate?: string;
  /** Is this multiplier active */
  active: boolean;
}

/**
 * Multiplier condition
 */
export interface MultiplierCondition {
  type: 'merchant' | 'category' | 'amount' | 'tier' | 'time' | 'custom';
  value: unknown;
}

/**
 * Membership tier configuration
 */
export interface MembershipTier {
  id: string;
  name: string;
  /** Minimum points to reach this tier */
  minPoints: number;
  /** Benefits of this tier */
  benefits?: string[];
  /** Tier-specific multiplier */
  pointsMultiplier?: number;
  /** Color code for UI */
  color?: string;
}

/**
 * Create program DTO
 */
export interface CreateProgramDto {
  name: string;
  description?: string;
  organizationId: string;
  rules: ProgramRules;
  tiers?: MembershipTier[];
}

/**
 * Update program DTO
 */
export interface UpdateProgramDto {
  name?: string;
  description?: string;
  rules?: Partial<ProgramRules>;
  tiers?: MembershipTier[];
  status?: EntityStatus;
}
