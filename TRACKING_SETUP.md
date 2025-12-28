# Tracking System Setup Guide

## Overview

The tracking system is **prepared and commented** but NOT active by default. You control when to enable it.

### Current Status: 🔧 Ready for Setup

- ✅ Tracking utilities created
- ✅ React hooks created
- ✅ Examples provided
- ⏳ Awaiting your configuration

---

## 📋 WHAT'S PREPARED

### Files Created

1. **`src/utils/tracking.ts`** - Main tracking module
   - Google Analytics event tracking
   - Affiliate click tracking
   - CTA click tracking
   - Form, calculator, error tracking
   - All third-party IDs marked with `TODO`

2. **`src/hooks/useTracking.ts`** - React hooks for components
   - `usePageTracking()` - Track page views
   - `useCTATracking()` - Track button clicks
   - `useFilterTracking()` - Track filter changes
   - `useCalculatorTracking()` - Track calculator usage
   - `useFormTracking()` - Track form submissions
   - `useAffiliateTracking()` - Track affiliate clicks
   - And more...

3. **`TRACKING_EXAMPLES.md`** - 10 copy-paste examples

---

## 🔑 REQUIRED CONFIGURATION

### Step 1: Get Your Google Analytics ID

1. Go to [Google Analytics](https://analytics.google.com)
2. Create a new property for your site
3. Get your **Measurement ID** (format: `G-XXXXXXXXXX`)
4. Open `src/utils/tracking.ts`
5. Replace `'G-XXXXXXXXXX'` with your actual ID:

```typescript
const GA_TRACKING_ID = 'G-YOUR_ACTUAL_ID_HERE'; // e.g., 'G-ABC123DEF45'
```

### Step 2: Add Google Analytics Script to index.html

Once confirmed, add this to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_ID_HERE"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-YOUR_ID_HERE');
</script>
```

### Step 3: Enable Tracking

In `src/utils/tracking.ts`, change:

```typescript
const ENABLE_TRACKING = false; // Change to true
```

### Step 4: (Optional) Configure Affiliate Tracking

If using affiliate links:

1. Get your affiliate API key
2. In `src/utils/tracking.ts`, replace:

```typescript
const AFFILIATE_API_KEY = 'YOUR_ACTUAL_API_KEY_HERE';
```

3. Update your backend API endpoint (in the `trackAffiliateClick` function):

```typescript
const response = await fetch('/api/track-affiliate', { // Use your endpoint
  // ...
});
```

---

## 📊 WHAT GETS TRACKED (When Enabled)

### Automatically Tracked

- ✅ Page views (path, title)
- ✅ Time spent on page
- ✅ User interactions (clicks, scrolls)

### Manually Tracked (via hooks/functions)

- ✅ Button clicks (CTA)
- ✅ Filter changes
- ✅ Calculator usage
- ✅ Form submissions
- ✅ Affiliate links
- ✅ Errors
- ✅ Conversions

### NOT Tracked (Privacy)

- ❌ Passwords or sensitive data
- ❌ Personal information
- ❌ Full form values (only field count)
- ❌ User behavior without consent

---

## 🔧 ENABLE/DISABLE TRACKING

**Development Mode:**
```typescript
// In src/utils/tracking.ts
const ENABLE_TRACKING = false; // Disable during development
```

**Production Mode:**
```typescript
// In src/utils/tracking.ts
const ENABLE_TRACKING = true; // Enable in production
```

Or make it environment-based:

```typescript
const ENABLE_TRACKING = process.env.NODE_ENV === 'production';
```

---

## 💻 USING TRACKING IN COMPONENTS

### Simple Example: Track Page View

```typescript
import { usePageTracking } from '../src/hooks/useTracking';

export const CreditCardsPage: React.FC = () => {
  // Track page automatically
  usePageTracking(
    '/credit-cards/best-credit-cards',
    'Best Credit Cards',
    'credit_cards_page'
  );

  return <div>Your content here</div>;
};
```

### Simple Example: Track Button Click

```typescript
import { useCTATracking } from '../src/hooks/useTracking';

export const ApplyButton: React.FC = () => {
  const trackCTA = useCTATracking();

  const handleClick = () => {
    trackCTA({
      ctaText: 'Apply Now',
      ctaType: 'apply_now',
      section: 'hero',
      page: 'credit_cards',
    });
    // Then redirect or submit
  };

  return <button onClick={handleClick}>Apply Now</button>;
};
```

See `TRACKING_EXAMPLES.md` for 10 more examples.

---

## 📈 VIEWING ANALYTICS

Once enabled, you can view data in:

1. **Google Analytics Dashboard**
   - Real-time events
   - User engagement
   - Page views
   - Custom events

2. **Console Logs** (development)
   ```
   📊 Event tracked: cta_click { page: 'credit_cards', ... }
   📄 Page view: Best Credit Cards (/credit-cards/best-credit-cards)
   🎯 CTA Clicked: Apply Now (apply_now)
   ```

---

## 🚨 TROUBLESHOOTING

### "Google Analytics not initialized"

**Issue:** Console warning about GA script

**Fix:**
1. Verify GA script is in `index.html`
2. Check your GA ID is correct
3. Wait 24-48 hours for data to appear in GA dashboard

### Tracking not working

**Issue:** No events showing up

**Fix:**
1. Check `ENABLE_TRACKING` is `true`
2. Open browser DevTools console (F12)
3. Look for `📊 Event tracked:` messages
4. Verify GA script loaded (check Network tab)

### Data not appearing in GA dashboard

**Issue:** Tracking works but GA dashboard is empty

**Fix:**
1. GA takes 24-48 hours to show data
2. Go to Real-time view to see instant events
3. Check your GA filter settings
4. Verify GA ID is correct

---

## 🔐 PRIVACY & COMPLIANCE

### Already Implemented

- ✅ No personal data collected
- ✅ Timestamps for GDPR tracking
- ✅ No cookies (GA4 handles consent)
- ✅ Error handling (fails silently if disabled)

### Still Needed

- 📋 Add privacy policy statement
- 🍪 Add cookie consent banner
- 📝 Include tracking disclosure in Terms & Conditions

---

## 📝 CONVERSION TRACKING SETUP

For affiliate/lead tracking:

```typescript
import { useConversionTracking } from '../src/hooks/useTracking';

export const LeadForm: React.FC = () => {
  const trackConversion = useConversionTracking();

  const handleSubmit = async () => {
    // Submit form
    await submitForm();

    // Track conversion
    trackConversion('lead_generation', 5000, 'INR');
    // Tracks: type, value, currency
  };

  return <button onClick={handleSubmit}>Generate Lead</button>;
};
```

---

## ✨ NEXT STEPS

1. **Get Google Analytics ID**
   - Create GA4 property
   - Copy measurement ID

2. **Add your IDs**
   - Replace in `src/utils/tracking.ts`
   - Add GA script to `index.html`

3. **Enable tracking**
   - Set `ENABLE_TRACKING = true`

4. **Update components**
   - Use examples from `TRACKING_EXAMPLES.md`
   - Add hooks to pages/components

5. **Test**
   - Check console logs
   - Verify GA dashboard (24-48 hours)

6. **Monitor**
   - Watch analytics dashboard
   - Adjust tracking as needed

---

## 📞 SUPPORT

All tracking functions have:
- ✅ Console logs (dev mode)
- ✅ Error handling
- ✅ Descriptive comments
- ✅ TypeScript types

No tracking data is sent until you:
1. Get your GA ID
2. Update configuration
3. Enable tracking
4. Add GA script to HTML

---

**Status:** 🎯 Ready to enable anytime. Just add your IDs and flip the switch!
