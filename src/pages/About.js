import React, { useState } from 'react';
import Card from '../components/Card';

const About = () => {
    const [titleState] = useState('Tech Stack');
    const [skillsState] = useState(['ECMAScript 6', 'Hooks', 'React Routing', 'First Mobile',  'BEM CSS', 'Asynchrony','Reactjs']);

    return (
        <Card title={titleState} skills={skillsState} />
    )
}

export default About;