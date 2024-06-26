import React, {useEffect, useState, useContext} from 'react'
import Layout from './Layout/Layout'
import axios from 'axios';
import { extractUniqueColor, extractUniqueSize, validateVariant } from './ProductOverviewFunction';
import ProductByColor from './ProductByColor';
import ProductBySize from './ProductBySize';
import CartContext from './Contexts/CartContext';
import { usePage } from '@inertiajs/react';
import SuccessAlert from '../../Components/SuccessAlert';


export default function ProductOverview({product}) {

  console.log(usePage().props);

 const imagePath = '/storage/' + product.photos[0].path

 const extractColors = extractUniqueColor(product.variants); // ProductOverViewFunction
 const extractSizes = extractUniqueSize(product.variants);

 const[currentSizes, setCurrentSizes ] = useState(extractSizes);
 const[currentColors, setCurrentColors ] = useState(extractColors);
 const[itemAdded, setItemAdded] = useState(false);

 const[variant, setVariant] = useState({
  'color' : '',
  'size' : '',
  'product_id': product.id
 })

 //here is the context
 const { updateToCart } = useContext(CartContext);// adding data to context to display the quantity of cart in navbar

 const[isValid, setIsValid] = useState(false);
 const [variantError, setVariantError] = useState({})






 useEffect(() => {

 const{valid, errors} = validateVariant(variant);
 setVariantError(errors);
 setIsValid(valid);
 
}, [variant])



function onAddVariant(key, value)
 {
  
  setVariant(prevVariant => ({
    ...prevVariant,
    [key]: value
  }));
 
}


function getSizesByColor(sizes)
 {
    setCurrentSizes(sizes.data.sizes);
 }

 function getColorsBySize(colors)
 {
    setCurrentColors(colors.data.colors)
 }

 

 
const addItemToCart = async(e) =>
  {
    e.preventDefault();
    if(product.variant)
    {
       if(isValid)
       {
          fetchVariantByAttribute();
        }
        else{
          console.log('not validate');
       }
    }
    
    else
    {
        fetchAddItemToCart()
    }
    }



    //function use for both variant and product
    const fetchAddItemToCart =async(productVariant = null) =>
    {
     
      try{
        await axios.post('/shop/add-item-to-cart', {product, productVariant} )
        .then(function(response){
         updateToCart(response.data); //sending data to context 
         setItemAdded(true);
        //  window.location.reload(false);
        })}
        catch(error)
        {
          console.error(error.message);
        }
    }



    //function for variant only
    const fetchVariantByAttribute = async() => {
      await axios.post('/shop/get-variant-by-attribute/', variant)
     .then(
       function(response){
        fetchAddItemToCart(response.data)
        console.log(response.data);
         
       })
     .catch(function(error){
       console.log(error);
     })
   }



   



  return (
    <Layout class = "m-4"> 
    
  <div class="bg-white">
    <div class="pt-6">
      <nav aria-label="Breadcrumb">
        <ol role="list" class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          
          <li>
            <div class="flex items-center">
              <a href="#" class="mr-2 text-sm font-medium text-gray-900">{product.category.title}</a>
              <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" class="h-5 w-4 text-gray-300">
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>
  
          <li class="text-sm">
            <a href="#" aria-current="page" class="font-medium text-gray-500 hover:text-gray-600">{product.title}</a>
          </li>
        </ol>
      </nav>
  
      {/* <!-- Image gallery --> */}
      <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
        <div class="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
          <img src={imagePath}  alt="Model wearing plain white basic tee." class="h-full w-full object-cover object-center" />
        </div>
      </div>
  
      {/* <!-- Product info --> */}
      <div class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
        <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.title}</h1>
        </div>
  
        {/* <!-- Options --> */}
        <div class="mt-4 lg:row-span-3 lg:mt-0">
          <h2 class="sr-only">{product.title}</h2>
          <p class="text-3xl tracking-tight text-gray-900">£{product.minimum_price}</p>
  
          {/* <!-- Reviews --> */}
          <div class="mt-6">
            <h3 class="sr-only">Reviews</h3>
            <div class="flex items-center">
              <div class="flex items-center">
                {/* <!-- Active: "text-gray-900", Default: "text-gray-200" --> */}
                <svg class="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                </svg>
                <svg class="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                </svg>
                <svg class="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                </svg>
                <svg class="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                </svg>
                <svg class="text-gray-200 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                </svg>
              </div>
              <p class="sr-only">4 out of 5 stars</p>
              <a href="#" class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reviews</a>
            </div>
          </div>
  

        {product.variant ? 
          <form class="mt-10" >
            {/* <!-- Colors --> */}
            <div>
              <h3 class="text-sm font-medium text-gray-900">Color</h3>
  
              <fieldset class="mt-4">
                <legend class="sr-only">Choose a color</legend>
                <div class="flex items-center space-x-3">
                  {/* <!--
                    Active and Checked: "ring ring-offset-1"
                    Not Active and Checked: "ring-2"
                  --> */}
                  {
                    product.variants && currentColors.map((color, i) => {
                      return (<ProductByColor key={i} color= {color} getSizesByColor={getSizesByColor} productId = {product.id} addVariant={onAddVariant}/>)
                    }) 
                  }
                  
                  
                  
                </div>
              </fieldset>
              {
                variantError.color && <span className='text-red-600 text-sm'> Product have color variant. Required color</span>
              }
              {
                variant.color && <span> Selected : {variant.color} </span>
              }
            </div>
  
            {/* <!-- Sizes --> */}
            <div class="mt-10">
              <div class="flex items-center justify-between">
                <h3 class="text-sm font-medium text-gray-900">Size</h3>
                <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</a>
              </div>
  
              <fieldset class="mt-4">
                <legend class="sr-only">Choose a size</legend>
                <div class="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                  {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
                  {/* <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-not-allowed bg-gray-50 text-gray-200">
                    <input type="radio" name="size-choice" value="XXS" disabled class="sr-only" aria-labelledby="size-choice-0-label" />
                    <span id="size-choice-0-label">XXS</span>
                    <span aria-hidden="true" class="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
                      <svg class="absolute inset-0 h-full w-full stroke-2 text-gray-200" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                        <line x1="0" y1="100" x2="100" y2="0" vectorEffect="non-scaling-stroke" />
                      </svg>
                    </span>
                  </label> */}
                  {/* <!-- Active: "ring-2 ring-indigo-500" --> */}


                  {
                    product.variants && currentSizes.map((size, i) => {
                      return (
                       <ProductBySize key={i} size = {size} colorsBySize={getColorsBySize} productId={product.id} addVariant={onAddVariant}/>
                      )
                    })
                  }
                 
                 
                         


                 
                </div>
              </fieldset>
              {
                variantError.size && <span  className='text-red-600 text-sm'> Product have size variant. Required size</span>
              }
              {
                variant.size && <span> Selected : {variant.size} </span>
              }
            </div>

 
            <br />
              {
                itemAdded &&
                <SuccessAlert>Item Addded Successfully</SuccessAlert>
              }
  
            <button type="submit" onClick={addItemToCart} class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add to bag</button>
          </form>
          :  
          <>
          <br /><br />
           No variations found
           <br /><br />
           {
                itemAdded &&
                <SuccessAlert>Item Addded Successfully</SuccessAlert>
            }
          <button type="submit" onClick={addItemToCart} class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add to bag</button>
          </>
           
          }
        </div>
  
        <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
          {/* <!-- Description and details --> */}
          <div>
            <h3 class="sr-only">Description</h3>
  
            <div class="space-y-6">
              <p class="text-base text-gray-900">The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: &quot;Black&quot;. Need to add an extra pop of color to your outfit? Our white tee has you covered.</p>
            </div>
          </div>
  
          <div class="mt-10">
            <h3 class="text-sm font-medium text-gray-900">Highlights</h3>
  
            <div class="mt-4">
              <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
                <li class="text-gray-400"><span class="text-gray-600">Hand cut and sewn locally</span></li>
                <li class="text-gray-400"><span class="text-gray-600">Dyed with our proprietary colors</span></li>
                <li class="text-gray-400"><span class="text-gray-600">Pre-washed &amp; pre-shrunk</span></li>
                <li class="text-gray-400"><span class="text-gray-600">Ultra-soft 100% cotton</span></li>
              </ul>
            </div>
          </div>
  
          <div class="mt-10">
            <h2 class="text-sm font-medium text-gray-900">Details</h2>
  
            <div class="mt-4 space-y-6">
              <p class="text-sm text-gray-600">{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </Layout>
  )
}
