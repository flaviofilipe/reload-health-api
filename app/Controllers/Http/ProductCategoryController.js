'use strict';

const Products = use('App/Models/Product');
const Category = use('App/Models/Category');
const ProductCategory = use('App/Models/ProductCategory');

class ProductCategoryController {
  async store({ request, response, params }) {
    const { category_id } = request.only(['category_id']);

    const product = await Products.findOrFail(params.id);

    const productCategoryToRemove = await ProductCategory.query()
      .where('product_id', product.id)
      .whereNotIn('category_id', category_id)
      .delete();

    category_id.map(async id => {
      const category = await Category.findOrFail(id);

      const productCategoryExists = await ProductCategory.query()
        .where({
          product_id: product.id,
          category_id: id,
        })
        .fetch();

      if (productCategoryExists.rows == 0) {
        const newProductCategories = await ProductCategory.create({
          product_id: product.id,
          category_id: category.id,
        });

        productCategories.push(newProductCategories);
      }
    });

    return response.json({ message: 'sucess!' });
  }
}

module.exports = ProductCategoryController;
