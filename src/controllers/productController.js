const Product = require('../models/product');

const getAllProducts = async (req, res) => {
  const { limit = 10, page = 1, sort, query } = req.query;
  const filters = {};

  if (query) {
    filters.$or = [
      { category: query },
      { available: query === 'true' }
    ];
  }

  const result = await Product.paginate(filters, {
    limit: parseInt(limit),
    page: parseInt(page),
    sort: sort === 'asc' ? { price: 1 } : sort === 'desc' ? { price: -1 } : undefined,
    populate: ['products.product'] // Opcional
  });

  res.json({
    status: 'success',
    payload: result.docs,
    totalPages: result.totalPages,
    prevPage: result.prevPage,
    nextPage: result.nextPage,
    hasPrevPage: result.hasPrevPage,
    hasNextPage: result.hasNextPage,
    prevLink: result.hasPrevPage ? `/products?limit=${limit}&page=${result.prevPage}&sort=${sort}&query=${query}` : null,
    nextLink: result.hasNextPage ? `/products?limit=${limit}&page=${result.nextPage}&sort=${sort}&query=${query}` : null
  });
};

module.exports = { getAllProducts };
