const add = function (a, b) {
	return a + b;
};

const subtract = function (a, b) {
	return a - b;
};

const sum = function (arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
};

const multiply = function (arr) {
	return arr.reduce((a, b) => a * b);
};

const power = function (a, b) {
	return Math.pow(a, b);
};

const factorial = function (num) {
	let sum = 1;
	for (let i = 1; i <= num; i++) {
		sum *= i;
	}
	return sum;
};

module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
