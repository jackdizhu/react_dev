import React from 'react';
import {
    Router,
    Route,
    Switch
} from 'react-router-dom';

import Index from './components/home/index'
import Login from './components/login/index'
import Li from './components/list/li'
import GoodsList from './components/list/index'
import GoodsDetails from './components/details/index'
import Page1 from './components/page/page1'
import Page2 from './components/page/page2'
import history from './components/public/history';


class App extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <Router  history={history}>
                <div>
                    {/**
                     * 这里可以公共的样式,比如 头部, 尾部, 等.
                     */
                    }
                    <Switch>
                        <Route path="/li" component={Li}/>
                        <Route exact path="/" component={Login}/>
                        { /* Index 页面 嵌套 page 页面 */ }
                        <Index>
                            <Route path="/home" component={GoodsList}/>
                            <Route path="/details" component={GoodsDetails}/>
                            <Route path="/page1" component={Page1}/>
                            <Route path="/page2" component={Page2}/>
                        </Index>
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default App;
