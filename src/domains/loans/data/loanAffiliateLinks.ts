/**
 * Loans Domain - Affiliate Links
 * Centralized configuration for EarnKaro affiliate links.
 */

export interface AffiliateLinkConfig {
    enabled: boolean;
    url: string;
    provider: string;
}

export const loanAffiliateLinks: Record<string, AffiliateLinkConfig> = {
    "hdfc-bank-personal-loan": {
        enabled: true,
        url: "https://bitli.in/437Vr4z",
        provider: "EarnKaro"
    },
    "axis-bank-personal-loan": {
        enabled: true,
        url: "https://bitli.in/kuCQkdw",
        provider: "EarnKaro"
    },
    "bajaj-finserv-personal-loan": {
        enabled: true,
        url: "https://bitli.in/1uBBTNM",
        provider: "EarnKaro"
    },
    "tata-capital-personal-loan": {
        enabled: true,
        url: "https://bitli.in/LwpKd9Y",
        provider: "EarnKaro"
    },
    "cashe-personal-loan": {
        enabled: true,
        url: "https://bitli.in/793FUzA",
        provider: "EarnKaro"
    },
    "olyv-personal-loan": {
        enabled: true,
        url: "https://bitli.in/1UAWuCe",
        provider: "EarnKaro"
    }
};
