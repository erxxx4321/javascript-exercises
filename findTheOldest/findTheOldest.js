const findTheOldest = function (people) {
	let maxAge = 0;
	let oldest = {};

	for (let i = 0; i < people.length; i++) {
		let age = 0;
		if (!people[i]["yearOfDeath"]) {
			age = new Date().getFullYear() - people[i]["yearOfBirth"];
		} else {
			age = people[i]["yearOfDeath"] - people[i]["yearOfBirth"];
		}

		if (age > maxAge) {
			maxAge = age;
			oldest = people[i];
		}
	}

	return oldest;
};

module.exports = findTheOldest;
