const sortTickets = (filteredTickets, sorting) => {
  const sortedTickets = [...filteredTickets];
  if (sorting === "cheapest") {
    sortedTickets.sort((a, b) => {
      return a.price - b.price;
    });
  }
  if (sorting === "fastest") {
    sortedTickets.sort((a, b) => {
      let durationA = a.segments.reduce((sum, segment) => {
        return sum + segment.duration;
      }, 0);
      let durationB = b.segments.reduce((sum, segment) => {
        return sum + segment.duration;
      }, 0);
      return durationA - durationB;
    });
  }
  if (sorting === "optimal") {
    let prices = sortedTickets.map((ticket) => ticket.price);
    let minPrice = Math.min(...prices);
    let maxPrice = Math.max(...prices);
    let durations = sortedTickets.map((ticket) => {
      let duration = ticket.segments.reduce((sum, segment) => {
        return sum + segment.duration;
      }, 0);
      return duration;
    });
    let minDuration = Math.min(...durations);
    let maxDuration = Math.max(...durations);
    sortedTickets.sort((a, b) => {
      let durationA = a.segments.reduce((sum, segment) => {
        return sum + segment.duration;
      }, 0);
      let durationB = b.segments.reduce((sum, segment) => {
        return sum + segment.duration;
      }, 0);
      let indexA =
        ((a.price - minPrice) / (maxPrice - minPrice)) * 2 +
        (durationA - minDuration) / (maxDuration - minDuration);
      let indexB =
        ((b.price - minPrice) / (maxPrice - minPrice)) * 2 +
        (durationB - minDuration) / (maxDuration - minDuration);
      return indexA - indexB;
    });
  }
  return sortedTickets;
};

export default sortTickets;
