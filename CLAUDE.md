# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Local Development
```bash
# Start local development server
python3 -m http.server 8000
# Alternative: npx serve .

# Build (for CI/CD)
npm run build  # Currently just echoes "Static site build complete"

# Deploy to Cloudflare Pages (via dashboard, not CLI)
# Build command in Cloudflare: echo "Static site build complete"
# Build output directory: .
```

## Architecture Overview

This is a **single-page Progressive Web App (PWA)** for Monopoly game bookkeeping, built as a **static HTML file with embedded CSS and JavaScript**.

### Core Architecture
- **Single File Application**: All functionality in `index.html` (HTML, CSS, JS embedded)
- **Static Site**: No build process, no external dependencies, no bundling
- **PWA Features**: Service worker (`sw.js`) + manifest (`manifest.json`) for offline capability
- **Client-Side Only**: All data stored in localStorage, no server communication

### Key Components (within index.html)

#### 1. Game State Management (`MonopolyGame` class)
- **Players Array**: `{id, name, token, balance, isActive}`
- **Transactions Array**: `{id, type, from, to, amount, description, timestamp}`
- **localStorage Persistence**: `monopolyGameState` key
- **Screen Navigation**: 3-screen system (Setup, Transaction, History)

#### 2. Transaction System
- **Types**: `one-to-one`, `one-to-many`, `many-to-one`, `adjust`
- **Processing**: Automatic balance calculations with equal splitting
- **Bank Integration**: `adjust` type uses 'bank' as from/to for money creation/destruction
- **History**: Complete audit trail with timestamps

#### 3. Mobile-First UI
- **Touch Targets**: 44px minimum for all interactive elements
- **Swipe Navigation**: Gesture-based screen switching
- **Responsive Layout**: Single column on mobile, expands on larger screens
- **PWA Installation**: "Add to Home Screen" capability

### Data Schema (localStorage)
```javascript
{
  gameState: {
    players: [...],
    transactions: [...],
    lastModified: ISO timestamp
  }
}
```

### Service Worker (`sw.js`)
- **Caching Strategy**: Cache-first with network fallback
- **Offline Support**: Serves cached resources when offline
- **Cache Versioning**: `monopoly-bookkeeping-v1` for cache invalidation

## Important Implementation Details

### Transaction Processing Logic
- **One-to-Many**: Amount divided equally among recipients
- **Many-to-One**: Amount divided equally among payers
- **Adjust**: Direct balance modification (bank → player or player → bank)
- **Validation**: Prevents self-transfers, ensures valid amounts

### Token Management
- **6 Standard Tokens**: Top hat, racecar, dog, ship, iron, thimble
- **SVG Icons**: Embedded in HTML, no external image dependencies
- **Uniqueness Enforcement**: Tokens disabled when selected by players
- **Re-enabling**: Tokens become available when players are deleted

### Mobile Considerations
- **Viewport Meta**: `user-scalable=no` for app-like experience
- **Touch Events**: Native touch handling, no mouse dependencies
- **Offline Indicator**: Visual feedback when network unavailable
- **PWA Manifest**: Configured for standalone app mode

### State Management Patterns
- **Immediate Persistence**: All changes saved to localStorage instantly
- **UI Synchronization**: State changes trigger immediate UI updates
- **Screen State**: Current screen tracked for navigation
- **Form Reset**: Transaction forms cleared after submission

## Development Notes

### Adding New Features
- **New Transaction Types**: Add to `transactionTypeSelector` and `updateTransactionForm()`
- **Additional Tokens**: Add to `initializeTokens()` method
- **New Screens**: Add to HTML with `screen` class, update navigation logic
- **Data Schema Changes**: Update both save/load and import/export functions

### Testing Strategy
- **Mobile Testing**: Essential - test on actual devices, not just desktop browsers
- **Offline Testing**: Disable network to verify service worker functionality
- **PWA Testing**: Verify installation prompt and offline capabilities
- **Cross-Browser**: Test Safari (iOS) and Chrome (Android) specifically

### Deployment Considerations
- **Static Hosting**: Works on any static hosting service
- **Cloudflare Pages**: Requires build command `echo "Static site build complete"`
- **HTTPS Required**: PWA features need secure context
- **File Structure**: All files must remain in same directory (relative paths)