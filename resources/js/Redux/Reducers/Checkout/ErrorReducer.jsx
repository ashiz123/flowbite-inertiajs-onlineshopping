const initialState = {
    formErrors : {

    }
}

export function ErrorReducer(state = initialState, action){
    switch(action.type)
    {
        case 'SET_FIELD_ERROR': 
        console.log('set field error');
        return;

        case 'CLEAR_FIELD_ERROR':
        console.log('clear field error');
        return;

         case 'CLEAR_ALL_ERRORS':
        console.log('clear all errors');

        default:
        return state;


    }

}

