/**
 * Main SDK Client
 * @author Subhadip Mitra <contact@subhadipmitra.com>
 */

import type { SDKConfig } from '@loyalty/types';

/**
 * Loyalty SDK Client
 */
export class LoyaltySDK {
  private config: SDKConfig;
  private baseUrl: string;

  constructor(config: SDKConfig) {
    this.config = {
      environment: 'development',
      timeout: 30000,
      debug: false,
      ...config,
    };

    // Determine base URL
    if (this.config.endpoint) {
      this.baseUrl = this.config.endpoint;
    } else {
      this.baseUrl = this.getDefaultEndpoint();
    }

    if (this.config.debug) {
      console.log('[LoyaltySDK] Initialized:', {
        baseUrl: this.baseUrl,
        environment: this.config.environment,
      });
    }
  }

  /**
   * Get default API endpoint based on environment
   */
  private getDefaultEndpoint(): string {
    switch (this.config.environment) {
      case 'production':
        return 'https://api.loyalty.example.com';
      case 'staging':
        return 'https://api-staging.loyalty.example.com';
      default:
        return 'http://localhost:3000';
    }
  }

  /**
   * Get SDK version
   */
  getVersion(): string {
    return '0.1.0';
  }

  /**
   * Test connection to API
   */
  async testConnection(): Promise<boolean> {
    try {
      // TODO: Implement actual health check
      return true;
    } catch (error) {
      if (this.config.debug) {
        console.error('[LoyaltySDK] Connection test failed:', error);
      }
      return false;
    }
  }
}
