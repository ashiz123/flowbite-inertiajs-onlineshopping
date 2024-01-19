// import React, { useState, useReducer } from 'react'

// import { Button, Checkbox, Label, TextInput, Select } from 'flowbite-react';
// import { router, usePage } from '@inertiajs/react'; 

// import AppSidebar from '@/Layouts/AppSidebar';
// import Navigation from '@/Layouts/Navigation';
// import {Heading} from '@/Components/heading';
// import { ProductContext } from './ProductContext';



// export default function CreateAttribute({attributes, product}) {

//     const[variants, setVariants] = useState({})

    
    
    
//     function handleVariant(e)
//     {
//       const{name, checked} = e.target;
//       setVariants({...variants, [name] : checked})
      
//     }

//     function handleSubmit(e)
//     {
//         e.preventDefault();

//         const data = {
//             'variants': variants,
//             'product_id': product.id
//         }

//         router.post('/product/attribute/store', data);
//     }
   

    
//   return (
//     <>
      
//     <Navigation />
//     <div className="flex">
//       <AppSidebar />
//     <div className=" flex-1 p-7 ">
//       <Heading>Create Attribute</Heading>

//       <form onSubmit = {handleSubmit}>

//       <div className="flex-auto grid grid-rows-3 grid-flow-col  items-center">

//         {
//             attributes.map((attribute) => {
//                 return(
                    
//                     <>
//                         <div className="flex items-center gap-2">
//                             <Checkbox id={attribute} onChange = {handleVariant} name={attribute.id} checked ={variants[attribute.id]|| false}/>
//                             <Label className="flex"> {attribute.variant} </Label>
//                         </div>


//                     </>
//                 )
//             })
//         }
        
//         </div>

//         <Button type="submit" className='mt-10'>
//            Next ...Upload photos
//          </Button>
//          </form>
//       </div>
//       </div>
//       </>
//   )
// }
