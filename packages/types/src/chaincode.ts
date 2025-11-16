/**
 * Chaincode-specific types
 * @author Subhadip Mitra <contact@subhadipmitra.com>
 */

import { Program } from './program';
import { MemberAccount } from './member';
import { Transaction } from './transaction';
import { Reward } from './reward';

/**
 * Chaincode context (available in transaction functions)
 */
export interface ChaincodeContext {
  stub: ChaincodeStub;
  clientIdentity: ClientIdentity;
}

/**
 * Chaincode stub interface (simplified)
 */
export interface ChaincodeStub {
  getTxID(): string;
  getTxTimestamp(): { seconds: number; nanos: number };
  getState(key: string): Promise<Uint8Array>;
  putState(key: string, value: Uint8Array): Promise<void>;
  deleteState(key: string): Promise<void>;
  getStateByRange(
    startKey: string,
    endKey: string
  ): Promise<AsyncIterable<KeyValue>>;
  setEvent(name: string, payload: Uint8Array): void;
}

/**
 * Client identity interface
 */
export interface ClientIdentity {
  getMSPID(): string;
  getID(): string;
  getAttributeValue(attrName: string): string | null;
}

/**
 * Key-value pair
 */
export interface KeyValue {
  key: string;
  value: Uint8Array;
}

/**
 * Chaincode state keys
 */
export enum StateKey {
  PROGRAM = 'program',
  ACCOUNT = 'account',
  TRANSACTION = 'txn',
  REWARD = 'reward',
  REDEMPTION = 'redemption',
}

/**
 * Chaincode state types
 */
export type ProgramState = Program;
export type AccountState = MemberAccount;
export type TransactionState = Transaction;
export type RewardState = Reward;

/**
 * Chaincode events
 */
export interface ChaincodeEvent {
  name: string;
  payload: unknown;
}

/**
 * Points earned event
 */
export interface PointsEarnedEvent {
  memberId: string;
  programId: string;
  amount: number;
  transactionId: string;
  timestamp: string;
}

/**
 * Points redeemed event
 */
export interface PointsRedeemedEvent {
  memberId: string;
  programId: string;
  points: number;
  rewardId?: string;
  transactionId: string;
  timestamp: string;
}

/**
 * Tier upgraded event
 */
export interface TierUpgradedEvent {
  memberId: string;
  programId: string;
  oldTier: string;
  newTier: string;
  timestamp: string;
}

/**
 * Points transferred event
 */
export interface PointsTransferredEvent {
  fromMemberId: string;
  toMemberId: string;
  programId: string;
  points: number;
  transactionId: string;
  timestamp: string;
}
