/* eslint no-console: 0 */

if (process.env.FAIL_ON_WARNINGS) {
  console.error = function(msg) {
    throw new Error(msg);
  };
}

const context = require.context('./', true, /-test\.js$/);

context.keys().forEach(key => context(key));
