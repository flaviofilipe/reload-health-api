'use strict';

/*
|--------------------------------------------------------------------------
| ProductSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');
const Product = use('App/Models/Product');

class ProductSeeder {
  async run() {
    const category = await Product.create({
      name: 'Product 1',
      ref: 'T001',
      resume: 'First product seed',
      description: 'First product description seed',
      quantity: 100,
      price_ht: 100,
      price_ttc: 150.25,
      active: true,
    });
  }
}

module.exports = ProductSeeder;
