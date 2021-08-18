import React from 'react';

// props.children is used to accept the content in between the tags
// content in between the opening and closing tags
const Footer = function(props) {
    const currentDate = new Date().toDateString();
    // whenever you content has html, css, javascript codes and you intensionally
    // dont want reactjs to sanitize the content then you have to convert you
    // string content to an object as follows with __html as key
    // you also have to use dangerouslySetInnerHtml
    // This will enable xss attack so please use it only when it is really required
    const content = { __html:"Copyright &copy; <b>Intel Malaysia</b>" };
    // <p className="footerStyle">{ props.children } { currentDate }</p>
    /*
    let footerStyle = {
        textAlign:'center'
    }
    */
    return (
        <div>
            <hr/>
            <p style={ { textAlign:'center' } }>
                <span dangerouslySetInnerHTML={ content }/> { currentDate }
            </p>     
        </div>
    )
}

export default Footer;