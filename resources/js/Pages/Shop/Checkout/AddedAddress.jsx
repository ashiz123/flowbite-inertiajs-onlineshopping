import React from 'react'
import { connect } from 'react-redux'
import { usePage } from '@inertiajs/react';


function mapStateToProps(state) {


    const { checkout } = state
    return { 
     address : checkout.address,
     }
  }

 function AddedAddress(props) {

 

return (
  <div class="flex mt-5 mb-10">
  <div class="flex items-center h-5">
      <input id="helper-radio" aria-describedby="helper-radio-text" type="radio" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
  </div>
  <div class="ms-2 text-sm">
      <label for="helper-radio" class="font-medium text-gray-900 dark:text-gray-300">{props.address.housenumber}</label>
      <p id="helper-radio-text" class="text-xs font-normal text-gray-500 dark:text-gray-300">{props.address.postcode}</p>
      <p id="helper-radio-text" class="text-xs font-normal text-gray-500 dark:text-gray-300">{props.address.city}</p>
      <p id="helper-radio-text" class="text-xs font-normal text-gray-500 dark:text-gray-300">{props.address.reigion}</p>
      <p id="helper-radio-text" class="text-xs font-normal text-gray-500 dark:text-gray-300">{props.address.country}</p>
  </div>
</div> 
  )


}

export default connect(mapStateToProps)(AddedAddress)