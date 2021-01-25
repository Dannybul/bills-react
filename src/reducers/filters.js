const defaultStateFilters = {
  text: "",
  sortBy: "date",
};
export default (state = defaultStateFilters, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
