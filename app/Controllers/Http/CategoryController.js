const Category = use('App/Models/Category');

class CategoryController {
  async index({ response, request }) {
    const category = await Category.all();
    return category.toJSON();
  }

  async store({ request, response }) {
    const data = request.only(['name']);

    const category = await Category.create(data);
    return category;
  }

  async show({ params, request, response }) {
    const category = await Category.findOrFail(params.id);
    return category;
  }

  async update({ params, request, response }) {
    const category = await Category.findOrFail(params.id);

    const data = request.only(['name']);

    category.merge(data);

    await category.save();
    return category;
  }

  async destroy({ params, request, response }) {
    const pategory = await Category.findOrFail(params.id);
    await pategory.delete();
  }
}

module.exports = CategoryController;
