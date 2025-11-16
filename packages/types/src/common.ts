/**
 * Common types used across the platform
 * @author Subhadip Mitra <contact@subhadipmitra.com>
 */

/**
 * Standard response wrapper for API responses
 */
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: ApiError;
  metadata?: ResponseMetadata;
}

/**
 * API error structure
 */
export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
}

/**
 * Response metadata (pagination, timing, etc.)
 */
export interface ResponseMetadata {
  timestamp: string;
  requestId?: string;
  pagination?: PaginationMetadata;
}

/**
 * Pagination metadata
 */
export interface PaginationMetadata {
  page: number;
  limit: number;
  total: number;
  hasMore: boolean;
}

/**
 * Query options for listing/searching
 */
export interface QueryOptions {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  filters?: Record<string, unknown>;
}

/**
 * Timestamp fields for entities
 */
export interface Timestamps {
  createdAt: string;
  updatedAt: string;
}

/**
 * Entity status
 */
export type EntityStatus = 'active' | 'inactive' | 'archived' | 'suspended';

/**
 * Geographic location
 */
export interface GeoLocation {
  latitude: number;
  longitude: number;
  address?: string;
  city?: string;
  country?: string;
}
