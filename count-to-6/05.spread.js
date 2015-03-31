//var inputs = [];
//process.argv.forEach(function(val, index, array) {
//	  if(index>1) {
//			inputs.push(parseInt(val,10));
//		}
//});


var inputs = process.argv.slice(2);

console.log(`The minimum of [${inputs}] is ${Math.min(...inputs)}`);


