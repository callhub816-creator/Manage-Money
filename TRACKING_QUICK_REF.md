# Tracking System - Quick Reference Card

## 📊 At a Glance

| Item | Details |
|------|---------|
| **Status** | ✅ Ready to configure |
| **GA Script Added?** | ⏳ No - awaiting confirmation |
| **Tracking Enabled?** | ⏳ No - `ENABLE_TRACKING = true` |
| **Code Ready?** | ✅ Yes - 600+ lines |
| **Documentation?** | ✅ Yes - 3 guides + 10 examples |
| **Build Status** | ✅ 57 modules, no errors |

---

## 🔧 Files You Need to Know

```
src/utils/tracking.ts          ← Main tracking module (600+ lines)
src/hooks/useTracking.ts       ← React hooks (8 hooks)
TRACKING_SETUP.md              ← How to set up
TRACKING_EXAMPLES.md           ← Copy-paste examples (10)
TRACKING_SUMMARY.md            ← This summary
```

---

## 🚀 Quick Start (3 Steps)

### Step 1: Get Your Google Analytics ID
- Go to analytics.google.com
- Create new property
- Copy ID (format: `G-ABC123XYZ`)

### Step 2: Update Config
In `src/utils/tracking.ts`:
```typescript
const GA_TRACKING_ID = 'G-YOUR_ID_HERE';
const ENABLE_TRACKING = true;
```

### Step 3: Add GA Script to index.html
Before `</head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_ID_HERE"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-YOUR_ID_HERE');
</script>
```

---

## 📝 Using Tracking in Components

### Track Page View
```typescript
import { usePageTracking } from '../src/hooks/useTracking';

export const MyPage: React.FC = () => {
  usePageTracking('/path', 'Page Title', 'page_name');
  return <div>Content</div>;
};
```

### Track Button Click
```typescript
import { useCTATracking } from '../src/hooks/useTracking';

const handleClick = () => {
  trackCTA({ ctaText: 'Apply', ctaType: 'apply_now', section: 'hero', page: 'cards' });
};
```

### Track Filter Change
```typescript
import { useFilterTracking } from '../src/hooks/useTracking';

const handleFilter = () => {
  trackFilter('card_type', 'cashback', 'credit_cards');
};
```

### Track Affiliate Click
```typescript
import { useAffiliateTracking } from '../src/hooks/useTracking';

const handleAffiliate = () => {
  trackAffiliate({
    productType: 'credit_card',
    productName: 'Card Name',
    affiliateNetwork: 'flipkart',
  });
  window.open(url, '_blank');
};
```

See `TRACKING_EXAMPLES.md` for 6 more examples.

---

## 📊 What Gets Tracked

### Automatically (no code needed)
- Page views
- Time on page

### With Hooks (add to components)
- Button clicks (CTA)
- Filter changes
- Calculator usage
- Form submissions
- Affiliate clicks
- Conversions
- Errors
- Custom events

---

## 🔑 All Configuration IDs

| ID | Where | Purpose |
|----|----|---------|
| `GA_TRACKING_ID` | `src/utils/tracking.ts:3` | Google Analytics |
| `AFFILIATE_API_KEY` | `src/utils/tracking.ts:4` | Affiliate tracking |
| `ENABLE_TRACKING` | `src/utils/tracking.ts:5` | Turn on/off |

---

## 🎯 8 React Hooks Available

```typescript
usePageTracking(path, title, pageName)         // Page views + time
useCTATracking()                               // Button clicks
useFilterTracking()                            // Filter changes
useCalculatorTracking()                        // Calculator usage
useFormTracking()                              // Form submissions
useErrorTracking()                             // Errors
useConversionTracking()                        // Conversions
useAffiliateTracking()                         // Affiliate clicks
useEventTracking()                             // Custom events
```

---

## 🔍 Events Tracked (Examples)

```javascript
// When enabled and hooks added:
cta_click { page: 'credit_cards', cta_type: 'apply_now' }
filter_change { filter_type: 'annual_fee', filter_value: 'free' }
calculator_use { calculator_type: 'emi' }
form_submit { form_name: 'eligibility_check' }
affiliate_click { product_name: 'HDFC Millennia' }
conversion { conversion_type: 'lead_generation', value: 5000 }
error { error_type: 'api_error', error_message: '...' }
page_view { page_path: '/credit-cards', page_title: 'Best Credit Cards' }
```

---

## ✨ Console Output (Dev Mode)

When tracking works, you'll see:
```
📊 Event tracked: cta_click { ... }
📄 Page view: Best Credit Cards (/credit-cards)
🎯 CTA Clicked: Apply Now (apply_now)
✓ Affiliate click tracked: HDFC Bank Millennia
📝 Form submitted: eligibility_check
```

---

## ⚙️ Enable/Disable

```typescript
// In src/utils/tracking.ts

// Development (disabled)
const ENABLE_TRACKING = false;

// Production (enabled)
const ENABLE_TRACKING = true;

// Or environment-based
const ENABLE_TRACKING = process.env.NODE_ENV === 'production';
```

---

## 🚨 Common Issues

| Problem | Solution |
|---------|----------|
| "GA not initialized" | Add GA script to index.html |
| No events showing | Check `ENABLE_TRACKING = true` |
| No data in GA dashboard | Wait 24-48 hours for first data |
| Tracking works locally but not in prod | Verify GA ID matches in both configs |

---

## 📚 Documentation Files

1. **TRACKING_SETUP.md** - Complete step-by-step setup
2. **TRACKING_EXAMPLES.md** - 10 copy-paste code examples
3. **TRACKING_SUMMARY.md** - Detailed breakdown
4. **This card** - Quick reference

---

## ✅ Verification Checklist

- [ ] Got Google Analytics ID
- [ ] Updated `GA_TRACKING_ID` in `src/utils/tracking.ts`
- [ ] Set `ENABLE_TRACKING = true`
- [ ] Added GA script to `index.html`
- [ ] Added hooks to at least 1 component
- [ ] Built project (`npm run build`)
- [ ] Tested in browser (F12 console)
- [ ] Saw tracking logs in console
- [ ] Waited 24-48 hours
- [ ] Checked Google Analytics dashboard

---

## 💻 Code Structure

```
src/
├── utils/
│   └── tracking.ts           ← 600+ lines
│       ├── initializeAnalytics()
│       ├── trackEvent()
│       ├── trackPageView()
│       ├── trackCTAClick()
│       ├── trackAffiliateClick()
│       ├── trackFormSubmit()
│       ├── trackFilterChange()
│       ├── trackCalculatorUse()
│       ├── trackConversion()
│       ├── trackError()
│       └── ...more
│
└── hooks/
    └── useTracking.ts        ← 150+ lines
        ├── usePageTracking()
        ├── useCTATracking()
        ├── useFilterTracking()
        ├── useCalculatorTracking()
        ├── useFormTracking()
        ├── useErrorTracking()
        ├── useConversionTracking()
        ├── useAffiliateTracking()
        └── useEventTracking()
```

---

## 🎉 Ready!

Your tracking system is:
- ✅ Coded
- ✅ Documented
- ✅ Tested
- ⏳ Waiting for your Google Analytics ID

**Next:** Get your GA ID and follow TRACKING_SETUP.md
