import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import reducer from './reducers/mainReducer'
import { Provider } from 'react-redux'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import {CreatePost} from "./components/createPost";
import FindPost from "./containers/findPost";
import {NoMatch} from "./components/noMatch";

export const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route path='/createPost' component={CreatePost}/>
                <Route path='/Post/:id' component={FindPost}/>
                <Route path='/Post/Post/:id' component={NoMatch}/>
                <Route component={NoMatch}/>
            </Switch>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
