import React, { useState, useContext } from 'react';
import Card from '../components/Card';
import UserContext from '../components/UserContext';

const About = () => {
    const user = useContext(UserContext);
    const [titleState] = useState('Tech Stack');
    const [skillsState] = useState(['ECMAScript 6', 'Hooks', 'React Routing', 'First Mobile', 'BEM CSS', 'Asynchrony', 'Reactjs']);

    return (
        <div>
            {user.name}
            <Card title={titleState} skills={skillsState} />
        </div>
    )
}

export default About;