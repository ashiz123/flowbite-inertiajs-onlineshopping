
import { AuthConstants } from "../Constants/AuthConstants";

const initialState = {
    isRegister : false,
    user : { 
        'username' : '',
        'email' : ''
    }
}


export const AuthReducer = (state = initialState, action ) => {

    switch(action.type){
        case AuthConstants.REGISTER_SUCCESS:
            console.log('register success ');
            return {...state, isRegister: true}
        
        case  AuthConstants.REGISTER_FAILURE:
            console.log('register failure ');
            return {...state, isRegister: false}

        default:
            return state;

    }
   
}