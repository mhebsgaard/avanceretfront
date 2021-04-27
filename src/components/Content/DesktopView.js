import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import WhatWe from './WhatWe';
import MainT from './Maintain';
import GetInT from './GetInT';
import Front from './Front';

const Desktopview = () => {

    return <>
    <div className="desktopversion">
        <Router>
            <Switch>               
                    
                    <Route exact path="/" component={Front}></Route>
                    
                    <Route exact path='/WhatWe' component={WhatWe}></Route>
                    
                    <Route exact path='/Maintain' component={MainT}></Route>
               
                    <Route exact path='/GetInT' component={GetInT}></Route>
                
            </Switch>
        </Router>
        </div>
    </>
}

export default Desktopview;