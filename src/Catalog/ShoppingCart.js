import React from "react";
import { Component } from "react"; 

import ShoppingCartItem from "./ShoppingCartItem";

class ShoppingCart extends Component {

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th colSpan="2">Product</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {
                            this.props.shoppingCart.map((shoppingCartItem, index) => {
                                return (
                                    <ShoppingCartItem key={index} item={shoppingCartItem}/>
                                )
                            })
                        }
                    </table>
                </div>
            </div>
        )
    }

}

export default ShoppingCart;