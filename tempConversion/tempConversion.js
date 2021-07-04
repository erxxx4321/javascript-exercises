const ftoc = function (tempF) {
	// [°C] = ([°F] − 32) × 5⁄9
	let tempC = (tempF - 32) * (5 / 9);
	if (tempC != 0 || !Number.isInteger(tempC)) {
		return Number(tempC.toFixed(1));
	} else {
		return tempC;
	}
};

const ctof = function (tempC) {
	// [°F] = [°C] × 9⁄5 + 32
	let tempF = tempC * (9 / 5) + 32;
	if (!Number.isInteger(tempF)) {
		return Number(tempF.toFixed(1));
	} else {
		return tempF;
	}
};

module.exports = {
	ftoc,
	ctof,
};
