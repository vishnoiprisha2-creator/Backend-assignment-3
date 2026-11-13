# Lab 3 - Inventory and Data Management System

## Setup
1. Start MongoDB (or use an Atlas URI in `.env`)
2. `npm install`
3. `npm run seed`   (optional sample data)
4. `npm start`  ->  http://localhost:5000

## Endpoints
| Method | Route | Description |
|-------:|-------|-------------|
| POST | /api/products | Create product (validated) |
| GET | /api/products | List with filter / sort / pagination |
| GET | /api/products/:id | Single product |
| PUT | /api/products/:id | Update details |
| PATCH | /api/products/:id/stock | `{ "change": 10 }` restock, `{ "change": -3 }` sale |
| DELETE | /api/products/:id | Delete product |
| GET | /api/products/low-stock | Items where quantity <= reorderLevel |
| GET | /api/products/summary | Category-wise aggregation |

### Query parameters for GET /api/products
`category`, `supplier`, `search`, `minPrice`, `maxPrice`, `inStock=true|false`,
`sort=-price,name`, `page=1`, `limit=10`
