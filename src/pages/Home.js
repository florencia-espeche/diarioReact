import React, { useContext } from 'react'
import NewsFeed from '../components/apiCall/NewsFeed';
import Layout from '../components/layout/Layout';
import UserContext from '../context/UserContext';

const Home = () => {
    const user = useContext(UserContext);
    return (
        <Layout>
            {user.name}
            <NewsFeed />
        </Layout>
    )
}

export default Home;