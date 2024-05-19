import React from 'react'
import PropTypes from 'prop-types';

export default function ImageComponent({path, classes}) {


  return (
     <img src={path}  alt="iMac Front Image" className= {classes} />
  )
}
