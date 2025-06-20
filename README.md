# AI E-Commerce Smart Search

This is a React application that displays a static list of 10 sample products and allows users to search the product catalog using natural language queries. The app parses the queries to filter products by maximum price, category, and rating preference.

## Features

- Displays a catalog of 10 sample products with name, price, category, description, and rating.
- Search input accepts natural language queries such as:
  - "show me shoes under ₹1000 with good reviews"
  - "shirts below 500"
  - "bags with high rating"
- Parses queries using regex to extract:
  - Maximum price (e.g., "under ₹1000", "below 500")
  - Category keywords (shoes, shirts, bags, pants, dress)
  - Rating preference ("good reviews" or "high rating" means rating ≥ 4)
- Filters and displays matching products in styled cards.
- Responsive and clean UI with basic CSS styling.

## Visuals

<img width="1468" alt="Screenshot 2025-06-20 at 10 12 09 PM" src="https://github.com/user-attachments/assets/efd42d1c-f20d-421a-b8e5-d45d6d92fddc" />
<img width="1468" alt="Screenshot 2025-06-20 at 10 12 00 PM" src="https://github.com/user-attachments/assets/5aa846a2-bb50-4eb7-be84-4acc6e044e99" />
<img width="1468" alt="Screenshot 2025-06-20 at 10 12 28 PM" src="https://github.com/user-attachments/assets/ea0f4f11-f4e7-49d1-87a0-05a99e513a1c" />

## Demo

https://ai-smart-search.vercel.app/

## Project Structure

```
ai-ecommerce-smart-search/
├── package.json
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── products.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository or download the project files.
2. Navigate to the project directory:

```bash
cd ai-ecommerce-smart-search
```

3. Install dependencies:

```bash
npm install
```

### Running the App

Start the development server:

```bash
npm start
```

The app will open in your default browser at [http://localhost:3000](http://localhost:3000) or another available port if 3000 is in use.

### Usage

- Type natural language queries in the search input to filter products.
- Examples:
  - "shoes under ₹1500"
  - "bags with high rating"
  - "dress below 2000 with good reviews"

## Notes

- The product data is static and stored in `src/products.js`.
- The app uses React functional components and hooks.
- Styling is done with basic CSS in `src/App.css`.

## Author

Miloni Patel @milonip
