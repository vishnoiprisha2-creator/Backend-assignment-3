const express = require('express');
const c = require('../controllers/productController');
const validateObjectId = require('../middleware/validateObjectId');
const { requireBody, validateStockChange } = require('../middleware/validateBody');

const router = express.Router();

router.route('/').get(c.getProducts).post(requireBody, c.createProduct);

// Static routes MUST come before "/:id" or "low-stock" would be read as an id.
router.get('/low-stock', c.getLowStock);
router.get('/summary', c.getSummary);

router.patch('/:id/stock', validateObjectId, validateStockChange, c.adjustStock);

router
  .route('/:id')
  .get(validateObjectId, c.getProductById)
  .put(validateObjectId, requireBody, c.updateProduct)
  .delete(validateObjectId, c.deleteProduct);

module.exports = router;
