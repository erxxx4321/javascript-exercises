const repeatString = function (str, times) {
	if (times < 0) {
		return "ERROR";
	}

	let count = 0;
	let newStr = "";
	while (count < times) {
		for (let i = 0; i < str.length; i++) {
			newStr += str[i];
		}
		count++;
	}
	return newStr;
};

module.exports = repeatString;
