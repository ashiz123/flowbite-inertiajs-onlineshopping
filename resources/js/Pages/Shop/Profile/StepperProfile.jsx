
import React, { useState, useEffect } from 'react';

import Layout from '../Layout/Layout';

import Contact from './Contact';
import PaymentInfo from './PaymentInfo';
import Address from '../Checkout/Old checkoutfile/Address';

function Stepper() {
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    if(currentStep == 1)
    {
      console.log('address');
    }else if (currentStep == 2)
    {
      console.log('conatct');
    }else{
      console.log('payment');
    }
  })

  const handleNext = () => {
    setCurrentStep(prevStep => prevStep + 1);
   };

  const handleBack = () => {
    setCurrentStep(prevStep => prevStep - 1);
  };

  return (
    <Layout>
    <div className='ml-5 text-2xl'>
      <h2 className='text-green-500'>Step {currentStep}</h2>
      {currentStep === 1 && <Address />}
      {currentStep === 2 && <Contact />}
      {currentStep === 3 && <PaymentInfo />}
      <div>
        {currentStep > 1 && (
          <button type="button" onClick = {handleBack} className="  mt-5  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Back</button>
        )}
        {currentStep < 3 && (
        //   <button onClick={handleNext}>Next</button>
          <button type="button" onClick={handleNext} className=" mt-5  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Next</button>
        )}
      </div>
    </div>
    </Layout>
  );
}
export default Stepper;
