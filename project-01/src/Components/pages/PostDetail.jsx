import React from 'react'
import {useParams} from "react-router-dom"


function PostDetail() {
    let {para}=useParams()
  return (
    <div>
        <h1 >Post Detail {para}</h1>
    </div>
  )
}

export default PostDetail