import React from "react";
import blogData from "../data/blog";
import About from "./About"
import Article from "./Article"
import ArticleList from "./ArticleList"
import Header from "./Header"


console.log(blogData);



function App() {
  return (
    <div className="App">
      <Header />
      <About prop={blogData}/>
      <ArticleList articles={blogData.posts}/>

    </div>
  );
}

export default App;
