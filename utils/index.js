const convertDate = (startTime, endTime) => {
	let time = new Date(endTime).getTime() - new Date(startTime).getTime();
	time = time / (24 * 60 * 60 * 1000);
	let divideTime = "date";
	let divideTimeApp;
	if (time > 365) {
		divideTime = "year";
	} else if (time > 30) {
		divideTime = "month";
	} else {
		divideTime = "date";
	}
	return { divideTimeApp, divideTime };
};

module.exports = { convertDate };