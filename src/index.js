import React from 'react';
import ReactDOM from 'react-dom';
import bugsnag from '@bugsnag/js'
import bugsnagReact from '@bugsnag/plugin-react'

import App from './App';
import * as serviceWorker from './serviceWorker';

const bugsnagClient = bugsnag(process.env.REACT_APP_BUGSNAG_KEY)
bugsnagClient.use(bugsnagReact, React)

const ErrorBoundary = bugsnagClient.getPlugin('react')
ReactDOM.render(
    <ErrorBoundary>
        <App />
    </ErrorBoundary>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
