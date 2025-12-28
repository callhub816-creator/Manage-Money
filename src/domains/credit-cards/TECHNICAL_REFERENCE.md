# Credit Cards Domain - Technical Reference

## Component Architecture

### CreditCardItem Component
**Location:** `src/domains/credit-cards/components/CreditCardItem.tsx`

Displays individual credit card with all details:
- Bank name and logo area
- Rating and reviews
- Key benefits list
- Eligibility requirements
- Annual fee
- CTA (Call-To-Action) button

**Props:**
```typescript
interface CreditCardItemProps {
  slug: string;              // Card identifier (lowercase, hyphens)
  name: string;              // Display name
  bank: string;              // Bank name
  image: string;             // Image URL (currently placeholder)
  annualFee: string;         // Annual fee text
  keyBenefits: string[];     // Array of benefit strings
  eligibility: {
    minAge: number;          // Minimum age requirement
    minIncome: string;       // Minimum monthly income
    minCIBIL: number;       // Minimum CIBIL score
  };
  category: string;          // Filter category
  rating: number;            // Card rating (4.0-5.0)
  reviews: number;           // Number of reviews
}
```

### CreditCardCTA Component
**Location:** `src/domains/credit-cards/components/CreditCardCTA.tsx`

Intelligent CTA button with two states:

**Props:**
```typescript
interface CreditCardCTAProps {
  cardSlug: string;    // Matches AFFILIATE_STATUS key
  cardName: string;    // For tracking and accessibility
}
```

**Behavior:**
```
If affiliateLink exists:
  ├─ Render: <a href={link}> Apply Now </a>
  ├─ Color: blue (bg-blue-600)
  ├─ Hover: darker blue (bg-blue-700)
  └─ Target: _blank (opens in new tab)

Else:
  ├─ Render: <button disabled> Coming Soon </button>
  ├─ Color: gray (bg-slate-300)
  ├─ State: disabled
  └─ Cursor: not-allowed
```

## Data Layer

### CreditCard Interface
**Location:** `src/domains/credit-cards/data/creditCards.ts`

```typescript
export interface CreditCard {
  slug: string;              // Primary identifier
  name: string;
  bank: string;
  image: string;             // URL (can point to local assets)
  annualFee: string;
  category: string;          // 'Lifetime Free', 'Cashback', 'Travel'
  rating: number;
  reviews: number;
  keyBenefits: string[];
  eligibility: {
    minAge: number;
    minIncome: string;
    minCIBIL: number;
  };
}
```

### AffiliateConfig Interface
**Location:** `src/domains/credit-cards/data/affiliateStatus.ts`

```typescript
export interface AffiliateConfig {
  enabled: boolean;          // Master switch
  link?: string;             // Affiliate URL (required if enabled: true)
  bankName: string;          // For tracking and display
}
```

### Helper Functions

**getAffiliateConfig(cardSlug: string): AffiliateConfig**
- Returns affiliate config for card
- Returns default disabled config if not found

**isAffiliateActive(cardSlug: string): boolean**
- True: enabled AND link exists
- False: otherwise

**getAffiliateLink(cardSlug: string): string | null**
- Returns link if active, else null
- Safe for use in conditional rendering

## Data Flow

```
CreditCardsHome.tsx
  ├─ Imports: CREDIT_CARDS data
  ├─ Imports: CREDIT_CARD_FILTERS
  └─ Maps over CREDIT_CARDS array
      └─ Renders: CreditCardItem
          ├─ Receives: card object
          └─ Renders: CreditCardCTA
              ├─ Gets: affiliateConfig via slug
              └─ Displays: Link or "Coming Soon"
```

## Slug Naming Convention

Format: `{bank}-{product}-{variant}`

Examples:
- `hdfc-bank-millennia` → HDFC Bank Millennia
- `axis-bank-ace` → Axis Bank Ace
- `sbi-cashback-card` → SBI Cashback Credit Card
- `kotak-811-credit-card` → Kotak 811 Credit Card
- `icici-airtel-black` → ICICI Airtel Black

Rules:
- Lowercase only
- Hyphens for word separation
- Alphanumeric characters
- Matches image filenames in `assets/images/`
- Matches keys in `AFFILIATE_STATUS`

## Image Asset Handling

### Current State
- Using placeholder images from Placeholder.com
- Format: `https://via.placeholder.com/300x180?text=...`

### Future State
When real images available, update card data:

```typescript
// Before
image: 'https://via.placeholder.com/300x180?text=HDFC+Millennia',

// After
image: '/assets/domains/credit-cards/images/hdfc-bank-millennia.png',
```

Or use dynamic import:
```typescript
import millenniaImg from '../assets/images/hdfc-bank-millennia.png';

// In card object
image: millenniaImg,
```

## Type Safety

All components are fully typed with TypeScript:
- ✅ Props interfaces defined
- ✅ Data models typed
- ✅ Affiliate config typed
- ✅ Helper functions typed with return types

## Styling Approach

Uses Tailwind CSS utility classes:
- Grid layouts: `md:grid-cols-2 lg:grid-cols-3`
- Spacing: `p-6`, `gap-6`, `mb-4`
- Colors: `bg-blue-600`, `text-slate-900`, `border-slate-200`
- States: `hover:bg-blue-700`, `disabled:bg-slate-300`

Responsive breakpoints:
- Mobile: Default
- Tablet: `md:` prefix
- Desktop: `lg:` prefix

## Extensibility Points

1. **New Card Fields:** Add to `CreditCard` interface and CREDIT_CARDS
2. **Custom Tracking:** Uncomment tracking hook in CTA
3. **Image Assets:** Create files in `assets/images/` with slug names
4. **Affiliate Programs:** Add entries to `AFFILIATE_STATUS`
5. **Additional Filters:** Add to `CREDIT_CARD_FILTERS`
6. **Card Categories:** Add new category strings to filter options

## Performance Considerations

- ✅ Lazy loading: CreditCardItem components can be virtualized if 100+ cards
- ✅ Memoization: Consider `React.memo()` if parent re-renders frequently
- ✅ Data fetching: Current structure supports async data loading
- ✅ Bundle size: Domain-isolated code tree-shakes unused features

## Browser Compatibility

- ✅ Modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ Mobile browsers (iOS Safari, Chrome Android)
- ✅ Accessibility: Semantic HTML, ARIA labels on disabled buttons
- ✅ SEO: Meta tags, structured data via SEO component

---

Last Updated: December 28, 2025
