import React, { useEffect, useState } from 'react'
import Groupcard from '../components/Groupcard';

const Saved = () => {
    const [group,setGroups]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/all-groups')
       .then(res=>res.json()).then(data => setGroups(data.slice(0,5)))
    },[])
  return (
    <div>
      <Groupcard group={group}headline=" Best Groups"/>
    </div>
  )
}

export default Saved
