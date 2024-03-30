export function extractUniqueColor(variants){

    const uniqueColors = [];
  
  
    //extracting unique color
    variants.forEach(variant => {
      if(!uniqueColors.includes(variant.color)){
        uniqueColors.push(variant.color);
      }
    })
  

    return uniqueColors;
   }  
  
   //Extracting unique size
   export function extractUniqueSize(variants)
   {
     const uniqueSize = [];
  
     variants.forEach(variant => {
      if(!uniqueSize.includes(variant.size)){
        uniqueSize.push(variant.size)
      }
     })
  
     
     return uniqueSize;
   }

//to get color by color name
   export function getColor(name)
   {
 
     let color = ''  


     switch(name){
       case 'purple':
         color = 'bg-purple-700'
         console.log('purple test');
        break;
        
       case 'black':
         color = 'bg-black'
         break;
 
       case 'green':
        color = 'bg-green-700'
        break;
       
       case 'yellow':
        color = 'bg-yellow-300'
        break;


        case 'blue':
        color = 'bg-blue-600'
        break;
 
      
 
       default:
         color = 'bg-white'
 
     }
 
     return color;
   }