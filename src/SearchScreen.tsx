import React from 'react'
import { useParams } from 'react-router-dom'

export const SearchScreen:React.FC = () => {
    const { id } = useParams()
  
    return (
    <div>SearchScreen {id} </div>
  )
}
