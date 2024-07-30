'use client'
import { DataTable } from '@/components/dynamic-table/data-table'
import React, { useEffect, useState } from 'react'
import { ProfileColumns } from './profile-column'
import { GetAllProfile } from '@/api/profile-api'
import { GetAllUser } from '@/api/user-api'


function Page() {
  const [data, setData ] = useState<any[]>([])
  const [user, setUser ] = useState<User[]>([])
  useEffect(() => {
    async function fetchData() {
      const profileData = await GetAllProfile()
      const userData = await GetAllUser()
      setUser(userData)

      const profileView = profileData.map(profile => {
        const userName = userData.find(user => user.id === profile.userId)
        return {...profile, userId: userName ? userName.name : 'Unknow'}
      }) 

      setData(profileView)
    }
    fetchData()
  },[])
  
  return (
    <div className='p-3'>
      Profile Page
      <DataTable columns={ProfileColumns} data={data} />
    </div>
  )
}

export default Page