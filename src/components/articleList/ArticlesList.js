
import React from 'react';
import Article from '../article/Article';
import './ArticlesList.css';
import Button from '../form/Button';

const ArticlesList = ({ value = [], onLoadClick }) => {

    //const allArticles = value.map((article, index) => <Article key={index} article={article} />)

    return (
        <React.Fragment>
            <section className="articles-list--articles">
                {value.map((article, index) => <Article key={index} article={article} />)}
            </section>
            <Button className= "articles-list--button" click = {() => onLoadClick}>
                Load More Articles
            </Button>
        </React.Fragment>
    );
}

export default ArticlesList;