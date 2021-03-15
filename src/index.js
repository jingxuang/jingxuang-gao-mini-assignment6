import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './index.css';
import { createStore } from 'redux';
import { Provider} from 'react-redux';
import { Dices } from './redux/Dice';

const store = createStore(Dices);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));