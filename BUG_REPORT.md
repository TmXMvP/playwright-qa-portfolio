# Bug Report — SauceDemo

This is a sample bug report demonstrating defect documentation as part of this QA portfolio. The defect below was identified manually while exploring the application with the `problem_user` test account, and confirmed through reproduction before being logged.

---

## BUG-001: Add to Cart / Remove buttons stop responding after 3 items (problem_user)

| Field | Detail |
|---|---|
| **Reported by** | TmXMvP |
| **Environment** | Brave, Windows 11, [saucedemo.com](https://www.saucedemo.com/) |
| **User account** | `problem_user` |
| **Severity** | High |
| **Priority** | High |
| **Status** | Open |

### Summary
On the Products (inventory) page, logged in as `problem_user`, only some "Add to cart" buttons respond to clicks, and once the cart reaches 3 items, **all** Add to Cart and Remove buttons stop responding entirely — including for items already in the cart. The cart icon badge remains frozen at the last successful count and does not reflect further attempts.

### Steps to reproduce
1. Go to [saucedemo.com](https://www.saucedemo.com/)
2. Log in with username `problem_user`, password `secret_sauce`
3. On the Products page, click "Add to cart" on each of the 6 products in order:
   - Sauce Labs Backpack
   - Sauce Labs Bike Light
   - Sauce Labs Bolt T-Shirt
   - Sauce Labs Fleece Jacket
   - Sauce Labs Onesie
   - Test.allTheThings() T-Shirt (Red)
4. Observe which buttons change to "Remove" (successful add) vs which remain "Add to cart" (failed add)
5. Once 3 items show "Remove," attempt to click "Remove" on any of them

### Expected result
- All 6 products should add to cart successfully when clicked
- Cart badge should increment correctly with each successful add (up to 6)
- Clicking "Remove" should remove the item, decrement the badge, and revert the button to "Add to cart"

### Actual result
- Only 3 of the 6 products successfully add to cart (Sauce Labs Backpack, Sauce Labs Bike Light, Sauce Labs Onesie); the other 3 (Bolt T-Shirt, Fleece Jacket, Test.allTheThings() T-Shirt) do not respond to clicks at all
- Cart badge correctly shows "3" after the successful adds
- After reaching 3 items, **no** Add to Cart or Remove button on the page responds to further clicks — the interaction appears to lock entirely
- Cart badge remains stuck at "3" regardless of further attempts

### Impact
This is a **functional defect**, not a cosmetic one — it directly blocks the core purchase flow (a user cannot reliably build or adjust their cart), which is the primary revenue path for the application. If this occurred in production, it would likely result in lost sales and support tickets.

### Notes
- This behavior is specific to the `problem_user` account, which SauceDemo intentionally seeds with defects for QA practice purposes. The `standard_user` account does not exhibit this issue.
- Not investigated as part of this report: whether the failure is timing-related (e.g. a JS event listener only binding to the first N elements) or account-specific data corruption. A root-cause investigation would be a reasonable next step if this were a real product defect.

### Suggested severity justification
Rated **High** rather than **Critical** because it is isolated to a specific test account (`problem_user`) rather than affecting all users — but it would be Critical if reproduced on the standard production user flow.
