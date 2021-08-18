import React from "react";
import { Component } from "react"; 

class Products extends Component {

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

    render() {
        return (
            <div className="row">
            {
                this.products.map(function(product) {
                    return (
                        <div className="col-md-4">
                            <img src={product.photo} class="img-thumbnail" width="300"/><br/>
                            { product.name }<br/>
                            { product.description }<br/>
                            { product.quantity }<br/>
                            { product.price }<br/>
                        </div>
                    )
                })
            }
            </div>
        )
    }

}

export default Products;