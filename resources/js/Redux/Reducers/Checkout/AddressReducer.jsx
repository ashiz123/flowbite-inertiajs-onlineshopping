const initialState = {
    'firstaddress': '',
    'housenumber' : '',
      'flatnumber': '',
       'city' : '',
      'reigion' : '',
      'postcode' : '',
      'country': ''
}

export function AddressReducer(state = initialState, action)
{
    switch(action.type){
        case 'ADD_ADDRESS': 
        console.log(action);
        return {...state, 
            ['firstaddress']: action.payload.address,
            ['housenumber']: action.payload.housenumber,
            ['flatnumber']: action.payload.flatnumber,
            ['city']: action.payload.city,
            ['reigion']: action.payload.reigion,
            ['postcode']: action.payload.postcode,
            ['country']: action.payload.country,

        };
        default:
            return state   
    }
}