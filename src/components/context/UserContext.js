import React from 'react'

//const UserContext = React.createContext()

//pasandole un parametro a createContext puedo establecer calor por defecto
const UserContext = React.createContext('Yoe')

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export {UserProvider, UserConsumer}

export default UserContext