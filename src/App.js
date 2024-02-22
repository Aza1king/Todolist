import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import todoReducer from "./tools/reducers";
import TodoApp from "./components/TodoApp";

const store = createStore(todoReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoApp />
      </div>
    </Provider>
  );
}

export default App;
