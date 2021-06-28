import React from 'react';
import { useProductReducer } from './reducers';
import { createStore } from 'redux';

// create store object
const store = createStore(useProductReducer);

export default store;