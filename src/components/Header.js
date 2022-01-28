import React from "react";

function Header({ name }){
    return (
        <header>
            <h1>{name}</h1>
            {console.log(name)}
        </header>
    )
}

export default Header;