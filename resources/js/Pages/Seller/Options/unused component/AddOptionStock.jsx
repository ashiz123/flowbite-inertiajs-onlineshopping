newOptions.map((option, i) => {
    return(
      <div className="flex flex-nowrap gap-3 m-5 p-5" key={i}>
       {
            imagePreview[i] ?
            <img src={imagePreview[i]} className='w-20 h-20 rounded-full mx-auto cursor-pointer' style = {{marginTop: "-15px"}} /> 
            : 
            <img className='w-20 h-20 rounded-full mx-auto cursor-pointer' style = {{marginTop: "-15px"}} src= "/storage/images/placeholder1.png" onClick = {handleClickImage}/>
          }
      <TextInput type="file" accept="images/*" style={{ display: 'none' }} placeholder='image' name='avatar'  onChange={(e) =>handleFileChange(e, i)} ref={fileInputRef}></TextInput>
      <div > <TextInput placeholder='Enter title' name='title' value={option.title} onChange={(e) => handleInputChange(e, i)}></TextInput></div>
      <div> <TextInput placeholder='SKU' name='sku' value={option.sku} onChange={(e) => handleInputChange(e, i)}></TextInput></div>
      <div> <TextInput placeholder='Size' name='size' value={option.size} onChange={(e) => handleInputChange(e, i)}></TextInput></div>
      <div> <TextInput placeholder='Color' name='color' value={option.color}  onChange={(e) => handleInputChange(e, i)}></TextInput></div>
      <div> <TextInput placeholder='Origin' name='origin' value={option.origin} onChange={(e) => handleInputChange(e, i)}></TextInput></div>
      <div> <TextInput placeholder='Type' name='type' value={option.type} onChange={(e) => handleInputChange(e, i)}></TextInput></div>
      <div> <TextInput placeholder='Quantity' name='quantity' value={option.quantity}  onChange={(e) => handleInputChange(e, i)}></TextInput></div>
      <div> <TextInput placeholder='Price' name='price' value={option.price} onChange={(e) => handleInputChange(e, i)}></TextInput></div>
      <div>  <Button  color="failure" >Remove</Button></div>
      </div>
    )
  })