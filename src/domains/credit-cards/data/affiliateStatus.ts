/**
 * Credit Cards Domain - Affiliate Integration Status
 *
 * Controls which cards have active affiliate links and their destinations.
 * Use card slugs (lowercase, hyphens) as keys for consistency with image naming.
 */

export interface AffiliateConfig {
  enabled: boolean;
  link?: string;
  bankName: string;
}

export const AFFILIATE_STATUS: Record<string, AffiliateConfig> = {
  'hdfc-bank-millennia': {
    enabled: false,
    bankName: 'HDFC Bank',
    // link: 'https://affiliate.hdfc.com/millennia' // TODO: Add when affiliate agreement is finalized
  },
  'hdfc-bank-regalia': {
    enabled: false,
    bankName: 'HDFC Bank',
    // link: 'https://affiliate.hdfc.com/regalia'
  },
  'axis-bank-ace': {
    enabled: false,
    bankName: 'Axis Bank',
    // link: 'https://affiliate.axis.com/ace'
  },
  'sbi-cashback-card': {
    enabled: false,
    bankName: 'State Bank of India',
    // link: 'https://affiliate.sbi.com/cashback'
  },
  'kotak-811-credit-card': {
    enabled: false,
    bankName: 'Kotak Bank',
    // link: 'https://affiliate.kotak.com/811'
  },
  'icici-airtel-black': {
    enabled: false,
    bankName: 'ICICI Bank',
    // link: 'https://affiliate.icici.com/airtel-black'
  },
  'icici-amazon-pay': {
    enabled: false,
    bankName: 'ICICI Bank',
    // link: 'https://affiliate.icici.com/amazon-pay'
  },
};

/**
 * Get affiliate configuration for a card
 * @param cardSlug - Card identifier in slug format (e.g., 'hdfc-bank-millennia')
 * @returns Affiliate configuration or default disabled config
 */
export const getAffiliateConfig = (cardSlug: string): AffiliateConfig => {
  return (
    AFFILIATE_STATUS[cardSlug] || {
      enabled: false,
      bankName: 'Bank',
    }
  );
};

/**
 * Check if affiliate link is available for a card
 */
export const isAffiliateActive = (cardSlug: string): boolean => {
  const config = getAffiliateConfig(cardSlug);
  return config.enabled && !!config.link;
};

/**
 * Get affiliate link for a card
 */
export const getAffiliateLink = (cardSlug: string): string | null => {
  const config = getAffiliateConfig(cardSlug);
  return config.enabled && config.link ? config.link : null;
};
