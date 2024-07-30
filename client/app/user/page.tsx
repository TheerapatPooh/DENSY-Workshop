'use client'
import { DataTable } from '@/components/dynamic-table/data-table'
import React, { useEffect, useState } from 'react'
import { UserColumns } from './user-column'

async function GetAllUser() {
  const res = await fetch('http://localhost:5000/user')
  return res.json()
}
function Page() {
  const [data, setData ] = useState([])
  useEffect(() => {
    GetAllUser().then(userData => {
      setData(userData)
    })
  },[])
  
  return (
    <div className='p-3'>
      User Page
      <DataTable columns={UserColumns} data={data} />
    </div>
  )
}

export default Page