import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import { Auth0Provider } from "@auth0/auth0-react";
// import {domain,clientId} from './auth-details';
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
    <Auth0Provider
    domain="dev-s223iecm.us.auth0.com"
    clientId="XM72QejA6NbNCnanzMSFwDytGYpOhMEh"
    >
    <App />
    </Auth0Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
