import React from 'react'

function ProductSingleTile(props) {
    console.log(props)
    return (
        <React.Fragment key={props.id}>
            <div className="col-xs-12 col-sm-12 col-md-12">
                <img className="hero img-responsive" src={`/images/${props.images}`} />
            </div>
            <div className="col-xs-12 col-sm-8 col-md-8 product-tile">
                <h3>{props.name}</h3>
                <p>{props.city}, {props.state}, {props.country}</p>
                <p>{props.guest} Guest {props.bedrooms} Bedrooms {props.bathrooms} Bathrooms</p>
                <p>{props.description}</p>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4">
                <strong>Starting at</strong>
                <p>{props.pricing}</p>
                <br />
            </div>
        </React.Fragment>
    )
}

export default ProductSingleTile