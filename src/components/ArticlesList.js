
import React from 'react';
import Article from './Article';
import './ArticlesList.css';

const ArticlesList = ({ value = [], onLoadClick }) => {

    //const allArticles = value.map((article, index) => <Article key={index} article={article} />)

    return (
        <section className="articles-list--articles">
            {value.map((article, index) => <Article key={index} article={article} />)}
            <button onClick={onLoadClick}>Load More Articles</button>
        </section>

    );
}

export default ArticlesList;