import './styles/index.scss';
import './assets/favicon.png';
import React from 'react';
import { render } from 'react-dom';
import App from "./components/app";

render(
    <App/>,
    document.getElementById('app')
);