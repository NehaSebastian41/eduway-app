import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, Textarea, TextInput } from "flowbite-react";

const UploadGroup = () => {
  const GroupDepartments =[
   
    "Commerce",
    "Computer Science",
    "Zoology",
    "Botony",
    "Physics",
    "Chemistry",
    "Biotechnology",
    "Mathematics",
    "Economics",
    "English",
    "Malayalam",
    "Business"
  ]

  const [selectedGroupDepartment, setSelectedGroupDepartment] = useState(GroupDepartments[0]);
const handleChangeSelectedGroupDepartmentvalue =(event) =>{
  console.log(event.target.value);
  setSelectedGroupDepartment(event.target.value);
}


//handle group submission
const handleGroupSubmission =(event) =>{
  event.preventDefault();
  const form = event.target;

  const groupName = form.groupName.value;
  const description= form.description.value;
  const imgUrl= form.imgUrl.value;
  const department= form.department.value;
  const groupPdfUrl= form.groupPdfUrl.value;
  const createdBy= form.createdBy.value;
  const createdDate= form.createdDate.value;

  const groupObj ={
    groupName,
    description,
    imgUrl,
    department,
    groupPdfUrl,
    createdBy,
    createdDate
  }

  console.log(groupObj)

  //send data to db

  fetch("http://localhost:5000/upload-group", {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',

    },
    body: JSON.stringify(groupObj)
    
  }).then(res => res.json()).then(data =>{
    // console.log(data)
    alert("Group uploaded successfully")
    form.reset();
  })

 
}
  return (
  
  
      <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'> Upload A Group</h2>
      <form onSubmit={handleGroupSubmission} className="flex lg:w-[1000px] flex-col gap-4">
       
       {/* first row */}
        <div className='flex gap-8'>
        {/* group name */}
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="groupName" value="Group Name" />
        </div>
        <TextInput id="groupName"  name='groupName'  type="text" placeholder="Enter your group name" required />
      </div>

     {/* department */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="inputState" value="Department" />
        </div>
       <Select id='inputState' name='department' className='w-full rounded' value={selectedGroupDepartment}
       onChange={ handleChangeSelectedGroupDepartmentvalue} required>
          {
          GroupDepartments.map((option) => <option key={option} value={option}>{option}</option>)
          }
       </Select>
      </div>

        </div>
      
      

      {/* 2nd Row*/}
      <div className='flex gap-8'>
       {/* Created By */}

      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="createdBy" value="Created By" />
        </div>
        <TextInput id="createdBy"  name='createdBy'  type="text" placeholder="Enter Creator Name"  />
      </div>

      {/* image */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imgUrl" value="img Url" />
        </div>
        <TextInput id="imgUrl"  name='imgUrl'  type="text" placeholder="Give imgUrl" />
      </div>


       </div>

         {/* 3rd Row*/}
      <div className='flex gap-8'>
       {/* Created on */}

      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="createdDate" value="created Date" />
        </div>
        <TextInput id="createdDate"  name='createdDate'  type="date" placeholder="Enter Creation Date"  />
      </div>

      {/* group pdf url */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="groupPdfUrl" value="Group Materials Pdf Url" />
        </div>
        <TextInput id="groupPdfUrl"  name='groupPdfUrl'  type="text" placeholder="Provide Materials" required/>
      </div>


       </div>


       {/* 4th  row */}
         {/* Description */}

      
        <div className="mb-2 block">
          <Label htmlFor="description" value="Description" />
        </div>
        <Textarea id="description"  name='description'  type="text" placeholder="Enter the description" required rows={4} />
   
 

     
     
  
       <Button className='bg-blue-600 lg:w-1/2' type="submit">Upload Group</Button>
    </form>
      
    </div>
  )
}

export default UploadGroup
