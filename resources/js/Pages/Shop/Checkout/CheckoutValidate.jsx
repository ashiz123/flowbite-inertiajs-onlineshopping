

export const ValidateCheckout = (formData) => {
    console.log(formData);

    let newErrors = {}


    //Personal information
    if(formData.firstname.length === 0)
    {
        newErrors.firstname = 'Firstname required';
    } 
    if(formData.lastname.length === 0)
    {
        newErrors.lastname = 'Lastname  required';
    } 
    if(formData.phonenumber.length === 0)
    {
        newErrors.phonenumber = 'Phone number required';
    } 
    if(formData.email.length === 0)
    {
        newErrors.email = 'Email required';
    } 


    //Location
    if(formData.housenumber.length === 0)
    {
        newErrors.housenumber = 'House number required';
    } 
    // if(formData.flatnumber.length === 0)
    // {
    //     newErrors.flatnumber = 'Flat number required';
    // } 
    if(formData.city.length === 0)
    {
        newErrors.city = 'City required';
    } 
    if(formData.postcode.length === 0)
    {
        newErrors.postcode = 'Postcode required';
    } 
    if(formData.reigion.length === 0)
    {
        newErrors.reigion = 'Reigion/County required';
    } 
    if(formData.country.length === 0)
    {
        newErrors.country = 'Country required';
    } 
   

    //payment
    if(formData.cardnumber.length === 0)
    {
        newErrors.cardnumber = 'Card number required';
    } 
    if(formData.expiry.length === 0)
    {
        newErrors.expiry = 'Expiry required';
    } 
    if(formData.cvc.length === 0)
    {
        newErrors.cvc = 'CVC required';
    } 


    return newErrors;

    
}




export const ValidateOnChangeInputCheckout = (fieldName, value) => 
{
    let error = null;
    switch (fieldName) {

        //personal information
      case 'firstname':
        error = value.length < 3 ? 'Username must be at least 3 characters long' : '';
        return error
        


      case 'email':
        // Perform email validation (simplified)
        error = value.length < 3 ? 'Invalid email address' : '';
        return error
        
       
      case 'lastname':
        error = value.length < 3 ? 'lastname must be at least 3 characters long' : '';
        return error


        case 'phonenumber':
        error = value.length < 6 ? 'Phone number must be at least 6 character long' : '';
        return error;

        //location
        case 'housenumber':
        error = value.length <= 0 ? 'House number is required' : '';
        return error;

        case 'postcode':
        error = value.length <= 0 ? 'Post code is required' : '';
        return error;

        case 'reigion':
        error = value.length <= 0 ? 'Reigion/County  required' : '';
        return error;

        case 'country':
        error = value.length <= 0 ? 'Country is required' : '';
        return error;

        //payment
        case 'cardnumber':
        error = value.length <= 0 ? 'Card number required' : '';
        return error;

        case 'expiry':
        error = value.length <= 0 ? 'Expiry required' : '';
        return error;

        case 'cvc':
        error = value.length <= 0 ? 'CVC required' : '';
        return error;


        


      default:
        break;
    }

}
