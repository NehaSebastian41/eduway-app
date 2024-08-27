import React, { useEffect, useState } from 'react'
import Groupcard from '../components/Groupcard';

const Other = () => {
    const [group,setGroups]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/all-groups')
       .then(res=>res.json()).then(data => setGroups(data.slice(4,8)))
    },[])

  return (
    <div>
      <Groupcard group={group}headline=" Other Groups"/>
    </div>
  )
 
}

export default Other
