import React, { createContext, useState, useEffect } from 'react';

const UserContext = createContext({ 
    userId: null,             
    updateUser: () => {},
    userName: null,
    updateUserName: () => {},
});

const UserProvider = ({ children }) => {    

const [userId, setUserId] = useState(() => {          
     const storedUserId = sessionStorage.getItem('userId');
     return storedUserId !== null ? storedUserId : null;    
 });

 const [userName, setUserName] = useState(() => { 
  const storedUserName= sessionStorage.getItem("userName")
  return storedUserName!== null ? storedUserName: null;
 })

const updateUser = (id) => {                   
    setUserId(id)
    sessionStorage.setItem('userId', id);     
};


const updateUserName = (name) => { 
  setUserName(name)
  sessionStorage.setItem("userName", name)
}

useEffect(() => {
    const handleStorageChange = (event) => {    
      if (event.key === 'userId') {            
        setUserId(event.newValue);
      } else if (event.key === 'userName') {            
        setUserName(event.newValue);
      }
    };
    window.addEventListener('storage', handleStorageChange); 
    return () => {
      window.removeEventListener('storage', handleStorageChange); 
    };
  }, []);

  return (
    <UserContext.Provider value={{ userId, updateUser, userName, updateUserName }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };