import React from "react";

function Header(props){
    return (
        <header>
            <h1>{props.name}</h1>
            {console.log(props.name)}
        </header>
    )
}

export default Header;