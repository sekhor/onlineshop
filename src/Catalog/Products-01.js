import React from "react";
// why we use { } for Component not for React
// React was exported using the keyword default ie. export default React
// Component was exported without using the keyword default ie. export Component
import { Component } from "react"; 

// class based components
// Over here your class name is Products
// Since you already extends from Component class 
// your class Products has inherited the methods from Component class
class Products extends Component {

    // inside the class we cannot use var, let, const keywords
    // variables declared inside the class is called properties / attributes
    // in order to access the properties inside the class you must use the keyword "this"
    products = ['Television', 'Laptop', 'Computer', 'Bicycle', 'Handphone', 'Radio'];

    // function can return JSX
    // how about in class
    // the component class must have a method called render
    // method is nothing but function inside the class
    // and that render method/function must return JSX
    render() {
        // map is a method in javascript array
        // the map method accepts function as paramter
        // the function is executed for every single item in the array
        // inside the return jsx if you want to use javascript then
        // javascript code must be inside { }
        return (
            <div>
                <ol>
                {
                    this.products.map(function(product) {
                        return (
                            <li>{ product }</li>
                        )
                    })
                }
                </ol>
            </div>
        )
    }

}

export default Products;