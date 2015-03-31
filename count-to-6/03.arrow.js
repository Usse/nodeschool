var inputs = process.argv.slice(2);
var result = inputs
	.map(el => el.charAt(0))
	.reduce((prev, current) => prev + current);

console.log(`[${inputs}] becomes "${result}"`);
