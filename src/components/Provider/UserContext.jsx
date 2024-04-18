import React, { createContext, useState, useContext, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);


  const logout = () => {
    // Remove the user's information from localStorage
    localStorage.removeItem('currentUser');
  
    // Update the currentUser state
    setCurrentUser(null);
  };

  // Load user from local storage when application loads
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  // Store user in local storage whenever it changes
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('currentUser');
    }
  }, [currentUser]);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};


export const useUser = () => useContext(UserContext);








// // Store user in local storage whenever it changes
// useEffect(() => {
//   if (currentUser) {
//     // Check if the token is expired
//     const token = currentUser.token;
//     const decodedToken = jwt_decode(token);
//     const currentTime = Date.now() / 1000; // Get current time in seconds

//     if (decodedToken.exp < currentTime) {
//       // Token is expired, log the user out
//       logout();
//     } else {
//       localStorage.setItem('currentUser', JSON.stringify(currentUser));
//     }
//   } else {
//     localStorage.removeItem('currentUser');
//   }
// }, [currentUser]);