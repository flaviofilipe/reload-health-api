'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ProductsSchema extends Schema {
  up() {
    this.create('products', table => {
      table.increments();
      table.timestamps();
      table.string('ref').notNullable().unique();
      table.string('name').notNullable();
      table.text('resume').notNullable();
      table.text('description').notNullable();
      table.integer('quantity').notNullable();
      table.decimal('price_ht').notNullable();
      table.decimal('price_ttc').notNullable();
      table.boolean('active').defaultTo(true);
    });
  }

  down() {
    this.drop('products');
  }
}

module.exports = ProductsSchema;
