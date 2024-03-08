

const initialState = {
    'firstname' : 'ashiz',
    'lastname' : '',
    'email' : '',
    'phonenumber': ''
}

export const PersonalInformationReducer = (state = initialState, action) =>
{
    switch(action.type){
        case 'ADD_PERSONAL_DETAILS': 
        return {...state, 
        ['firstname']: action.payload.firstname,
        ['lastname'] : action.payload.lastname,
        ['email']: action.payload.email,
        ['phonenumber'] : action.payload.phonenumber
        };

        
        default:
            return state   
    }
}