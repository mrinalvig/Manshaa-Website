import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDom.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('product-description')
);