import React from "react"

function Footer() {
    return(
        <>
        <div className="visible-xs bot-btns container-fluid">
            <div className="row">
                <ul>
                    <li className="cabins-btn"><a href="#">Cabins</a></li>
                    <li className="mansions-btn"><a href="#">Mansions</a></li>
                    <li className="penthouses-btn"><a href="#">Penthouses</a></li>
                    <li className="unique-btn"><a href="#">Unique</a></li>
                    <li className="view-all-btn"><a href="product.html">View All</a></li>
                </ul>   
            </div>
        </div>
        <div className="hidden-xs bot-navbar container-fluid"> 
            <div className="row">
                <a href="#" className="cabins">Cabins</a>
                <a href="#" className="mansions">Mansions</a>
                <a href="#" className="penthouses">Penthouses</a>
                <a href="#" className="unique">Unique</a>
                <a href="product.html" className="viewall">View All</a>
            </div>
        </div>
        </>
    )
}

export default Footer