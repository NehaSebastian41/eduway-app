import React, { useEffect, useState } from 'react'
import { Table } from "flowbite-react";
import { Link } from 'react-router-dom';

const ManageGroups = () => {
  const [allGroups,setAllGroups]=useState([]);
  useEffect( () => {
    fetch(`http://localhost:5000/all-groups/`)
       .then(res => res.json()).then(data => setAllGroups(data))
},[])

//delete group
const  handleDelete=(id) =>{
  // console.log(id);
  fetch(`http://localhost:5000/group/ ${id}`,{
    method: 'DELETE',
    
  }).then(res => res.json()).then(data =>
    {alert(" Group is Deleted")
      // setAllGroups(data);
    }
  )
}

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'> Manage Your  Group</h2>
   
    {/* table for group management */}
    <div class=" bg-blue drop-shadow-md dark:bg-black">
    <Table>
        <Table.Head>
        
          <Table.HeadCell>Group Name</Table.HeadCell>
          <Table.HeadCell>Description</Table.HeadCell>
          <Table.HeadCell>Department</Table.HeadCell>
          <Table.HeadCell>Edited Date</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit or Manage</span>
          </Table.HeadCell>
        </Table.Head>
        {
          allGroups.map((group,index) =>  <Table.Body className="divide-y" key={group._id} > 

           <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {group.groupName}
            </Table.Cell>
            <Table.Cell>{group.description}</Table.Cell>
            <Table.Cell>{group.department}</Table.Cell>
            <Table.Cell>{group.createdDate}</Table.Cell>
            <Table.Cell>
              <Link to={`/admin/dashboard/edit-group/ ${group._id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5">
                Edit
              </Link>
              <button onClick={() => handleDelete(group._id)} className='bg-red-500 px-4 py-1 font-se,ibold text-white rounded-sm hover:bg-sky-600'>Delete</button>
            </Table.Cell>
          </Table.Row>
           </Table.Body>)
        }


         
        
    </Table>
      </div>

    </div>
  )
}

export default ManageGroups
