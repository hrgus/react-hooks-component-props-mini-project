<<<<<<< HEAD
import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  const articles = posts.map((post) => (
    <Article
      key={post.id}
      title={post.title}
      date={post.date}
      preview={post.preview}
      minutes={post.minutes}
    />
  ));
  return <main>{articles}</main>;
=======
import React from "React";

function ArticleList(articles){

    return (
        <main>
            {}
        </main>
    )
>>>>>>> 0f034fd5bcbddded428b24dd2062cdd60a70c1ef
}

export default ArticleList;