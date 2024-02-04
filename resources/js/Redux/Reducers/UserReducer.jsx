
const initialState = {
    'username' : '',
    'email' :  ''
 }


export function UserReducer(state = initialState, action)
{
    switch(action.type){
        case 'REGISTER_USER':
            return state + 1;
         case 'DECREMENT':
            return state - 1;
        default:
            return state   
    }
}