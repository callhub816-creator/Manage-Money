# Credit Cards Domain - Affiliate Integration Guide

## Overview

The Credit Cards domain is now prepared for scalable affiliate integration. This guide explains the structure, configuration, and how to activate affiliate links.

## Architecture

### 1. Affiliate Status Configuration
**File:** `src/domains/credit-cards/data/affiliateStatus.ts`

Centralized configuration file that controls:
- Which cards have active affiliate links
- Which cards show "Coming Soon" (disabled state)
- Bank-specific affiliate URLs

```typescript
export const AFFILIATE_STATUS: Record<string, AffiliateConfig> = {
  'hdfc-bank-millennia': {
    enabled: false,
    bankName: 'HDFC Bank',
    // link: 'https://affiliate.hdfc.com/millennia' // Uncomment when live
  },
  // ... more cards
};
```

### 2. Image Organization
**Folder:** `src/domains/credit-cards/assets/images/`

**Naming Convention:** `{card-slug}.png`

Examples:
- `hdfc-bank-millennia.png`
- `axis-bank-ace.png`
- `sbi-cashback-card.png`

This matches the slugs in `AFFILIATE_STATUS` for easy image lookups.

### 3. CreditCardCTA Component
**File:** `src/domains/credit-cards/components/CreditCardCTA.tsx`

Context-aware button that:
- Shows **"Apply Now"** link when affiliate is enabled
- Shows **"Coming Soon"** (disabled) when affiliate is disabled

```typescript
<CreditCardCTA cardSlug="hdfc-bank-millennia" cardName="HDFC Bank Millennia" />
```

### 4. Card Data Structure
**File:** `src/domains/credit-cards/data/creditCards.ts`

Each card now includes a `slug` field for consistent identification:

```typescript
{
  slug: 'hdfc-bank-millennia',      // Required for affiliate linking
  name: 'HDFC Bank Millennia',
  bank: 'HDFC Bank',
  // ... other fields
}
```

## How to Activate Affiliate Links

### Step 1: Get Bank Affiliate URL
Contact your bank affiliate program and obtain the application link.

Example:
```
https://affiliate.hdfc.com/millennia
```

### Step 2: Update affiliateStatus.ts
Uncomment the `link` field and add the affiliate URL:

```typescript
'hdfc-bank-millennia': {
  enabled: true,  // ← Change to true
  bankName: 'HDFC Bank',
  link: 'https://affiliate.hdfc.com/millennia', // ← Add URL here
},
```

### Step 3: Verify Build
```bash
npm run build
```

The card will now show an "Apply Now" button linking to the affiliate URL.

## Tracking Integration (Optional)

The CTA component includes a TODO hook for analytics tracking:

```typescript
onClick={(e) => {
  // TODO: Integrate tracking when GA is configured
  // trackAffiliateClick({
  //   cardSlug,
  //   cardName,
  //   bankName: config.bankName,
  //   link: affiliateLink
  // });
}}
```

When Google Analytics is configured (see `TRACKING_SETUP.md`), uncomment this code to track affiliate clicks.

## Helper Functions

Use these utilities from `affiliateStatus.ts`:

```typescript
// Get full config for a card
const config = getAffiliateConfig('hdfc-bank-millennia');

// Check if affiliate is active
const isActive = isAffiliateActive('hdfc-bank-millennia'); // Returns boolean

// Get affiliate link (or null if disabled)
const link = getAffiliateLink('hdfc-bank-millennia');
```

## UI/UX Behavior

### Enabled State
- Button: `bg-blue-600` with hover effect
- Text: "Apply Now"
- Action: Opens affiliate link in new tab
- Opens: `target="_blank" rel="noopener noreferrer"` (secure)

### Disabled State
- Button: `bg-slate-300` (grayed out)
- Text: "Coming Soon"
- Action: None (disabled cursor)
- Tooltip: Shows why button is disabled

## Production Checklist

- [ ] Affiliate agreements signed with all banks
- [ ] Affiliate URLs obtained for all cards
- [ ] Test affiliate links in staging environment
- [ ] Update `affiliateStatus.ts` with all links
- [ ] Verify tracking integration (if using GA)
- [ ] Test "Apply Now" clicks in production analytics
- [ ] Monitor conversion rates per affiliate link
- [ ] Compliance review with legal team

## File Structure
```
src/domains/credit-cards/
├── assets/
│   └── images/
│       ├── hdfc-bank-millennia.png
│       ├── axis-bank-ace.png
│       └── .gitkeep
├── components/
│   ├── CreditCardCTA.tsx (NEW)
│   ├── CreditCardItem.tsx (UPDATED)
│   ├── CreditCardFilters.tsx
│   └── index.ts
├── pages/
│   └── CreditCardsHome.tsx
├── data/
│   ├── affiliateStatus.ts (NEW)
│   └── creditCards.ts (UPDATED)
└── index.ts
```

## Security Notes

- Affiliate links open in new tab with `target="_blank"`
- Cross-origin referrer protection: `rel="noopener noreferrer"`
- No sensitive data in URL parameters
- All links stored in configuration (not hardcoded in components)

## Scaling Considerations

This structure supports:
- **Adding new cards:** Add entry to `CREDIT_CARDS` and `AFFILIATE_STATUS`
- **Adding new banks:** Same slug-based system applies
- **Adding new images:** Match slug naming convention
- **Adding new tracking:** Uncomment tracking hooks in CTA
- **A/B testing:** Can modify button text/colors via CTA component
- **Deep linking:** Affiliate links can include UTM parameters if needed

## No Breaking Changes

✅ Existing UI preserved (100%)
✅ All card information displayed
✅ Responsive design maintained
✅ Other domains unaffected
✅ Backward compatible

---

Last Updated: December 28, 2025
