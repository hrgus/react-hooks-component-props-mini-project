import React from "react";

<<<<<<< HEAD
function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
=======
function Header({ name }){
    return (
        <header>
            <h1>{name}</h1>
            {console.log(name)}
        </header>
    )
>>>>>>> 0f034fd5bcbddded428b24dd2062cdd60a70c1ef
}

export default Header;