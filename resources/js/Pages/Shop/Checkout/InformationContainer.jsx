
'use client';

import { Accordion } from 'flowbite-react';
import Payment from './Payment';
import Address from './Address';
import PersonalInformation from './PersonalInformation';
import { connect} from 'react-redux';
import axios from 'axios';

function mapStateToProps(state)
{
   const {checkout} = state;
   return {
    payment : checkout.payment,
    personal: checkout.personal,
    address: checkout.address
   }
}



function InformationContainer(props) {


const onSubmitForm = async(e) =>
  {
    e.preventDefault();
    await axios.post('/shop/checkout/process',  {
      auth: props.personal,
      address: props.address,
      payment: props.payment
      })
      .then(response => {
          console.log('Order created:', response.data);
      })
      .catch(error => {
          console.error('Error creating order:', error);
      });
   
  }


  return (
    <form>
      {/* flowbite builtin accordion */}
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title>PERSONAL INFORMATION</Accordion.Title>
        <Accordion.Content>
          <PersonalInformation />
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>ADDRESS</Accordion.Title>
        <Accordion.Content>
          <Address />
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>PAYMENT</Accordion.Title>
        <Accordion.Content>
         <Payment />
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>


<br />
<div class="flex items-start mb-6">
<div class="flex items-center h-5">
<input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
</div>
<label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
</div>
<button type="submit" onClick={onSubmitForm} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Checkout</button>
</form>
  );
}

export default connect(mapStateToProps) (InformationContainer)
