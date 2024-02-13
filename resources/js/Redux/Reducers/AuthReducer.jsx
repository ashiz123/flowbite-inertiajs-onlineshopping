
import { AuthConstants } from "../Constants/AuthConstants";

const initialState = {
    isLoggedIn : false,
    user : { },
    error : null,
    loading: true
}


export const AuthReducer = (state = initialState, action ) => {

    switch(action.type){
        case AuthConstants.REGISTER_SUCCESS:
            console.log(action);
            return {...state, isLoggedIn: true, loading: false, user: action.payload.user}
        
        case  AuthConstants.REGISTER_FAILURE:
            console.log('register failure ');
            return {...state, isLoggedIn: false,loading: false,  user: {}}

            case AuthConstants.LOGIN_SUCCESS:
                console.log(action);
                return {...state, isLoggedIn: true, loading: false,  user: action.payload}

                case AuthConstants.LOGIN_FAILURE:
                    console.log(action);
                    return {...state, isLoggedIn: false, loading: false,  user: action.payload}

                    case AuthConstants.LOGOUT_SUCCESS:
                        return {...state, isLoggedIn: false, loading: false,  user: null, error:null};

                        case AuthConstants.LOGOUT_FAILURE:
                            return {...state, isLoggedIn: false, loading: false,  user: null, error:'logged out failed'};

                        case AuthConstants.GET_LOGGEDIN_USER:
                            console.log(action.payload)
                            return {...state, isLoggedIn: true,  user: action.payload, loading: false}

        default:
            return state;

    }
   
}