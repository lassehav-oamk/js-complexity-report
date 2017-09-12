const calc = require('./calc');
const argv = require('minimist')(process.argv.slice(2));

calc.test();

switch (argv.param) {
    case "sum":        
        const result = calc.sum(argv.a, argv.b);
        console.log("result is " + result);            
        break;

    case "jea":
        console.log("jea");
        break;

    default:
        break;
}