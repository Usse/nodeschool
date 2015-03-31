module.exports = (...args) => {

	var sum = args.reduce((soFar, el) => soFar + el);
	return sum / args.length;

};
