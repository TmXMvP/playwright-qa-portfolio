# Playwright QA Portfolio – SauceDemo Automation Suite

End-to-end test automation for [SauceDemo](https://www.saucedemo.com/), built with **Playwright** and **TypeScript** using the **Page Object Model (POM)** design pattern.

## Testing approach

SauceDemo is a deliberately imperfect e-commerce demo site, commonly used to practice QA fundamentals. This suite focuses on the core user journey that matters most to the business: **can a user log in, find a product, and complete a purchase?**

Test design covers:
- **Happy path** — the primary revenue-generating flow (login → add to cart → checkout → order confirmation)
- **Negative path** — invalid login, to confirm the application fails safely and gives clear user feedback rather than a silent or broken error state
- **Reusability** — locators and actions are abstracted into a Page Object so new test cases (e.g. additional products, multiple items in cart, form validation) can be added without duplicating selector logic

## What this demonstrates

- Page Object Model architecture for maintainable, reusable test code
- Cross-browser testing (Chromium, Firefox, and others — see `playwright.config.ts`)
- Both positive and negative test scenarios
- HTML and JSON test reporting
- CI-friendly configuration (parallel execution, retries on failure)

## Test coverage

| Scenario | Type | Description |
|---|---|---|
| Login → Add to cart | Positive | Logs in with valid credentials, adds an item, and verifies it appears in the cart |
| Full checkout flow | Positive | Completes the entire purchase flow from login through order confirmation |
| Invalid login | Negative | Verifies the correct error message displays for incorrect credentials |
📄 See [TEST_CASES.md](./TEST_CASES.md) for the full test case matrix, including planned and manual test scenarios beyond current automation coverage.
🐛 See [BUG_REPORT.md](./BUG_REPORT.md) for a sample defect report documenting a functional bug found during manual exploration.
## Project structure
```
├── pages/
│   └── saucedemo.page.ts      # Page Object Model — encapsulates locators & actions
├── tests/
│   └── saucedemo-full.spec.ts # Test specs (checkout flow, invalid login)
├── playwright.config.ts       # Browser projects, reporters, retry/parallel settings
└── package.json
```
## Getting started

**Install dependencies:**
```bash
npm install
npx playwright install
```

**Run all tests:**
```bash
npm test
```

**Run tests in headed mode (watch the browser):**
```bash
npm run test:headed
```

**Run tests in interactive UI mode:**
```bash
npm run test:ui
```

**View the HTML report after a run:**
```bash
npm run report
```

## Tech stack

- [Playwright](https://playwright.dev/) — end-to-end testing framework
- TypeScript
- Page Object Model design pattern

## Author

Built by [TmXMvP](https://github.com/TmXMvP) as a Personal QA automation portfolio project.
