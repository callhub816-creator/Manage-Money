/**
 * Credit Cards Domain - Affiliate Links
 * Centralized configuration for EarnKaro affiliate links.
 */

export interface AffiliateLinkConfig {
    enabled: boolean;
    url: string;
    provider: string;
}

export const creditCardAffiliateLinks: Record<string, AffiliateLinkConfig> = {
    "hdfc-millennia-credit-card": {
        enabled: true,
        url: "https://bitli.in/bCFA3qf",
        provider: "EarnKaro"
    },
    "hdfc-bank-regalia-gold-credit-card": {
        enabled: true,
        url: "https://bitli.in/z5OUjzI",
        provider: "EarnKaro"
    },
    "axis-bank-ace-credit-card": {
        enabled: true,
        url: "https://bitli.in/NeyyO2t",
        provider: "EarnKaro"
    },
    "sbi-cashback-credit-card": {
        enabled: true,
        url: "https://bitli.in/jET9dgh",
        provider: "EarnKaro"
    },
    "idfc-first-wow-credit-card": {
        enabled: true,
        url: "https://bitli.in/D1omNN0",
        provider: "EarnKaro"
    },
    "axis-airtel-credit-card": {
        enabled: true,
        url: "https://bitli.in/WoruDE8",
        provider: "EarnKaro"
    },
    "au-lit-credit-card": {
        enabled: true,
        url: "https://bitli.in/wzzehew",
        provider: "EarnKaro"
    },
    "sbi-simply-click-credit-card": {
        enabled: true,
        url: "https://bitli.in/rc6yqJz",
        provider: "EarnKaro"
    }
};
