'use strict';

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' };
});

Route.resource('categories', 'CategoryController').apiOnly();

Route.resource('products', 'ProductController').apiOnly();

Route.resource('products/:id/category', 'ProductCategoryController').only([
  'store',
  'update',
]);

Route.post('products/:id/images', 'ImageController.store');
Route.get('images/:path', 'ImageController.show');
