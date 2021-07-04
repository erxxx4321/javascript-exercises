const fibonacci = function (num) {
	let a = 0;
	let b = 1;
	let show = 0;

	for (let i = 0; i < Number(num) - 1; i++) {
		show = a + b;
		a = b;
		b = show;
	}

	if (Number(num) < 0) return "OOPS";
	else if (Number(num) === 0) return a;
	else if (Number(num) === 1) return b;
	else return show;
};

module.exports = fibonacci;
