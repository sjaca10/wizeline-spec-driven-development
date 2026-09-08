## 1. Project Scaffolding

- [ ] 1.1 Create `index.html` with basic document structure, a page title, and `<link>`/`<script>` references to `style.css` and `app.js`; verify the page loads in a browser with no console errors
- [ ] 1.2 Create empty `style.css` and `app.js` files linked from `index.html`; verify browser dev tools show both files loading successfully (200 status, no 404s)

## 2. HTML Structure & Form

- [ ] 2.1 Build the calculator form markup: labeled number inputs for principal, annual interest rate (%), and years, a submit control, a container for inline field errors, and a container for results; verify all elements are present via browser dev tools
- [ ] 2.2 Add semantic `<label>` elements with matching `for`/`id` attributes for each input; verify every input has an associated label in the accessibility tree

## 3. Styling

- [ ] 3.1 Style the page using only the external stylesheet (no inline `style` attributes) with the dark theme colors (`#1a1a2e` background, `#e94560` accent) and legible typography; verify with a search that no `style=` attribute exists in `index.html`
- [ ] 3.2 Implement a mobile-responsive layout (flexible units and/or media queries) so the form and results remain usable without horizontal scrolling at 320px width; verify by resizing the browser viewport to 320px

## 4. Input Validation Logic

- [ ] 4.1 Implement validation functions (using `const`/`let`, no `var`) for principal, rate, and years covering: empty, non-numeric, zero/negative principal, negative rate, and zero/negative years; verify by manually exercising each case in the browser console
- [ ] 4.2 Wire validation into the form's submit handler so invalid input blocks calculation and renders an inline error message next to the offending field, without using `alert()`; verify each "Input validation before calculation" scenario from `specs/compound-interest-calculator/spec.md` behaves as specified

## 5. Calculation Logic

- [ ] 5.1 Implement the fixed annual compound interest calculation `A = P * (1 + r)^t` (converting the entered rate percentage to a decimal) and derive total interest as `A - P`; verify against a known worked example (e.g., P=1000, rate=5%, t=10 years)
- [ ] 5.2 Manually check edge-case inputs (e.g., 1 year, a large number of years, a fractional rate) to confirm the formula produces numerically correct results

## 6. Results Display

- [ ] 6.1 Format the final amount and total interest to exactly 2 decimal places and render them into the results container via DOM updates (no `alert()`); verify displayed values match a hand-calculated example
- [ ] 6.2 Clear previously displayed results and/or errors at the start of each new submission so stale output is never shown; verify by submitting invalid input followed by valid input and confirming the display updates correctly each time

## 7. Manual Verification

- [ ] 7.1 Walk through every scenario in `specs/compound-interest-calculator/spec.md` in a browser and confirm actual behavior matches each Given/When/Then; fix any mismatch found
- [ ] 7.2 Search the codebase to confirm no forbidden patterns remain: no `var`, no inline `style=` attributes, and no `alert()` calls anywhere in `index.html`, `style.css`, or `app.js`
