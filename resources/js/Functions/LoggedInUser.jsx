import { registerSuccess } from '@/Redux/Actions/AuthAction';
import axios from 'axios';
import { getAuth } from '@/Redux/Actions/AuthAction';



import { useEffect } from 'react';


//its not login function 
//Its to get the user on the basis of token.
export function loggedInUser(dispatch) {

  const token = localStorage.getItem('userToken');

  useEffect(() => {
    const fetchDataAsync = async() => {
    try{
      const response = await fetch('/api/user', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
        }
      })
      const data = await response.json();
      dispatch(getAuth(data));
    }
    catch(error){
        console.log(error);
    }}
     

    fetchDataAsync();
  }, [dispatch]);
}



//To check each page either user logged in or not while page reload 
export function checkUserLoggedIn(dispatch)
{
  if(localStorage.getItem('userToken') !== "")
  {
    loggedInUser(dispatch);
  }
}


