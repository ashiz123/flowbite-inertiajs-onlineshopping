import {combineReducers} from 'redux';

import {PersonalInformationReducer} from './Checkout/PersonalInformationReducer';
import {AddressReducer} from './Checkout/AddressReducer';
import {PaymentReducer} from './Checkout/PaymentReducer';
import {ErrorReducer} from './Checkout/ErrorReducer';


const CheckoutReducer = combineReducers({
    personal: PersonalInformationReducer,
    address : AddressReducer,
    payment: PaymentReducer,
    error: ErrorReducer
})

export default CheckoutReducer;