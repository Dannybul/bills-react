const billsReducerDefaultState = [];

const billsReducer = (state = billsReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_BILL":
      return [...state, action.bill];
    case "CLEAR_BILLS":
      return [];
    default:
      return state;
  }
};

export default billsReducer;
