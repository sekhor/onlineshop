// functional components
// function Header() {} // normal function
// Header = function() {} // annonymous function assigned to a variable

// useState is React Hooks that provide the state feature in functional component
import { useState } from "react";
// useRef is React Hooks that provide template referrence to form elements
import { useRef } from "react";

// Header = () => {} // functional component can also be a lamdba function
const List = (props) => {

    // last time functional components cannot have state 
    // it must be a class based component and when you extend from the component
    // you automatically inherited the setState method
    // in the latest React version they introduce something called React Hooks
    // useState function takes state property object as parameter and it returns
    // an array of state, function that can change the state

    // over here state variable is pointing to the actual state variable
    // changeRequiredQuantity is used to change the state variables
    const [state, changeRequiredQuantity] = useState({
        requiredQuantity: 0
    })

    let requiredQuantityTextBox = useRef();

    let getRequiredQuantity = (event) => {
        changeRequiredQuantity({ requiredQuantity: event.target.value });
    }

    return (
        <tbody>
        <tr>
            <td>
                <img src={ props.product.photo } className="img-thumbnail" 
                    alt={ props.product.name } width="150"/>
            </td>
            <td>
                <h4 className="card-title">{ props.product.name }</h4>
                <p className="card-text">{ props.product.description }</p>
            </td>
            <td>{ props.product.quantity }</td>
            <td>{ props.product.price }</td>
            <td>
                <input type="text" size="3" maxLength="3" ref={requiredQuantityTextBox}
                    onChange={ getRequiredQuantity }/>&nbsp;
                <button className="btn btn-primary"
                    onClick={ 
                        props.click.bind(null, props.product, 
                            state.requiredQuantity, requiredQuantityTextBox.current) 
                    }
                    disabled={
                        props.product.quantity < state.requiredQuantity
                    }>
                Add To Cart</button>
            </td>
        </tr>
        </tbody>
    )

}

export default List;