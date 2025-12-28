/**
 * Insurance Domain - Affiliate Links
 * Centralized configuration for EarnKaro affiliate links.
 */

export interface AffiliateLinkConfig {
    enabled: boolean;
    url: string;
    provider: string;
}

export const insuranceAffiliateLinks: Record<string, AffiliateLinkConfig> = {
    "health": {
        enabled: false,
        url: "",
        provider: "EarnKaro"
    },
    "term": {
        enabled: false,
        url: "",
        provider: "EarnKaro"
    },
    "car": {
        enabled: false,
        url: "",
        provider: "EarnKaro"
    },
    "bike": {
        enabled: false,
        url: "",
        provider: "EarnKaro"
    }
};
