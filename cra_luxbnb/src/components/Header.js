import React from "react"

function Header() {
    return(
        <div className="top-nav-bg">
            <div className="container-fluid">
                <div className="row">
                    <div className=" top-nav-left col-xs-8 col-sm-8 col-md-8">
                        <div className="hidden-xs hidden-sm logo-image"></div>
                        <ul>
                            <li><a href="/">HOME</a></li>
                            <li><a href="/about">ABOUT</a></li>
                            <li><a href="/wih">WHAT IS HAPPENING</a></li>
                            <li><a href="#">1-310-535-3210</a></li>
                        </ul>
                    </div>
                    <div className="top-nav-right col-xs-4 col-sm-4 col-md-4">
                        <ul>
                            <li><a href="/signup">SIGN UP</a></li>
                            <li><a href="/login">LOGIN</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header