/*
  Test path configuration file
 */
var testsContext = require.context('./test', true, /-test\.js$/);
testsContext.keys().forEach(testsContext);
