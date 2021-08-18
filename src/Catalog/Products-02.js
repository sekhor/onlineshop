import React from "react";
import { Component } from "react"; 

class Products extends Component {

    products = ['Television', 'Laptop', 'Computer', 'Bicycle', 'Handphone', 'Radio'];

    // let us use bootstrap css class on the div tag => row, col-md-4
    // div tag with "row" className takes the entire row and divide it by 12 columns
    // inner div tag with "col-md-4" className takes 4 columns out of 12 columns and merge it
    render() {
        return (
            <div className="row">
            {
                this.products.map(function(product) {
                    return (
                        <div className="col-md-4">{ product }</div>
                    )
                })
            }
            </div>
        )
    }

}

export default Products;