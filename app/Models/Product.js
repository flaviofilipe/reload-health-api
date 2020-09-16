const Model = use('Model');

class Product extends Model {
  categories() {
    return this.belongsToMany('App/Models/Category').pivotModel(
      'App/Models/ProductCategory',
    );
  }

  images() {
    return this.hasMany('App/Models/Image');
  }
}

module.exports = Product;
