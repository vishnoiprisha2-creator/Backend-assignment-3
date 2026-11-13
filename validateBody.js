const AppError = require('../utils/AppError');

// Rejects empty bodies and strips fields clients must never set directly.
const BLOCKED = ['_id', 'id', 'createdAt', 'updatedAt', '__v', 'stockValue'];

function requireBody(req, res, next) {
  if (!req.body || Object.keys(req.body).length === 0) {
    return next(new AppError('Request body cannot be empty', 400));
  }
  BLOCKED.forEach((f) => delete req.body[f]);
  next();
}

function validateStockChange(req, res, next) {
  const { change } = req.body || {};
  if (typeof change !== 'number' || !Number.isInteger(change) || change === 0) {
    return next(new AppError('"change" must be a non-zero integer (positive = restock, negative = sale)', 400));
  }
  next();
}

module.exports = { requireBody, validateStockChange };
