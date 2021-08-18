import React from "react";
import { Component } from "react"; 

import Gallery from "./Gallery";
import List from "./List";
import ShoppingCart from './ShoppingCart';

class Products extends Component {

    // React has a special property called state.
    // React always monitor the values of state property.
    // When the value changes React will automatically call the render method.
    state = {
        isGallery: true,
        filteredProducts: [],
        shoppingCart: [],
        message: ""
    }

    // array of javascript objects (JSON)
    // difference between JavaScript Object and JSON
    // in JS Object the keys are not necessarily to be inside double quote ""
    // in JSON the keys must be inside double quote ""
    products = [{
            name:'Television',
            description:"To watch Movie",
            quantity: 20,
            price: 1285.55,
            photo: "https://cdn.pocket-lint.com/r/s/300x/assets/images/150625-tv-news-lg-unveils-its-4k-and-8k-oled-tv-range-for-2020-including-150625-48-inch-screen-size-image1-d6sdccoxxg.jpg"
        }, {
            name:'Laptop',
            description:"To watch Movie",
            quantity: 50,
            price: 6575.75,
            photo: "https://digitalnomads.world/wp-content/uploads/2021/07/mac-air-300x200.jpeg"
        }, {
            name:'Computer',
            description:"To watch Movie",
            quantity: 30,
            price: 4238.25,
            photo: "https://www.vssmonitoring.com/wp-content/uploads/2021/06/mounted-monitors-300x200.jpg"
        }, {
            name:'Bicycle',
            description:"To watch Movie",
            quantity: 10,
            price: 625.35,
            photo: "https://outdoorxsports.com/wp-content/uploads/2019/07/how-to-measure-a-bike-mountain-bike-300x200.jpg"
        }, { 
            name:'Handphone',
            description:"To watch Movie",
            quantity: 80,
            price: 885.15,
            photo: "https://www.pricecheck.co.za/blog/wp-content/uploads/2016/11/960x0-300x200.jpg"
        }, {
            name:'Radio',
            description:"To watch Movie",
            quantity: 60,
            price: 285.95,
            photo: "https://greatestspeakers.com/wp-content/uploads/2019/09/best-doulbe-din-head-unit-1.png"
        }
    ];

    // you will loose the "this" keyword if you create this method as normal method
    // this method is passed as parameter to the onClick event
    // by the time the click event happens we lost the keyword "this" 
    // since it will be executed in the execution context
    // let us create this as lambda method
    changeState = () => {
        // this.isGallery = !this.isGallery; // variable is changing
        // but the react is not calling the render method 
        // ie. we have not triggered the render event
        // React has a special property called state.
        // React always monitor the values of state property.
        // When the value changes React will automatically call the render method.
        this.setState({ isGallery: !this.state.isGallery})
    }

    // every single key stroke in the text box it will call the doSearch method
    // we must be able to retrieve the data keyed in by the user
    // every single event is attached with an object that is based on Event interface
    // you can ask react to inject the event object whenever it calls the doSearch method
    doSearch = (event) => {
        let searchKeyword = event.target.value;
        if (searchKeyword === '') {
            this.setState({filteredProducts: []})    
        } else {
            let expression = new RegExp('^' + searchKeyword, 'i')
            let results = this.products.filter((product) => {
                return expression.test(product.name)
            })
            this.setState({filteredProducts: results})
        }
    }

    addToCart = (product, requiredQuantity, requiredQuantityTextBox) => {
        let shoppingCart = this.state.shoppingCart;
        shoppingCart.push({
            product: product, 
            requiredQuantity: requiredQuantity
        })
        this.setState({ shoppingCart: shoppingCart })
        requiredQuantityTextBox.value = "";
        this.setState({ message: `${ product.name } successfully added` })
    }

    render() {
        return (
            <div>
                {
                    (() => {
                        if (this.state.message !== "") {
                            return (
                                <div className="alert alert-danger">
                                    { this.state.message }
                                </div>        
                            )
                        }
                    })()
                }
                <div className="row" style={ {paddingBottom:'15px'} }>
                    <div className="col-md-9">
                        <input type="text" className="form-control"
                            onChange={ this.doSearch }/>
                        {
                            (() => {
                                if (this.state.filteredProducts.length > 0) {
                                    return(
                                        <div className="searchResults">
                                            <table className="table table-bordered">
                                                {
                                                    this.state.filteredProducts.map((product, index) => {
                                                        return (
                                                            <List key={index} product={product}
                                                                click={this.addToCart}/>
                                                        )
                                                    })
                                                }
                                            </table>
                                        </div>
                                    )
                                }
                            })()
                        }
                    </div>
                    <div className="col-md-2">
                        <button type="button" className="btn btn-primary">
                            My Cart &nbsp;&nbsp;&nbsp;
                            <span className="badge bg-danger">
                                { this.state.shoppingCart.length }</span>
                        </button>
                    </div>
                    <div className="col-md-1">
                        <button style={ { float:"right" } } className="btn btn-success"
                            onClick={ this.changeState }>
                            { this.state.isGallery ? 'List' : 'Gallery' }</button>
                    </div>
                </div>
                {
                    (() => {
                        if (this.state.isGallery) {
                            return(
                                <div className="row">
                                {
                                    this.products.map((product, index) => {
                                        return (
                                            <Gallery key={index} product={product}
                                                click={this.addToCart}/>
                                        )
                                    })
                                }
                                </div>
                            )
                        } else {
                            return(
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
                                            this.products.map((product, index) => {
                                                return (
                                                    <List key={index} product={product}
                                                        click={this.addToCart}/>
                                                )
                                            })
                                        }
                                        </table>
                                    </div>
                                </div>
                            )
                        }
                    })()
                }
                <hr/><h3>Shopping Cart</h3><hr/>
                <ShoppingCart shoppingCart={this.state.shoppingCart}/>
            </div>
        )
    }

}

export default Products;