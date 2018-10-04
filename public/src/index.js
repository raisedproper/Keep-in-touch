import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { store } from './Store';
import { Provider } from 'react-redux';
import Index from './components';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Switch>
                    <Route exact path='/' component={Index} />
                    <Route path='/api/' />
                    <Route path='*' component={Handle404} />
                </Switch>
            </Provider>
        );
    }
}

const page404 = {
    color: "white",
}

class Handle404 extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1 className='text-center font-weight-bold' style={page404}>
                            Sorry, but the page you tried visiting doesn't exist!
                        </h1>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<BrowserRouter>
    <App />
</BrowserRouter>, document.getElementById('KIT'));

serviceWorker.unregister();
