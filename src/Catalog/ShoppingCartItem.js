import { useState } from "react";
import { useRef } from "react";

const ShoppingCartItem = (props) => {

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
                <img src={ props.item.product.photo } className="img-thumbnail" 
                    alt={ props.item.product.name } width="150"/>
            </td>
            <td>
                <h4 className="card-title">{ props.item.product.name }</h4>
                <p className="card-text">{ props.item.product.description }</p>
            </td>
            <td>{ props.item.product.quantity }</td>
            <td>{ props.item.product.price }</td>
            <td>
                <input type="text" size="3" maxLength="3" ref={requiredQuantityTextBox}
                    value={ props.item.requiredQuantity }
                    onChange={ getRequiredQuantity }/>&nbsp;
                <button className="btn btn-primary" disabled={ true }>Update</button>&nbsp;
                <button className="btn btn-danger" disabled={ true }>Delete</button>
            </td>
        </tr>
        </tbody>
    )

}

export default ShoppingCartItem;