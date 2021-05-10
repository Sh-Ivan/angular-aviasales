const filterTickets = (tickets, filters) => {
  if (filters.all) return tickets;
  const filtersMap = [filters.direct, filters.one, filters.two, filters.three];
  const filtered = tickets.filter((ticket) => {
    for (let segment of ticket.segments) {
      if (!filtersMap[segment.stops.length]) return false;
    }
    return true;
  });
  return filtered;
};

export default filterTickets;
