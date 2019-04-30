import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Store from './store/store'
import Routes from './router/index';
import "./assets/css/public.css";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={Store}>
        <Routes />
    </Provider>, 
document.getElementById('root'));


serviceWorker.unregister();
