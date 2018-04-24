# x-mockout-api
This is the API for the mockout app.

(10) `express --view=ejs mockout-api`

(20) `mv mockout-api/*`

(30) `rmdir mockout-api/`

(40) `yarn`

(50) `yarn start`

(55) Copy over my `.babelrc` and `.eslintrc`

(60) `yarn add babel-cli babel-eslint babel-plugin-transform-async-to-generator babel-plugin-transform-class-properties babel-plugin-transform-es2015-modules-commonjs babel-plugin-transform-object-rest-spread eslint babel`

(65) `yarn add knex pg`

(70) Modify `bin/www` to use port 8181

(80) Modify `routes/index.js` to return only JSON and do linter compliance

(90) Modify `app.js` for linter compliance

(100) Remove `routes/user.js` from `app.js`

(110) Delete `routes/users.js`

(120) Start and test with `http GET http://localhost:8181/` to get payload `{ "hello": "world" }`

(130) Add CORS support in `app.js` thusly

```javascript
app.use('/', indexRouter)

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, DELETE')
  next()
})
```

(140) `createdb mockoutdb`

(150) Create `knexfile.js`

```javascript
module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/mockoutdb'
  },
  
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
```

(160) Create `knex.js`

```javascript
const environment = process.env.NODE_ENV || 'development'
const knexConfig = require('./knexfile')[environment]
const knex = require('knex')(knexConfig)
module.exports = knex
```

From now on, make sure you include **this** `knex.js` file instead of the one on `node_modules/` This is the only `.js` file that directly uses the `knex` module.

Also note that this file uses `knexfile.js` as its configuration.

(170) Create the `users` table

```
knex migrate:make users
```
