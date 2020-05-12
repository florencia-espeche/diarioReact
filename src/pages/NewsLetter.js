import React, { useContext } from 'react'
import FormPanel from '../components/form/FormPanel';
import Layout from '../components/layout/Layout';
import Container from '../components/form/Container';
import UserContext from '../context/UserContext';

const NewsLetter = () => {
    const user = useContext(UserContext);
    return (
        <Layout>
            {user.name}
            <Container>
                 <FormPanel />
            </Container>
        </Layout>
    )
}

export default NewsLetter;