import React, { useContext } from 'react'
import NewsFeed from '../components/NewsFeed';
import UserContext from '../components/UserContext';

const Home = () => {
    const user = useContext(UserContext);
    return (
        <div>
            {user.name}
            <NewsFeed />
        </div>
    )
}

export default Home;