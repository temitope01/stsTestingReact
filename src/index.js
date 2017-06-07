import React from 'react';
import {render} from 'react-dom';
import routes from './routes';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const store = configureStore();

const Root = () => {
    return (
        routes
    )
};

render(
    <Provider store={store}>
        <Root/>
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();
