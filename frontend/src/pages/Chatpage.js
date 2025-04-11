import React from 'react'
import axios from 'axios'

const Chatpage = () => {
    const fetchChats =async ()=>{
        const data = await axios.get('/api/chat')
    }


  return (
    <div>
      Welcome to the chat
    </div>
  )
}

export default Chatpage
