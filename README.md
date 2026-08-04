# AS. Luxury Ladies Bags

A premium front-end ecommerce experience for a luxury ladies bag boutique.

This project includes:
- A modern storefront landing page with product browsing.
- Cart and wishlist interactions.
- Product detail modal and search/filter UX.
- A multi-step checkout flow with promo codes, shipping, and payment steps.

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript (ES6)
- Local Storage (for cart/wishlist state)

## Project Structure

```text
.
├── index.html        # Main storefront page
├── style.css         # Storefront styles
├── app.js            # Storefront logic (products, cart, wishlist, UI behavior)
├── checkout.html     # Checkout page
├── checkout.css      # Checkout styles
├── checkout.js       # Checkout logic (steps, vouchers, totals)
└── images/           # Product and UI images
```

## Features

- Responsive luxury storefront layout.
- Product catalog with categories and badges.
- Add to cart / update quantity / remove items.
- Wishlist drawer with saved items.
- Product detail modal interactions.
- Search and filtering behaviors.
- Checkout flow with:
  - Bag review
  - Address form
  - Payment selection
  - Order review
- Voucher support (e.g. `SAVE10`, `GOLD20`, `NEWUSER`, `FREESHIP`, `SAVE50`, `AS10`).
- Shipping, tax, discount, and total calculations.

## Getting Started

1. Clone this repository:

```bash
git clone <your-repo-url>
cd AS
```

2. Open `index.html` directly in your browser.

For the best development workflow, run it with a local static server (for example, VS Code Live Server).

## Usage

- Start shopping from the storefront.
- Add items to your bag.
- Open cart and proceed to checkout.
- Complete each checkout step and place an order.

## Notes

- This is a front-end-only project (no backend/payment gateway integration).
- Data persistence is handled in the browser via Local Storage.

## Future Improvements

- Backend API integration for products, users, and orders.
- Real payment gateway support (Stripe/PayPal/etc.).
- Authentication and user accounts.
- Admin dashboard for product and inventory management.
- Automated tests (unit/integration/e2e).

## License

This project is for educational/portfolio use. Add a license file (such as MIT) if you plan to distribute it publicly.
