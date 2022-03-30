/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
//import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

Route.get('/', async () => {
  return { hello: 'world' }
}).as("home")

// Route.get('/venues', 'ContactsController.index').as('venues.index')
// Route.post('/venues', 'ContactsController.store').as('venues.store')
// Route.get('/venues/:id', 'ContactsController.show').as('venues.show')
// Route.put('/venues/:id', 'ContactsController.update').as('venues.update')
// Route.delete('/venues/:id', 'ContactsController.destroy').as('venues.destroy')
Route.resource('venues', 'ContactsController').apiOnly()
//.middleware({'store': ['auth']})
Route.resource('venues.fields', 'PostsController').apiOnly()
//.middleware({'store': ['auth']})
Route.post('/register', 'AuthController.register').as('auth.register')
Route.post('/login', 'AuthController.login').as('auth.login')
//Route.post('/bookings', 'BookingsController.booking').as('contacts.booking')
//.middleware(['auth'])
Route.post('/fields/:id/bookings', 'BookingsController.booking').as('fields.booking').middleware(['auth'])
Route.get('/bookings/:id', 'BookingsController.show').as('bookings.show').middleware(['auth'])
Route.put('/bookings/:id', 'BookingsController.join').as('bookings.join').middleware(['auth'])