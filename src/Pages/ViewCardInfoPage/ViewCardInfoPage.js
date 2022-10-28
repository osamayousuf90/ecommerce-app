import React from 'react'
import { useParams } from 'react-router-dom'

const ViewCardInfoPage = () => {
    const { heading , paragraph , id , price} = useParams()
  return (
    <div>
          <h2>{heading}</h2>
          <p>{paragraph}</p>
          <span>{price}</span>
    </div>
  )
}

export default ViewCardInfoPage