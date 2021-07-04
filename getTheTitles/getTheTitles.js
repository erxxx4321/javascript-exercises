const getTheTitles = function (books) {
	let titles = [];
	books.map((item) => titles.push(item.title));

	return titles;
};

module.exports = getTheTitles;
