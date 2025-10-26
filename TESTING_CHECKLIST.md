# 📋 Mobile Responsiveness Testing Checklist

## ✅ Testing Instructions

### Quick Start
1. **Development Server**: `npm run dev`
2. **Local URL**: http://localhost:3000
3. **Mobile Testing**: Use Chrome DevTools (F12 → Ctrl+Shift+M)

---

## 📱 Device Breakpoints to Test

### Mobile (Portrait)
- **iPhone SE**: 375×667
- **iPhone 12 Pro**: 390×844
- **Pixel 5**: 393×851
- **Galaxy S21**: 360×800

### Mobile (Landscape)
- **iPhone 12 Pro**: 844×390
- **Pixel 5**: 851×393

### Tablet (Portrait)
- **iPad Mini**: 768×1024
- **iPad Air**: 820×1180

### Tablet (Landscape)
- **iPad**: 1024×768
- **iPad Pro**: 1366×1024

### Desktop
- **Small**: 1280×720
- **Medium**: 1440×900
- **Large**: 1920×1080
- **XL**: 2560×1440

---

## 🧪 Test Cases by Page

### Landing Page (`/`)

#### Mobile (< 768px)
- [ ] Logo scales down appropriately (80-100px)
- [ ] Title text readable without zoom (clamp sizing)
- [ ] Buttons stack vertically (not horizontally)
- [ ] Both buttons are full-width
- [ ] Button text size adapts to screen
- [ ] Features section: Single column grid
- [ ] No horizontal scroll
- [ ] Footer centered and readable
- [ ] Language badges visible
- [ ] All text has sufficient contrast

#### Tablet (768px - 1024px)
- [ ] Logo at medium size
- [ ] Title scales appropriately
- [ ] Buttons still stacked or horizontal (test both)
- [ ] Features: 2-column grid
- [ ] Footer layout adapts

#### Desktop (> 1024px)
- [ ] Logo at full size (120px)
- [ ] Title at maximum size
- [ ] Buttons horizontal with proper spacing
- [ ] Features: 3-column grid
- [ ] Footer multi-column layout

---

### Farmer Portal (`/farmer/*`)

#### Layout - Mobile
- [ ] **Burger menu appears** (left side of header)
- [ ] Burger icon toggles sidebar open/close
- [ ] Sidebar slides from left smoothly
- [ ] Sidebar closes when clicking navbar item
- [ ] Sidebar closes when clicking main content
- [ ] Header title readable ("CROPIQ FARMER PORTAL")
- [ ] Notification bell visible and touch-friendly
- [ ] Language badge hidden on mobile (`🇮🇳 हिंदी`)
- [ ] No sidebar visible by default
- [ ] AppShell padding reduced to 'sm'

#### Layout - Tablet/Desktop
- [ ] Sidebar always visible (no burger)
- [ ] Logo and branding visible in sidebar
- [ ] Navigation items styled correctly
- [ ] User profile section at bottom
- [ ] Language badge visible in header
- [ ] AppShell padding appropriate

#### Dashboard (`/farmer`)
- [ ] **Mobile**: Stats cards single column
- [ ] **Tablet**: Stats cards 2 columns
- [ ] **Desktop**: Stats cards 4 columns
- [ ] Weather widget: 2 cols on mobile, 5 on desktop
- [ ] Crop health cards stack on mobile
- [ ] Recent alerts full-width on mobile
- [ ] Quick actions: 2×2 grid on mobile, 1×4 on desktop
- [ ] Avatar and welcome text scale appropriately

#### My Fields (`/farmer/my-fields`)
- [ ] Field cards stack on mobile
- [ ] Sensor data readable
- [ ] Progress bars full-width
- [ ] Charts responsive

#### Claims (`/farmer/claims`)
- [ ] Timeline vertical on mobile
- [ ] Claim cards full-width
- [ ] Stats adapt to screen

#### Alerts (`/farmer/alerts`)
- [ ] Alert cards single column on mobile
- [ ] Badges scale appropriately
- [ ] All text readable

#### Weather (`/farmer/weather`)
- [ ] 7-day forecast scrollable on mobile
- [ ] Current weather prominent
- [ ] Forecast cards adapt

#### Support (`/farmer/support`)
- [ ] Contact form full-width on mobile
- [ ] Input fields large enough (44px min)
- [ ] FAQ accordion responsive
- [ ] Contact buttons full-width

---

### Assessor Portal (`/dashboard/*`)

#### Layout - Mobile
- [ ] **Burger menu appears** (left of title)
- [ ] Burger toggles sidebar correctly
- [ ] Sidebar slides smoothly
- [ ] "PMFBY Assessment" title visible
- [ ] Title shortened appropriately
- [ ] "24 Active Claims" badge hidden on mobile
- [ ] Notification bell visible
- [ ] User profile hidden on mobile
- [ ] Sidebar closes on navigation

#### Layout - Tablet/Desktop
- [ ] Sidebar always visible
- [ ] Full title visible
- [ ] Badge visible
- [ ] User profile shown
- [ ] Logo in sidebar

#### Dashboard (`/dashboard`)
- [ ] **Mobile**: Stat cards single column
- [ ] **Tablet**: Stat cards 2 columns
- [ ] **Desktop**: Stat cards 4 columns
- [ ] Map section adapts (stacks on mobile)
- [ ] Activity feed readable
- [ ] Charts responsive

#### Claims (`/claims`)
- [ ] Search bar full-width on mobile
- [ ] Filters stack vertically
- [ ] Stats grid: 1 col mobile, 2 tablet, 4 desktop
- [ ] Table horizontal scroll if needed
- [ ] Sticky first column in table
- [ ] Action buttons adapt

#### Alerts (`/alerts`)
- [ ] Alert cards single column on mobile
- [ ] Severity badges visible
- [ ] Contact info readable
- [ ] SMS button touch-friendly

#### Plot Details (`/plot/[id]`)
- [ ] Details stack on mobile
- [ ] Images full-width
- [ ] Sensor charts responsive
- [ ] Decision panel adapts
- [ ] Blockchain info readable

---

## ⚙️ Interaction Testing

### Touch Targets (Mobile)
- [ ] All buttons minimum 44×44px
- [ ] Links properly spaced (not too close)
- [ ] Form inputs large enough
- [ ] Icon buttons accessible
- [ ] No accidental taps

### Navigation
- [ ] Burger menu opens with tap
- [ ] Navbar items respond to touch
- [ ] Links work correctly
- [ ] Back navigation functional
- [ ] Route changes smooth

### Forms
- [ ] Input fields zoom properly on focus (iOS)
- [ ] Keyboard doesn't obscure inputs
- [ ] Submit buttons accessible
- [ ] Validation messages visible
- [ ] Autocomplete works

### Scrolling
- [ ] Smooth scroll on all pages
- [ ] No horizontal scroll anywhere
- [ ] Sticky headers work
- [ ] Pull-to-refresh disabled (if unwanted)
- [ ] Scroll to top works

---

## 🎨 Visual Testing

### Typography
- [ ] All text readable without zooming
- [ ] Font sizes scale with clamp()
- [ ] Line heights appropriate
- [ ] No text overflow
- [ ] Contrast ratio sufficient (4.5:1 min)

### Layout
- [ ] No overlapping elements
- [ ] Proper spacing maintained
- [ ] Margins/padding scale correctly
- [ ] Cards adapt to width
- [ ] Grids reflow properly

### Images
- [ ] Images load correctly
- [ ] No stretched/distorted images
- [ ] Aspect ratios maintained
- [ ] Lazy loading works
- [ ] Placeholders shown while loading

### Colors
- [ ] Brand colors consistent
- [ ] Green theme for farmer portal
- [ ] Blue theme for assessor portal
- [ ] Sufficient contrast everywhere
- [ ] Badges/alerts visible

---

## 🚀 Performance Testing

### Load Times
- [ ] Initial page load < 3s
- [ ] Route transitions smooth
- [ ] Images optimized
- [ ] Fonts load quickly
- [ ] No layout shift (CLS)

### Interactions
- [ ] Burger menu toggle instant
- [ ] Button clicks responsive
- [ ] Form inputs no lag
- [ ] Scroll smooth (60fps)
- [ ] Animations perform well

### Network
- [ ] Works on 3G (slow connection)
- [ ] Offline fallback (if PWA)
- [ ] Assets cached appropriately
- [ ] API calls don't block UI

---

## ♿ Accessibility Testing

### Screen Readers
- [ ] Semantic HTML used
- [ ] ARIA labels present
- [ ] Heading hierarchy correct
- [ ] Alt text on images
- [ ] Skip links work

### Keyboard Navigation
- [ ] Tab order logical
- [ ] Focus indicators visible
- [ ] Enter/Space activates buttons
- [ ] Esc closes modals
- [ ] No keyboard traps

### Color Blindness
- [ ] Not relying on color alone
- [ ] Icons accompany colors
- [ ] Sufficient contrast
- [ ] Patterns/textures used

---

## 🌐 Browser Testing

### Mobile Browsers
- [ ] Chrome Mobile (Android)
- [ ] Safari (iOS 14+)
- [ ] Samsung Internet
- [ ] Firefox Mobile

### Desktop Browsers
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

---

## 📊 Automated Testing Tools

### Chrome DevTools
```
1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Select device or responsive mode
4. Test all breakpoints
5. Check Lighthouse scores
```

### Lighthouse Audit
```bash
# Run Lighthouse in Chrome DevTools
# Target scores:
# - Performance: 90+
# - Accessibility: 95+
# - Best Practices: 95+
# - SEO: 100
```

### Responsive Design Checker
- Use: http://responsivedesignchecker.com/
- Test: All major breakpoints
- Verify: No layout issues

### Real Device Testing
```bash
# Find local IP
ipconfig  # Windows
ifconfig  # Mac/Linux

# Access from mobile device
http://YOUR_IP:3000
```

---

## 🐛 Common Issues to Check

### Layout Issues
- [ ] No content cut off
- [ ] No overlapping text
- [ ] No broken grids
- [ ] No fixed widths breaking layout
- [ ] No z-index issues

### Typography Issues
- [ ] No tiny unreadable text
- [ ] No text overflowing containers
- [ ] No line-height issues
- [ ] No font loading flashes

### Image Issues
- [ ] No 404 errors
- [ ] No slow loading
- [ ] No incorrect aspect ratios
- [ ] No missing alt text

### Interaction Issues
- [ ] No double-tap zoom (iOS)
- [ ] No scroll jank
- [ ] No unresponsive buttons
- [ ] No form issues

---

## ✅ Final Checklist

Before marking complete:
- [ ] Tested on real mobile device
- [ ] Tested on tablet
- [ ] Tested on desktop
- [ ] All pages checked
- [ ] All breakpoints verified
- [ ] Performance acceptable
- [ ] Accessibility tested
- [ ] Screenshots taken
- [ ] Issues documented
- [ ] Fixes implemented

---

## 📞 Report Issues

If you find responsive issues:
1. Document the device/browser
2. Take screenshot
3. Note the breakpoint
4. Describe the issue
5. Contact team:
   - Aryan Tamboli: +91 97022 76874
   - Anol Surekha: +91 94796 89897

---

## 🎉 Success Criteria

The platform is mobile-ready when:
- ✅ All pages work on mobile (375px width)
- ✅ No horizontal scroll anywhere
- ✅ All text readable without zoom
- ✅ All buttons/links touch-friendly
- ✅ Navigation works on all devices
- ✅ Performance scores 90+
- ✅ Accessibility scores 95+
- ✅ Real device testing passed

---

*Last Updated: January 2025*
*YieldGuard - Production Ready Mobile Platform*
