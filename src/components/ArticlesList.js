
import React from 'react';
import Article from './Article';
import './ArticlesList.css';

const ArticlesList = ({ value = [], onLoadClick }) => {

    //const allArticles = value.map((article, index) => <Article key={index} article={article} />)

    return (
        <React.Fragment>
            <section className="articles-list--articles">
                {value.map((article, index) => <Article key={index} article={article} />)}
            </section>
            <button className= "articles-list--button" onClick={onLoadClick}>Load More Articles</button>
        </React.Fragment>
    );
}

export default ArticlesList;