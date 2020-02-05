import React from 'react';
import Goals from './goals';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

import './styles/common.module.scss';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

function App() {
  return (
    <Provider store={store}>
      <Goals />
    </Provider>
  );
}

export default App;
