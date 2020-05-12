import React, { useState, useContext } from 'react';
import Card from '../components/card/Card';
import Layout from '../components/layout/Layout';
import UserContext from '../context/UserContext';

const About = () => {
    const user = useContext(UserContext);
    const [titleState] = useState('Tech Stack');
    const [skillsState] = useState(['Hooks', 'Routing','Context API', 'BEM CSS']);

    return (
        <Layout>
            {user.name}
            <Card title={titleState} skills={skillsState} />
        </Layout>
    )
}

export default About;