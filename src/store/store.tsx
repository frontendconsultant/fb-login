import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from './reducer';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,/* preloadedState, */ composeEnhancers( applyMiddleware(
    loggerMiddleware
)));

export type RootState = ReturnType<typeof rootReducer>;
export default store;