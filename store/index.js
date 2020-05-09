
import { createStore } from 'redux';
import reducer from './reducers';
import middleware from './middleware';

export const store = createStore(reducer, middleware);
export * from './actions';
export { connect } from 'react-redux';