import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import eatlyStore from './redux/reducer';
import App from './App';

ReactDOM.render(<Provider store={eatlyStore}>
                    <App/>
                </Provider>
                , document.getElementById('main'));