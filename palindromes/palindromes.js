const palindromes = function (str) {
	str = str.replace(/\s/g, "").toLowerCase();
	let newStr = "";
	let reversedStr = "";
	var punctuations = "`~!@#$%^&*()_+{}|:\"<>?-=[];'./,";

	// filter the string content
	for (let i = 0; i < str.length; i++) {
		if (punctuations.includes(str[i])) {
			newStr += "";
		} else {
			newStr += str[i];
		}
	}

	for (let j = newStr.length - 1; j >= 0; j--) {
		reversedStr += newStr[j];
	}

	if (newStr === reversedStr) return true;
	else return false;
};

module.exports = palindromes;

console.log(palindromes("A car, a man, a maraca."));
