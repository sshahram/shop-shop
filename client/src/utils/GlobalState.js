import React, { createContext, useContext } from 'react';
import { useProductReducer } from './reducers';

// instantiate the global state object
const StoreContext = createContext();

// every context object comes with two components, a Provider and a Consumer
// Provider is a special type of React component that we wrap our application in so it can make the state data that's passed into it
// as a prop available to al other components
const { Provider } = StoreContext;

// create a custom provider function that will be used to manage and update our state using the reducer we created earlier
const StoreProvider = ({ value = [], ...props}) => {
    const [state, dispatch] = useProductReducer({
        products: [],
        cart: [],
        cartOpen: false,
        categories: [],
        currentCategory: '',
    });
    // use this to confirm it works!
    // console.log(state);
    return <Provider value={[state, dispatch]} {...props} />;
};

// create a custom function using useContext() Hook
// to be used by the components that actually need the data our <StoreProvider> will be providing
const useStoreContext = () => {
    return useContext(StoreContext);
}

// export StoreProvider and useStoreContext()
export { StoreProvider, useStoreContext};