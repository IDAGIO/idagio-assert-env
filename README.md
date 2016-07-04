# @IDAGIO/assert-env
Utility function for asserting node-env variables have a non null value before server startup

Works as a compliment to [node-assert-env](https://github.com/wilmoore/node-assert-env) which only asserts the presence of keys and that the keys have been assigned. This library asserts presence, non null values and non empty string values.

## See Also

Our cookie management module is available as: [`@IDAGIO/cookie-middleware`](https://github.com/IDAGIO/idagio-cookie-middleware)

Our session management module is available as: [`@IDAGIO/session-middleware`](https://github.com/IDAGIO/idagio-session-middleware)

## Usage

Call this module before before starting up your server. If the assertions fail, the node process will exit and print what values are missing.

```js
require('@idagio/assert-env')([
  'KEY1',
  'KEY2',
  'KEY3'
]);

// Start your server here
```
