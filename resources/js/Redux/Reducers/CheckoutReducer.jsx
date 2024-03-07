import {combineReducers} from 'redux';

import {PersonalInformationReducer} from './Checkout/PersonalInformationReducer';
import {AddressReducer} from './Checkout/AddressReducer';
import {PaymentReducer} from './Checkout/PaymentReducer';


const CheckoutReducer = combineReducers({
    personal: PersonalInformationReducer,
    address : AddressReducer,
    payment: PaymentReducer
})

export default CheckoutReducer;