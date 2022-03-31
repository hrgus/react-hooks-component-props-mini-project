import React from "react";

<<<<<<< HEAD
function About({ about, image = "https://via.placeholder.com/215" }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
=======
function About({ about, image="https://via.placeholder.com/215" }){
   return (
      <aside>
         <img src={image} alt="blog logo"></img>
         <p>{about}</p>
      </aside>
   )
>>>>>>> 0f034fd5bcbddded428b24dd2062cdd60a70c1ef
}

export default About;