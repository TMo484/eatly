import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import eatlyApp from './redux/reducer'
import Homepage from './pages/homepage';
import Welcome from './pages/welcome';

const eatlyStore = createStore(eatlyApp)

ReactDOM.render(<Provider store={eatlyStore}>
                    <Welcome/>
                </Provider>
                , document.getElementById('main'));
