import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app.jsx';
import {Settings} from './mocks/data/index.js';

ReactDom.render(
    <App
      errorsCount = {Settings.ERRORS_COUNT}
    />,
    document.querySelector(`#root`)
);
