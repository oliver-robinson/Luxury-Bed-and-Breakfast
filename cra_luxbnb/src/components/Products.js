import React, { Component } from 'react'
import ProductTile from "./ProductTile"

class Products extends Component {
    constructor() {
        super() 
        this.state = {
            loading: true,
            products: []
        }
    }


    componentDidMount() {
        fetch('http://localhost:8000/api/home')
        .then(result => result.json())
        .then(resultData => {
            // console.log(resultData);
            
            this.setState({
                loading: false,
                products: resultData
            })
        })
    }

    render() {
        const productTiles = this.state.loading ? "Loading..." : this.state.products.map((item, idx) => <ProductTile key={idx} {...item} />)

        return (
            <div className="product-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 header-product">
                            <h2>Homes</h2>  
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row row-flex">
                        {productTiles}
                    </div>
                </div>
            </div>
        )
    }
}

export default Products