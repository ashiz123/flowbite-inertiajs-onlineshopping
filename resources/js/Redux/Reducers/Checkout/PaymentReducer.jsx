const initialState = {
    'cardnumber' : '',
    'expiry' : '', 
    'cvc' : ''
}

export function PaymentReducer(state = initialState, action) 
{
    switch(action.type){
        case 'ADD_PAYMENT_DETAIL': 
        console.log(action.payload);
        return {...state,
        ['cardnumber']: action.payload.cardnumber,
        ['expiry']: action.payload.expiry,
        ['cvc']: action.payload.cvc
        };


        default:
            return state   
    }
}