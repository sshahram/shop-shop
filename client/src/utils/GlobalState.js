import reducer from './reducers';
import { createStore } from 'redux';

// create store object
const store = createStore(reducer);

export default store;