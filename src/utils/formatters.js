export const formatStops = (num) => {
	switch (num) {
		case 0:
			return 'Без пересадок';
		case 1:
			return '1 пересадка';
		case 2:
		case 3:
		case 4:
			return num + ' пересадки';
		default:
			return num + ' пересадок';
	}
};

export const formatDuration = (duration) => {
	const d = Math.floor(duration / (60 * 24));
	const h = Math.floor((duration - 60 * 24 * d) / 60);
	const m = duration - 60 * 24 * d - h * 60;
	const formattedDuration = (d ? d + 'д ' : '') + h + 'ч ' + m + 'м';
	return formattedDuration;
};

export const formatTime = (dateToTime) => {
	const timeString =
		'0'.concat(dateToTime.getHours()).slice(-2) + ':' + '0'.concat(dateToTime.getMinutes()).slice(-2);
	return timeString;
};

export const formatSegment = (segment) => {
	const stops = formatStops(segment.stops.length);
	const startDate = new Date(segment.date);
	const startTime = formatTime(startDate);
	const endDate = new Date(startDate);
	endDate.setMinutes(startDate.getMinutes() + segment.duration);
	const endTime = formatTime(endDate);
	const duration = formatDuration(segment.duration);
	return { stops, startTime, endTime, duration };
};

export const splitPrice = (price) => {
	return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
};
