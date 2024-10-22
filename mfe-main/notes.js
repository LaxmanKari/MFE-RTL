/**
 * Build Micro frontends using module federation.
   This is introduced by webpack 5.
   Using this the code and dependencies can be shared in runtime. 
 */

/**
 * Dependencies and dev dependencies:
 * npm i -D @babel/core @babel/preset-react babel-loader html-webpack-plugin webpack
 * npm i react react-dom
 * npm i -D webpack-cli webpack-dev-server
 */

//  Micro frontends:
// 1. Each major feature of app can be separated and made into different micro frontends SPA apps.
// 2. No direct communication.
// 3. No direct dependencies
// 4. Separation of concern.
// 5. Container --> this decides when and where a specific micro app come and sit in our whole app