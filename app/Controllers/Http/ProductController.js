'use strict';
const Products = use('App/Models/Product');

class ProductController {
  async index({ response, request }) {
    const q = request.input('q');
    const query = Products.query().with('images').with('categories');
    if (q) {
      query.whereRaw('LOWER(name) LIKE ?', '%' + q.toLowerCase() + '%');
    }

    const products = await query.fetch();

    return products;
  }

  async store({ request, response }) {
    const data = request.only([
      'ref',
      'name',
      'resume',
      'description',
      'quantity',
      'price_ht',
      'price_ttc',
      'active',
    ]);

    const product = await Products.create(data);
    return product;
  }

  async show({ params, request, response }) {
    const product = await Products.findOrFail(params.id);

    await product.load('images');
    await product.load('categories');

    return product;
  }

  async update({ params, request, response }) {
    const product = await Products.findOrFail(params.id);

    const data = request.only([
      'ref',
      'name',
      'resume',
      'description',
      'quantity',
      'price_ht',
      'price_ttc',
      'active',
    ]);

    product.merge(data);

    await product.save();
    return product;
  }

  async destroy({ params, request, response }) {
    const products = await Products.findOrFail(params.id);
    await products.delete();
  }
}

module.exports = ProductController;
