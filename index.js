// note that the compiled addon is placed under following path
const {Hello} = require('./build/Release/addon');

// `Hello` function returns a string, so we have to console.log it!
console.log(Hello());
