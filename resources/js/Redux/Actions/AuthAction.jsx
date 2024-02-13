import { AuthConstants } from "../Constants/AuthConstants"

export function registerSuccess(payload)
{
    return {
        type: AuthConstants.REGISTER_SUCCESS,
        payload: payload
    }
}

export function registerFailure()
{
     return {
        type: AuthConstants.REGISTER_FAILURE,
        payload : ''
    }
}

export function loginSuccess(data)
{
    return {
        type: AuthConstants.LOGIN_SUCCESS,
        payload: data
    }
}

export function loginFailure()
{
    return {
        type: AuthConstants.LOGIN_FAILURE,
        payload: ''
    }
}

export function logoutSuccess()
{
    return {
        type: AuthConstants.LOGOUT_SUCCESS,
        payload: ''
    }
}

export function logoutFailure()
{
    return {
        type: AuthConstants.LOGOUT_FAILURE,
        payload: ''
    }
}

export function getAuth(data)
{
    console.log(data);
    return {
        type: AuthConstants.GET_LOGGEDIN_USER,
        payload: data
    }
}



