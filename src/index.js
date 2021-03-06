import React from 'react';
import ReactDom from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import reducer from "./reducer/reducer";
import {Operation as DataOperation} from "./reducer/data/data";
import {Operation as UserOperation, ActionCreator} from "./reducer/user/user";
import {AuthorizationStatus} from './const';
import {createApi} from "./api";
import {Provider} from 'react-redux';
import App from './components/app/app';
import {composeWithDevTools} from "redux-devtools-extension";

const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const api = createApi(onUnauthorized);


const store = createStore(reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(DataOperation.loadQuestions());
store.dispatch(UserOperation.checkAuth());

ReactDom.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
