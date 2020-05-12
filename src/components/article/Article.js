
import React from 'react'
import './Article.css';

const Article = ({ article }) => {
    return (
        <article className="article--card">
            <div className="article--header"><a className = "article--link" href={article.web_url}>{article.headline.main}</a></div>
            <div className="article--description">{article.snippet}</div>
        </article>
    );
}

export default Article;