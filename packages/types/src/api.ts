/**
 * API-specific types
 * @author Subhadip Mitra <contact@subhadipmitra.com>
 */

/**
 * SDK configuration
 */
export interface SDKConfig {
  /** API endpoint URL */
  endpoint?: string;
  /** API key for authentication */
  apiKey?: string;
  /** Environment (dev, staging, production) */
  environment?: 'development' | 'staging' | 'production';
  /** Request timeout in milliseconds */
  timeout?: number;
  /** Enable debug logging */
  debug?: boolean;
}

/**
 * Authentication token
 */
export interface AuthToken {
  accessToken: string;
  tokenType: 'Bearer';
  expiresIn: number;
  refreshToken?: string;
}

/**
 * API health check response
 */
export interface HealthCheck {
  status: 'healthy' | 'degraded' | 'unhealthy';
  version: string;
  timestamp: string;
  services: {
    blockchain: ServiceStatus;
    database: ServiceStatus;
    cache: ServiceStatus;
    ai?: ServiceStatus;
  };
}

/**
 * Service status
 */
export interface ServiceStatus {
  status: 'up' | 'down' | 'degraded';
  latency?: number;
  message?: string;
}
