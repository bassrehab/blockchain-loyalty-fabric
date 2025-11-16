/**
 * Member types
 * @author Subhadip Mitra <contact@subhadipmitra.com>
 */

import { EntityStatus, Timestamps } from './common';

/**
 * Loyalty program member
 */
export interface Member extends Timestamps {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  /** Member accounts across different programs */
  accounts: MemberAccount[];
  status: EntityStatus;
  metadata?: Record<string, unknown>;
}

/**
 * Member account for a specific program
 */
export interface MemberAccount {
  programId: string;
  memberId: string;
  /** Current points balance */
  balance: number;
  /** Total points earned (lifetime) */
  lifetimeEarned: number;
  /** Total points redeemed (lifetime) */
  lifetimeRedeemed: number;
  /** Current tier */
  tier?: string;
  /** Account status */
  status: 'active' | 'suspended' | 'closed';
  /** Last transaction date */
  lastTransactionDate?: string;
  /** Account metadata */
  metadata?: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
}

/**
 * Create member DTO
 */
export interface CreateMemberDto {
  email: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  programId?: string;
  metadata?: Record<string, unknown>;
}

/**
 * Update member DTO
 */
export interface UpdateMemberDto {
  firstName?: string;
  lastName?: string;
  phone?: string;
  status?: EntityStatus;
  metadata?: Record<string, unknown>;
}

/**
 * Member balance response
 */
export interface MemberBalance {
  memberId: string;
  programId: string;
  balance: number;
  tier?: string;
  lifetimeEarned: number;
  lifetimeRedeemed: number;
}
