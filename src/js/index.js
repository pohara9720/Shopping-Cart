// Babel Polyfill, enables promises and async/await
// See: https://babeljs.io/docs/usage/polyfill/
// Unlike other import statements, this one has side effects!
import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import masterReducer from './data-store/reducers.js'

import AllItems from './components/Shopping/AllItems/AllItems'
import Cart from './components/Shopping/Cart/Cart'




// Create the data store
export const dataStore = createStore(masterReducer,applyMiddleware(logger))


ReactDOM.render(
    <Provider store={dataStore}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={AllItems} />
                <Route exact path="/cart" component={Cart} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app-container')
)
