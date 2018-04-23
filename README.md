# x-mockout-api
This is the API for the mockout app.

10. `express --view=ejs mockout-api`

20. `mv mockout-api/*`

30. `rmdir mockout-api/`

40. `yarn`

50. `yarn start`

55. Copy over my `.babelrc` and `.eslintrc`

60. `yarn add babel-cli babel-eslint babel-plugin-transform-async-to-generator babel-plugin-transform-class-properties babel-plugin-transform-es2015-modules-commonjs babel-plugin-transform-object-rest-spread eslint babel`

70. Modify `bin/www` to use port 8181

80. Modify `routes/index.js` to return only JSON and do linter compliance

90. Modify `app.js` for linter compliance

100. Remove `routes/user.js` from `app.js`

110. Delete `routes/users.js`

120. Start and test with `http GET http://localhost:8181/` to get payload `{ "hello": "world" }`
