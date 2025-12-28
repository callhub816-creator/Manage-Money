# Credit Cards Domain - Affiliate Activation Checklist

## Quick Start

### Phase 1: Configuration (5 minutes)
- [ ] Obtain affiliate URL from first bank
- [ ] Open `src/domains/credit-cards/data/affiliateStatus.ts`
- [ ] Find matching card slug
- [ ] Uncomment `link` field and set `enabled: true`
- [ ] Save file

**Example:**
```typescript
'hdfc-bank-millennia': {
  enabled: true,  // ← Change this
  bankName: 'HDFC Bank',
  link: 'https://affiliate.hdfc.com/millennia', // ← Add URL
},
```

### Phase 2: Testing (2 minutes)
- [ ] Run `npm run build` (or automatic with dev server)
- [ ] Open card page in browser
- [ ] Verify "Apply Now" button appears
- [ ] Click button → confirms new tab opens
- [ ] Check affiliate link in browser address bar

### Phase 3: Monitoring (Ongoing)
- [ ] Monitor click-through rate in Google Analytics
- [ ] Check conversion rate to application completion
- [ ] Verify no broken links
- [ ] Test on mobile devices

## Card-by-Card Activation

| Card | Slug | Status | Affiliate URL |
|------|------|--------|---------------|
| HDFC Bank Millennia | `hdfc-bank-millennia` | ❌ Pending | — |
| HDFC Bank Regalia | `hdfc-bank-regalia` | ❌ Pending | — |
| Axis Bank Ace | `axis-bank-ace` | ❌ Pending | — |
| SBI Cashback Card | `sbi-cashback-card` | ❌ Pending | — |
| Kotak 811 Card | `kotak-811-credit-card` | ❌ Pending | — |
| ICICI Airtel Black | `icici-airtel-black` | ❌ Pending | — |

_Update this table as you activate each card._

## File Locations Quick Reference

```
Configuration:
  src/domains/credit-cards/data/affiliateStatus.ts ← EDIT THIS FILE

Components:
  src/domains/credit-cards/components/CreditCardCTA.tsx (read-only)
  src/domains/credit-cards/components/CreditCardItem.tsx (read-only)

Data:
  src/domains/credit-cards/data/creditCards.ts (read-only)

Documentation:
  src/domains/credit-cards/AFFILIATE_INTEGRATION.md
  src/domains/credit-cards/TECHNICAL_REFERENCE.md
```

## Common Tasks

### Task: Enable HDFC Bank Millennia affiliate link

1. Open file: `src/domains/credit-cards/data/affiliateStatus.ts`
2. Find section: `'hdfc-bank-millennia': {`
3. Change: `enabled: false,` → `enabled: true,`
4. Add: `link: 'https://your-affiliate-link-here',`
5. Save and refresh browser

### Task: Disable a card temporarily

Change `enabled: true,` to `enabled: false,` in affiliateStatus.ts
Button will revert to "Coming Soon" automatically.

### Task: Change affiliate link URL

Find card slug in affiliateStatus.ts
Update the `link` field with new URL
Changes apply immediately (dev server) or after build (production)

### Task: Add tracking for affiliate clicks

1. Uncomment onClick handler in CreditCardCTA.tsx
2. Implement tracking function (see `src/utils/tracking.ts`)
3. Update uncommented code to call tracking function

## Troubleshooting

### "Apply Now" button shows but link doesn't work
- ✅ Check affiliate URL is complete (https://...)
- ✅ Verify no typos in URL
- ✅ Test URL in separate browser tab
- ✅ Check if bank requires additional setup

### Button shows "Coming Soon" instead of "Apply Now"
- ✅ Verify `enabled: true` in affiliateStatus.ts
- ✅ Verify `link:` field has URL value
- ✅ Rebuild/refresh browser (Ctrl+Shift+R for hard refresh)

### Build fails
- ✅ Check JSON syntax in affiliateStatus.ts (commas, brackets)
- ✅ Run `npm run build` to see exact error
- ✅ Verify no duplicate card slugs

### Card not showing in list
- ✅ Verify card exists in `CREDIT_CARDS` array in creditCards.ts
- ✅ Verify card slug matches exactly (case-sensitive)
- ✅ Check if card is filtered out by category

## Analytics Integration

After GA is configured, uncomment tracking code in CreditCardCTA.tsx:

```typescript
onClick={(e) => {
  trackAffiliateClick({
    cardSlug,
    cardName,
    bankName: config.bankName,
    link: affiliateLink
  });
}}
```

This tracks:
- Which card was clicked
- When it was clicked
- Which user clicked it
- Which bank affiliate it linked to

View in Google Analytics:
- Events > affiliate_click
- Filter by card_name or bank_name
- Compare CTR per card

## Compliance & Legal

Before going live, ensure:
- [ ] Affiliate disclosure visible on page (already included in Legal pages)
- [ ] Privacy policy mentions affiliate links
- [ ] Terms & Conditions reviewed by legal team
- [ ] FTC compliance (clear disclosure that links are affiliate links)
- [ ] Bank affiliate terms accepted

## Rollback Plan

If affiliate link causes issues:

1. Set `enabled: false` for problematic card
2. Button reverts to "Coming Soon"
3. No broken links or user confusion
4. Investigate issue separately

## Support Resources

- See `AFFILIATE_INTEGRATION.md` for detailed guide
- See `TECHNICAL_REFERENCE.md` for technical details
- Check `/TRACKING_SETUP.md` for analytics integration
- Review bank's affiliate portal for dashboard access

---

**Status:** Ready for activation
**Last Updated:** December 28, 2025
**Module Count:** 67 (production build)
