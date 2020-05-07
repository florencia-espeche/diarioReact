import React, { useState } from 'react';
import Card from '../components/Card';

const About = () => {
    const [titleState] = useState('Tech Stack');
    const [skillsState] = useState(['ECMAScript 6', 'React Hook', 'React Router', 'First Mobile', 'Metodologia BEM', 'Fetch']);

    return (
        <Card title={titleState} skills={skillsState} />
    )
}

export default About;