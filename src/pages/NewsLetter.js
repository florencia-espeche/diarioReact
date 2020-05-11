import React, { useContext } from 'react'
import FormPanel from '../components/FormPanel';
import UserContext from '../context/UserContext';

const NewsLetter = () => {
    const user = useContext(UserContext);
    return (
        <div>
            {user.name}
            <FormPanel />
        </div>
    )
}

export default NewsLetter;