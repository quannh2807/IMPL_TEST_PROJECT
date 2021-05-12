import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import ListRepoScreen from './src';

const App = () => {
    return (
        <Provider store={store}>
            <ListRepoScreen />
        </Provider>
    );
};

export default App;
