//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import   $             from 'jquery';
import   React         from 'react';
import   App           from './App';
import   reducer       from './reducer';
import { Provider }    from 'react-redux';
import { render }      from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createLogger } from 'redux-logger';

//-----------------------------------------------------------------------------//

const logger = createLogger({});

const store = createStore(
    reducer,
    applyMiddleware(logger)
);

//-----------------------------------------------------------------------------//

$( document ).ready(function() {
    render(
        <Provider store={store}>
            <Router basename={'/uber/'}>
                <Route 
                path="/" 
                component={App} 
                />
            </Router>
    </Provider>,
        $('#root')[0]
    );
});

//-----------------------------------------------------------------------------//