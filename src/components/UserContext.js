import React from 'react';

// const UserContext = React.createContext({
//     authenticated: false, 
//     login: () => {},
// });

const UserContext = React.createContext(true);

export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;

export default UserContext;