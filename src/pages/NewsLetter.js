import React, { useContext } from 'react'
import FormPanel from '../components/form/FormPanel';
import Layout from '../components/layout/Layout';
import UserContext from '../context/UserContext';

const NewsLetter = () => {
    const user = useContext(UserContext);
    return (
        <Layout>
            {user.name}
            Hola Mundo!!
            <FormPanel />
        </Layout>
    )
}

export default NewsLetter;