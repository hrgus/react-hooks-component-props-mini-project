import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";

console.log(blogData);

function App() {
  
  // const blog = 1;

  return (
    <div className="App">
      <Header blogData={blogData}/>
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
      <About blogData={blogData}/> 
    </div>

  );
}

export default App;
