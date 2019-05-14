import React from "react"
import { Link } from 'react-router-dom'

function Footer() {
    return(
        <>
        <div className="visible-xs bot-btns container-fluid">
            <div className="row">
                <ul>
                    <li className="cabins-btn"><Link to="/cabin">Cabins</Link></li>
                    <li className="mansions-btn"><Link to="/mansion">Mansions</Link></li>
                    <li className="penthouses-btn"><Link to="penthouse">Penthouses</Link></li>
                    <br />
                    <li className="unique-btn"><Link to="/unique">Unique</Link></li>
                    <li className="view-all-btn"><Link to="viewall">View All</Link></li>
                </ul>   
            </div>
        </div>
        <div className="hidden-xs bot-navbar container-fluid"> 
            <div className="row">
                <Link to="/cabin" className="cabins">Cabins</Link>
                <Link to="/mansion" className="mansions">Mansions</Link>
                <Link to="/penthouse" className="penthouses">Penthouses</Link>
                <Link to="/unique" className="unique">Unique</Link>
                <Link to="/products" className="viewall">View All</Link>
            </div>
        </div>
        </>
    )
}

export default Footer