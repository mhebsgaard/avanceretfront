import React from 'react';
import Img1 from '../../assets/front-what-we-do.png';
import Img2 from '../../assets/front-maintainable.png';
import Img3 from '../../assets/front-get-in-touch.png';
import Logo from '../../assets/logo-final.png';

import {
    Link
} from 'react-router-dom';

const Front = () => {

    return <>
        <div className="FrontPage">
            <div className="frontImgCon">
                <img id="frontLogo" src={Logo} alt=""/>
                <div className="frontImg">
                    <Link to="/WhatWe"><img src={Img1} alt=""/></Link>
                </div>
                <div className="frontImg">
                    <Link to="/Maintain"><img src={Img2} alt=""/></Link>
                </div>
                <div className="frontImg">
                    <Link to="/GetInT"><img src={Img3} alt=""/></Link>
                </div>
                <h4>And yet... More to come</h4>
            </div>
            
        </div>


    </>

}

export default Front;