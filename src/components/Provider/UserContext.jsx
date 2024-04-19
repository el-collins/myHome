import React, { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';


export const removeCookie = (key)=> Cookies.remove(key) 
const ENDPOINT = "https://my-home-xlox.onrender.com"

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setIsLoading] = useState(false);
  const [token, setToken] = useState(Cookies.get('token'));


  const logout = () => {
    // Remove the user's information from localStorage
    Cookies.remove('token');
  
    // Update the currentUser state
    setCurrentUser(null);
  };

  // Load user from local storage when application loads
  useEffect(() => {
      const fetchCurrentUser = async () => {
       if(!token) {
          return;
        
       }
       setIsLoading(true);
        try {
          const response = await axios.get(`${ENDPOINT}/api/me`, {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${Cookies.get('token')}`,
            },
          });
          const user = response.data;

          setCurrentUser(user);
        } catch (error) {
          console.error(error);
        } finally{
          setIsLoading(false);
        }
      };
      fetchCurrentUser();
   
  }, [token]);

  // Store user in local storage whenever it changes


  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser, logout, token,setToken,loading }}>
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