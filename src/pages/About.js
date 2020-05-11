import React, { useState, useContext } from 'react';
import Card from '../components/Card';
import Layout from '../components/Layout';
import UserContext from '../context/UserContext';

const About = () => {
    const user = useContext(UserContext);
    const [titleState] = useState('Tech Stack');
    const [skillsState] = useState(['ECMAScript 6', 'Hooks', 'React Routing', 'First Mobile', 'BEM CSS', 'Asynchrony', 'Reactjs']);

    return (
        <Layout>
            {user.name}
            <Card title={titleState} skills={skillsState} />
        </Layout>
    )
}

export default About;