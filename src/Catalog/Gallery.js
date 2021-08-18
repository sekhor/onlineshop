import React from "react";
import { Component } from "react"; 

// Gallery class has inherited the props since it extends from Component class
// which means you can access the props in the class based component using this.props
class Gallery extends Component {

    state = {
        requiredQuantity: 0,
    }
    
    requiredQuantityTextBox = undefined;

    // this.setState method is actually declared inside the Component class
    // when you extends you inherited it automatically
    getRequiredQuantity = (event) => {
        this.setState({ requiredQuantity: event.target.value });
        this.requiredQuantityTextBox = event.target;
    }

    // In order, not to loose the "this" keyword we are using lamda function instead of
    // normal function. However when we want to pass parameter to the function but we
    // dont want to call (execute) the funcion we use bind method
    render() {
        return (
            <div className="col-md-4">
                <div className="card">
                    <img src={ this.props.product.photo } className="card-img-top" 
                        alt={ this.props.product.name } width="300"/>
                    <div className="card-body">
                        <h4 className="card-title">{ this.props.product.name }</h4>
                        <p className="card-text">{ this.props.product.description }</p>
                        <h6>Quantity: { this.props.product.quantity }</h6>
                        <h6>Price: { this.props.product.price }</h6>
                        <input type="text" size="3" maxLength="3"
                            onChange={ this.getRequiredQuantity }/>&nbsp;
                        <button className="btn btn-primary"
                            onClick={ 
                                this.props.click.bind(this, 
                                    this.props.product, this.state.requiredQuantity,
                                    this.requiredQuantityTextBox)
                            }
                            disabled={
                                this.props.product.quantity < this.state.requiredQuantity
                            }>Add To Cart</button>
                    </div>
                </div>            
            </div>
        )
    }

}

export default Gallery;