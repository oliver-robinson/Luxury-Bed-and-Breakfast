import React, { Component } from 'react'
import ProductSingleTile from "./ProductSingleTile"

class ProductSingle extends Component {
    constructor() {
        super()
        this.state = {
            loading: true,
            product: {
                id: '',
                name: '',
                description: '',
                img: '',
                price: ''
            }
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.id);
        fetch('http://localhost:8000/api/home/')
        .then(response => response.json())
        .then(responseData => {
            let homeid = Number(this.props.match.params.id)
            let home = responseData.find(item => {
                return item.id === homeid ? item : null
            });
            this.setState({
                loading: false,
                product: home
            })
            console.log(this.state.product)
        })
    }


    render() {
        const products = {...this.state.product}
        const home = this.state.loading ? "..loading" : <ProductSingleTile {...products} />
        return (
            <div className="container">
                <div className="row row-flex">
                    {home} 
                </div>
            </div>
        )
    }
}

export default ProductSingle