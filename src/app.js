import React, { Component } from "react";
import { Provider } from "react-redux";
//Bring the store
import store from "./Redux/Store/store";
//Bring the roads
import Routes from "./Routes/app";

class App extends Component {
  render() {
    return (
      //Provider: enable the store for everyone routes
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}
export default App;