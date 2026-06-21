# Test Case Matrix — SauceDemo

This document captures test case design for the SauceDemo application, independent of implementation. It reflects how test scenarios were identified and prioritized, not just what has been automated so far.

**Status key:**
- ✅ **Automated** — covered by Playwright tests in `tests/saucedemo-full.spec.ts`
- 📋 **Planned** — designed and ready to automate, not yet implemented
- 🔍 **Manual only** — exploratory/visual checks better suited to manual or visual-regression testing

---

## 1. Login

| ID | Title | Steps | Expected Result | Priority | Status |
|---|---|---|---|---|---|
| LG-01 | Valid login | Enter `standard_user` / `secret_sauce`, click Login | Redirected to Products page | High | ✅ |
| LG-02 | Invalid credentials | Enter incorrect username/password, click Login | Error: "Username and password do not match any user in this service" | High | ✅ |
| LG-03 | Locked out user | Enter `locked_out_user` / `secret_sauce`, click Login | Error: "Sorry, this user has been locked out" | High | 📋 |
| LG-04 | Empty username | Leave username blank, fill password, click Login | Error: "Username is required" | Medium | 📋 |
| LG-05 | Empty password | Fill username, leave password blank, click Login | Error: "Password is required" | Medium | 📋 |
| LG-06 | Problem user login | Enter `problem_user` / `secret_sauce`, click Login | Logs in but UI shows broken product images — flag as known issue, not a new bug | Medium | 🔍 |

## 2. Product Inventory

| ID | Title | Steps | Expected Result | Priority | Status |
|---|---|---|---|---|---|
| INV-01 | Add single item to cart | Click "Add to cart" on a product | Cart badge shows "1"; button changes to "Remove" | High | ✅ |
| INV-02 | Add multiple items to cart | Add 2–3 different products | Cart badge reflects correct count | High | 📋 |
| INV-03 | Remove item from inventory page | Click "Remove" on an added product | Cart badge count decreases; button reverts to "Add to cart" | Medium | 📋 |
| INV-04 | Sort by name (A–Z / Z–A) | Use sort dropdown | Product list reorders alphabetically as selected | Medium | 📋 |
| INV-05 | Sort by price (low–high / high–low) | Use sort dropdown | Product list reorders by price as selected | Medium | 📋 |
| INV-06 | View product detail page | Click a product name/image | Navigates to detail page with correct product info | Low | 📋 |

## 3. Cart

| ID | Title | Steps | Expected Result | Priority | Status |
|---|---|---|---|---|---|
| CRT-01 | View added item in cart | Add item, open cart | Correct item name/price displayed in cart | High | ✅ |
| CRT-02 | Remove item from cart page | Open cart, click "Remove" | Item disappears from cart; badge count updates | Medium | 📋 |
| CRT-03 | Continue shopping | Click "Continue Shopping" from cart | Returns to Products page with cart contents preserved | Low | 📋 |
| CRT-04 | Proceed to checkout | Click "Checkout" from cart | Navigates to checkout step one (information form) | High | ✅ |

## 4. Checkout

| ID | Title | Steps | Expected Result | Priority | Status |
|---|---|---|---|---|---|
| CHK-01 | Complete checkout with valid info | Fill First/Last Name + Zip, click Continue → Finish | Order confirmation: "Thank you for your order!" | High | ✅ |
| CHK-02 | Missing first name | Leave First Name blank, click Continue | Error: "First Name is required" | Medium | 📋 |
| CHK-03 | Missing last name | Leave Last Name blank, click Continue | Error: "Last Name is required" | Medium | 📋 |
| CHK-04 | Missing zip code | Leave Zip blank, click Continue | Error: "Postal Code is required" | Medium | 📋 |
| CHK-05 | Cancel checkout | Click "Cancel" on checkout step | Returns to Products page; cart state unchanged | Low | 📋 |

## 5. Session / Navigation

| ID | Title | Steps | Expected Result | Priority | Status |
|---|---|---|---|---|---|
| NAV-01 | Logout | Open hamburger menu, click Logout | Redirected to login page; session ended | Medium | 📋 |
| NAV-02 | Direct URL access without login | Navigate directly to `/inventory.html` while logged out | Redirected to login page, not inventory | Medium | 🔍 |

---

## Notes on prioritization

- **High priority** cases cover the core revenue path (login → purchase) — these were automated first since they represent the highest business risk if broken.
- **Medium priority** cases cover validation and state management (cart counts, form errors) — important for user experience but lower risk of revenue loss.
- **Low priority / manual** cases are either cosmetic, low-traffic paths, or better suited to exploratory testing than rigid automation (e.g. visual bugs on `problem_user`).
