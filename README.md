# Adonis API application

## Setup

Install dependences

```bash
yarn install
or
npm install
```

### Migrations and seeds

Run the following command to run startup migrations and run seeds.

```js
adonis migration:run --seed
```

### Run project

```js
adonis run serve
```

### Run tests

```js
adonis test
```

## Using API

| Routes              | Methods | Params                                                                | Format    |
| ------------------- | ------- | --------------------------------------------------------------------- | --------- |
| products            | GET     | --                                                                    | --        |
| products            | POST    | ref, name, resume, description, quantity, price_ht, price_ttc, active | JSON      |
| products/:id        | UPDATE  | ref, name, resume, description, quantity, price_ht, price_ttc, active | JSON      | -- | -- |
| products/:id        | DELETE  | --                                                                    | --        |
| categories          | GET     | --                                                                    | --        |
| categories          | POST    | name                                                                  | JSON      |
| categories/:id      | UPDATE  | name                                                                  | JSON      |
| categories/:id      | DELETE  | --                                                                    | --        |
| images/:path        | GET     | --                                                                    | --        |
| products/:id/images | POST    | image[]                                                               | Multipart |
