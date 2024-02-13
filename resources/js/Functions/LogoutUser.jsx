import { useEffect } from "react";
import { logoutFailure, logoutSuccess } from '@/Redux/Actions/AuthAction';


export function logoutUser(dispatch){

    const token = localStorage.getItem('userToken');

    useEffect(() => {
        const userLogoutAsync = async() => {
        try{
            const response = fetch('/api/logout', {
                method : 'POST',
                headers  : {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json'
                }
            })
            localStorage.setItem('userToken', '');
            dispatch(logoutSuccess())
           
        }
        catch(error)
        {
            dispatch(logoutFailure())
        }}


    userLogoutAsync();

    }, [dispatch])

}