import React from "react";
import About from "./About";
import ArticleList from "./ArticleList";
import Header from "./Header";
<<<<<<< HEAD
import blogData from "../data/blog";
=======
import About from "./About";
>>>>>>> 0f034fd5bcbddded428b24dd2062cdd60a70c1ef

console.log(blogData);

function App() {
  
  // const blog = 1;

  return (
    <div className="App">
<<<<<<< HEAD
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
=======
      <Header blogData={blogData}/>
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
      <About blogData={blogData}/> 
>>>>>>> 0f034fd5bcbddded428b24dd2062cdd60a70c1ef
    </div>

  );
}

export default App;