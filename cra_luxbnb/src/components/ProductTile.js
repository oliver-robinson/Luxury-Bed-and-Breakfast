import React from 'react'
import { Link } from 'react-router-dom'

function ProductTile(props) {
    return (
        <div className="col-xs-12 col-sm-6 col-md-4 product-tile">
            <img className="img-responsive" src={`/images/${props.images}`} />
            <div className="wrapper">
                <h3>{props.name}</h3>
                <p>{props.guest} Guest {props.bedrooms} Bedrooms {props.bathrooms} Bathrooms</p>
                <p><strong>${props.pricing}.00</strong> per night</p>
                <p>{props.city}, {props.state}, {props.country}</p>
                <Link to={`/products/${props.id}`}>More Info</Link>
            </div>
        </div>
    )
}

export default ProductTile