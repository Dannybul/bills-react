import React from "react";
import Nav from "./Nav";
import "./App.css";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { addBill, clearBills } from "./actions/billsActions";

const store = configureStore();
store.dispatch(addBill({ billUrl: "http://google.com", billId: "hr42" }));

store.dispatch(addBill({ billUrl: "http://googles.com", billId: "sen21" }));
store.dispatch(addBill({ billUrl: "http://googlesdd.com", billId: "hr31" }));

store.dispatch(addBill({ billUrl: "http://googlesee.com", billId: "sen41" }));

console.log(store.getState());

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Nav />
        </div>
      </Provider>
    );
  }
}
