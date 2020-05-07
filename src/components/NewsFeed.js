
import React, { useState, useEffect } from 'react';
//import React, { Component } from 'react';
import ArticlesList from './ArticlesList';
import Loading from './Loading';
import './NewsFeed.css';

const App = (props) => {
  const [articlesState, setArticlesState] = useState({ articles: [] });
  const [counterState, setCounterState] = useState(0);
  const [loadingState, setLoadingState] = useState(true);

  useEffect(() => {
    fetchInitialArticles();
  }, []);

  async function fetchInitialArticles() {
    let currentState = articlesState.articles;
    const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?page=${counterState}&api-key=a69e1cdbb16b4f23841c8f01be77f31a`);
    res.json()
      .then((res) => setArticlesState({ articles: currentState.concat(res.response.docs) }))
      .then(setCounterState(counterState + 1))
      .then(setLoadingState(false));
  }

  return (
    <div className="App">
      {loadingState ? <Loading /> : null}
      <ArticlesList value={articlesState.articles} onLoadClick={fetchInitialArticles} />
    </div>
  );
}

/*class App extends Component {

  state = {
    articles: [],
    i: 0,
  }

  componentDidMount() {
    this.fetchInitialArticles(0)
  }
  //
  // let baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json"
  // let API_KEY = 'a69e1cdbb16b4f23841c8f01be77f31a'

  fetchInitialArticles = () => {
    let counter = this.state.i
    let currentState = this.state.articles
    fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?page=${counter}&api-key=a69e1cdbb16b4f23841c8f01be77f31a`)
      .then((res) => res.json())
      .then((json) => this.setState({ articles: currentState.concat(json.response.docs) }))
      .then(this.setState({ i: this.state.i + 1 }))
  }

  handleLoadClick = () => {
    this.fetchInitialArticles()
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <ArticlesList articles={this.state.articles} onLoadClick={this.handleLoadClick} />
      </div>

    )
  }

}*/
export default App;
