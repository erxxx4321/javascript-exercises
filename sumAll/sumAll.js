const sumAll = function (start, end) {
	let sum = 0;
	if (start < end) {
		for (let i = start; i <= end; i++) {
			sum += i;
		}
	}

	if (start > end) {
		for (let i = start; i >= end; i--) {
			sum += i;
		}
	}

	if (sum < 0) {
		return "ERROR";
	}
	if (!Number.isInteger(start) || !Number.isInteger(end)) {
		return "ERROR";
	}
	return sum;
};

module.exports = sumAll;
