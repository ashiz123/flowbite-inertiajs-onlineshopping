
//custom hook

import { router, usePage } from '@inertiajs/react';
import {useState} from 'react'

export default function useCheckboxes(initialState) {
const [checkboxes, setCheckboxes] = useState(initialState)
const url = usePage().url;

const handleCheckboxChange = (event) => 
    {
        const {name, checked} = event.target;
        setCheckboxes((prevCheckboxes) => ({...prevCheckboxes, [name]: checked}));

    };


    return [checkboxes, handleCheckboxChange]
}
