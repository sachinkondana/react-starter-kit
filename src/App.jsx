import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Goals from './goals';
import rootReducer from './reducers';

import './styles/common.module.scss';

const store = createStore(
    rootReducer,
    // eslint-disable-next-line no-underscore-dangle
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
