import React from "react";
import Article from "./Article";
import blogData from "../data/blog";

function ArticleList(){
    const articles = blogData.posts
    const article = articles.map((article) => 
        <Article key={article.id} title={article.title} date={article.date} preview={article.preview}/>
    )
    return (
        <main>
            {article}
        </main>
    )
}

export default ArticleList;