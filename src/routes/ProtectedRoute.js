import React from 'react'
import { Redirect } from 'react-router-dom'


const ProtectedRoute = (props) => {
  console.log(props)
  if(props.user){
    return props.children
  }
  else{
    return <Redirect to="/signup"/>
  }
}

export default ProtectedRoute