## Why

The repository currently has no application code — only the OpenSpec scaffold. The project's stated purpose is a compound interest investment calculator, and no capability exists yet to define what that tool must do. This change establishes the first version: a single-page calculator that projects the future value of a lump-sum investment.

## What Changes

- New browser-based calculator UI (`index.html`, `style.css`, `app.js`) accepting principal, annual interest rate, and number of years.
- Compound interest calculation using fixed annual compounding: `A = P(1 + r)^t`.
- Input validation that rejects invalid values (non-numeric, negative, zero years, etc.) before any calculation runs, with inline error feedback (no `alert()`).
- Results display limited to final amount and total interest earned, each formatted to 2 decimal places.
- Mobile-responsive layout (usable from 320px width) using the project's dark theme (`#1a1a2e` background, `#e94560` accent).

## Capabilities

### New Capabilities
- `compound-interest-calculator`: Accepting principal/rate/years input, validating it, computing compound interest with fixed annual compounding, and displaying the final amount and total interest earned.

### Modified Capabilities
- None — no existing specs in this repository.

## Impact

- **New files**: `index.html`, `style.css`, `app.js` at the project root.
- **No dependencies added**: plain HTML5/CSS3/ES2022, no frameworks, no build tools, no external libraries.
- **No breaking changes**: this is the first version of the application.
