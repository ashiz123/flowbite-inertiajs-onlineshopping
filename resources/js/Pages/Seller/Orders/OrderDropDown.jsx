'use client';

import React, { useState } from 'react'
import { Select } from 'flowbite-react';
import axios from 'axios';

export default function OrderDropDown({orderNumber, statuses, changeCurrentStatus, selectedStatusId}) {

    const [updateStatus, setUpdateStatus] = useState('')
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    
    
  function changeStatus(e)
   {
    
    const data = e.target.value;
    const fetchData = async () => {
        try {
          const response =  await axios.put(`/orders/status/update/${orderNumber}`,data)
          console.log(response.data);
          changeCurrentStatus(response.data);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };

      fetchData()
   }


  return (
  <form>
     <Select id="state" onChange={changeStatus} required>
        {
            statuses.map((status, i) => {
                return (
                    <option key={i} value={status.id}  selected= { status.id == selectedStatusId} >{status.title}  </option>
                )
            })
        }
      </Select>
      </form>
  )
}
