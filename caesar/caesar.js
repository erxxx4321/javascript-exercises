const caesar = function (str, num) {
	let newStr = "";
	for (let i = 0; i < str.length; i++) {
		let code = 0;

		// uppercase
		if (90 >= str.charCodeAt(i) && str.charCodeAt(i) >= 65) {
			code = str.charCodeAt(i) + (num % 26);
			if (code < 65) {
				newStr += String.fromCharCode(code + 26);
			} else if (code > 90) {
				newStr += String.fromCharCode(code - 26);
			} else {
				newStr += String.fromCharCode(code);
			}
		}
		//lowercase
		if (122 >= str.charCodeAt(i) && str.charCodeAt(i) >= 97) {
			code = str.charCodeAt(i) + (num % 26);
			if (code < 97) {
				newStr += String.fromCharCode(code + 26);
			} else if (code > 122) {
				newStr += String.fromCharCode(code - 26);
			} else {
				newStr += String.fromCharCode(code);
			}
		}

		if (
			!(90 >= str.charCodeAt(i) && str.charCodeAt(i) >= 65) &&
			!(122 >= str.charCodeAt(i) && str.charCodeAt(i) >= 97)
		) {
			newStr += str[i];
		}
	}
	return newStr;
};

console.log(caesar("A!", -1));

module.exports = caesar;
