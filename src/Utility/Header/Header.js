// let us bring in the library React
import React from 'react';

// functional components
// function Header() {} // normal function
// Header = function() {} // annonymous function assigned to a variable

// function must return JSX code
const Header = function(props) {
    // const title = "Intel - Online Bazzar" // virtual DOM
    // document.getElementById('divid').innerHtml = "Intel - Online Bazzar"
    // getElementById is not JavaScript it is never mention in ECMA specification
    // getElementById is implemented by Browser vendors 
    // getElementById is documented under Mozilla Developer Network (specification)
    return (
        <div><h2 style={ props.headerStyle }>{ props.children }</h2><hr/></div> // DOM
    )
}

// every function must be exported
export default Header;