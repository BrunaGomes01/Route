import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home/index.jsx';
import Features from './pages/Features/index.jsx';
import Portifolio from './pages/Portifolio/index.jsx';
const Routes= () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}></Route>
                {/* <Route path='/features' exact component={Features}></Route>
                <Route path='/portifolio' exact component={Portifolio}></Route> */}
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;