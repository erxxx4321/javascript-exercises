const removeFromArray = function (arr, num1, num2, num3, num4) {
	if (arr.indexOf(num1) >= 0) {
		arr.splice(arr.indexOf(num1), 1);
	}
	if (arr.indexOf(num2) >= 0) {
		arr.splice(arr.indexOf(num2), 1);
	}
	if (arr.indexOf(num3) >= 0) {
		arr.splice(arr.indexOf(num3), 1);
	}
	if (arr.indexOf(num4) >= 0) {
		arr.splice(arr.indexOf(num4), 1);
	}
	return arr;
};

module.exports = removeFromArray;
