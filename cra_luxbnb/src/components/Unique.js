import React, { Component } from 'react'
import ProductTile from "./ProductTile"

class Unique extends Component {
    constructor() {
        super() 
        this.state = {
            loading: true,
            products: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:8000/api/home/home/unique')
        .then(result => result.json())
        .then(resultData => {
            this.setState({
                loading: false,
                products: resultData
            })
        })
    }

    render() {
        const productTiles = this.state.loading ? "Loading..." : this.state.products.map((item, idx) => <ProductTile key={idx} {...item} />)

        return (
            <div className="unique-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 header-product">
                            <h2>Unique</h2>  
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

export default Unique