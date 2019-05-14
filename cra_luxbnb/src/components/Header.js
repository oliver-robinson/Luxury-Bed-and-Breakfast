import React from "react"
import { Link } from 'react-router-dom'

function Header() {
    return(
        <div className="top-nav-bg">
            <div className="container-fluid">
                <div className="row">
                    <div className=" top-nav-left col-xs-8 col-sm-8 col-md-8">
                        <div className="hidden-xs hidden-sm logo-image"></div>
                        <ul>
                            <li><Link to="/">HOME</Link></li>
                            <li><Link to="/about">ABOUT</Link></li>
                            <li><Link to="/wih">WHAT IS HAPPENING</Link></li>
                            <li><Link to="#">1-310-535-3210</Link></li>
                        </ul>
                    </div>
                    <div className="top-nav-right col-xs-4 col-sm-4 col-md-4">
                        <ul>
                            <li><Link to="/signup">SIGN UP</Link></li>
                            <li><Link to="/login">LOGIN</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header