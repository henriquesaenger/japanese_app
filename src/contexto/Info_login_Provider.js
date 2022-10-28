import React, { Fragment, useState, useEffect } from 'react';

const Info_login = React.createContext({
    isLogged: false,
    id: 0,
    login: (email, password) => {},
    logout: () => {}
});

export const Info_login_Provider = (props) => {
    const [isLogged, setIsLogged]= useState(false);
    const [id, setId]= useState(0);

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLogged');
    
        if (storedUserLoggedInInformation === '1') {
          setIsLogged(true);
        }
      }, []);
    
      const logoutHandler = () => {
        localStorage.removeItem('isLogged');
        setIsLogged(false);
      };
    
      const loginHandler = () => {
        localStorage.setItem('isLogged', '1');
        setIsLogged(true);
      };


    return(
        <Info_login.Provider value={{isLogged: false , id: 0, login: loginHandler, logout: logoutHandler}}>
            {props.children}
        </Info_login.Provider>
    )
}


export default Info_login_Provider;