import React from 'react';
import {Link} from "react-router-dom";
import logo from '../../doc/img/logo/real-logo.png';
import logoDark from '../../doc/img/logo/real-logo.png';
import tp_banner from '../../doc/img/bg/banner1.png';

const temp = {
    paddingTop: '30px'
}

const LogoArea = ({className, dark}) => {
    return (
        <div style={temp} className={`logo_area ${className ? className : ''}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 align-self-center">
                        <div className="logo">
                            <Link to="/">
                                <img src={dark ? logoDark : logo} alt="logo"/>
                            </Link>
                        </div>
                    </div>
                    {/*<div className="col-lg-8 align-self-center">*/}
                    {/*    <div className="banner1">*/}
                    {/*        <Link to="#">*/}
                    {/*            <img src={tp_banner} alt="banner"/>*/}
                    {/*        </Link>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
};

export default LogoArea;
