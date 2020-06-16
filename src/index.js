import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app';
import {Settings} from './mocks/data/const';
import questions from './mocks/data/questions';

ReactDom.render(
    <App
      errorsCount={Settings.ERRORS_COUNT}
      questions={questions}
    />,
    document.querySelector(`#root`)
);
