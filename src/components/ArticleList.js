import React from "react";
import Article from "./Article";



function ArticleList({articles}){
    return (
        <div>
            <main>
               {
                   articles.map((article) => {return <Article post = {article}/>})
               }
            </main>
        </div>
    )

}

export default ArticleList;