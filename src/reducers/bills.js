const billsReducerDefaultState = [];

const billsReducer = (state = billsReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_BILL":
      return [...state, action.bill];
    default:
      return state;
  }
};

export default billsReducer;
