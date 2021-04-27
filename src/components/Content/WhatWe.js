import React from 'react';
import Back from '../../assets/back.png';
import Nav1 from '../../assets/nav-1.png';
import Nav1W from '../../assets/nav-1-where.png';
import Nav2 from '../../assets/nav-2.png';
import Nav3 from '../../assets/nav-3.png';
import WhatImg from '../../assets/whatwelink.png';
import {
    Link
} from 'react-router-dom';

const WhatWe = () => {
    return <>
        <section className="WhatWeDo">
            <div className="WhatNav">
                <Link to="/"><img src={Back} alt=""/></Link>
                <Link to="/WhatWe"><img src={Nav1} alt=""/></Link>
                <Link to="/Maintain"><img src={Nav2} alt=""/></Link>
                <Link to="/GetInT"><img src={Nav3} alt=""/></Link>
            </div>
            <img id="Nav1W" src={Nav1W} alt=""/>
            <div className="WhatImg"><img src={WhatImg} alt=""/></div>
            <h2>Design is the matter of choice ...</h2>
            <p className="p1">But i must explain to you how all this mistaken idea of denouncing pleasure
            and praising pain was born and I will give you a complete account of the system,
            and expound the actual teachings of the great explorer of the truth, the master-builder
            of human happiness. No one rejects, dislikes, or avoids pleasure itself, because
            it is pleasure, but because those who dont know how to pursue pleasure rationally
            encounter consequenses that are.
            </p>
            <p className="p2">
                But i must explain to you how all this mistaken idea of denouncing pleasure
                and praising pain was born and I will give you a complete account of the system,
                and expound the actual teachings of the great explorer of the truth, the master-builder
                of human happiness. No one rejects, dislikes, or avoids pleasure itself, because
                it is pleasure, but because those who dont know how to pursue pleasure rationally
                encounter consequenses that are.
            </p>
            <p className="p3">
            But i must explain to you how all this mistaken idea of denouncing pleasure
                and praising pain was born and I will give you a complete account of the system
            </p>

        </section>
    </>
}
export default WhatWe;