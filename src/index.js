import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import eatlyStore from './redux/reducer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';

ReactDOM.render(<Provider store={eatlyStore}>
                    <Router>
                        <Route path="/" component={App}/>
                    </Router>
                </Provider>
                , document.getElementById('main'));