import React, { useContext } from 'react'
import FormPanel from '../components/form/FormPanel';
import Layout from '../components/layout/Layout';
import Container from '../components/form/Container';
import UserContext from '../context/UserContext';
import SendContextProvider from '../context/SendContext';

const NewsLetter = () => {
    const user = useContext(UserContext);
    return (
        <SendContextProvider>
            <Layout>
                {user.name}
                <Container>
                    <FormPanel />
                </Container>
            </Layout>
        </SendContextProvider>
    );
};

export default NewsLetter;