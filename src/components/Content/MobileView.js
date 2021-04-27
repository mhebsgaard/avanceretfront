import React from 'react';
import Logo from '../../assets/logo-final.png';
import MobImg1 from '../../assets/webwhat.png';
import MobImg2 from '../../assets/webmaintain.png';
import MobImg3 from '../../assets/webgetin.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import WhatWeMob from './WhatWeMob';
import MaintainMob from './MaintainMob';
import GetInTMob from './GetInTMob';

const Mobileview = () => {

    return <>
        <div className="mobileVers">
            <Router>
                <Switch>
                    <div className="mobileImgCon">
                        <img src={Logo} id="mLogo" alt=""/>

                        <div className="mobDivImg"><Link to="/WhatWeMob"><img src={MobImg1} alt=""/></Link></div>
                        <Route exact path="/WhatWeMob" component={WhatWeMob}></Route>

                        <div className="mobDivImg"><Link to="/MaintainMob"><img src={MobImg2} alt=""/></Link></div>
                        <Route exact path="/MaintainMob" component={MaintainMob}></Route>

                        <div className="mobDivImg"><Link to="/GetInTMob"><img src={MobImg3} alt=""/></Link></div>
                        <Route exact path="/GetInTMob" component={GetInTMob}></Route>
                        
                        <h4>And yet... more to come</h4>
                    </div>
                </Switch>
            </Router>
        </div>
    </>
}

export default Mobileview;