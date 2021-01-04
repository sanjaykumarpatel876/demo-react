// eslint-disable-next-line no-unused-vars
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './RootReducer';
//import ReduxThunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga';
import rootSaga from './RootSaga';

const sagaMiddleware = createSagaMiddleware();

//const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
