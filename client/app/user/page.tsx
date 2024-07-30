'use client'
import { DataTable } from '@/components/dynamic-table/data-table'
import React, { useEffect, useState } from 'react'
import { UserColumns } from './user-column'
import { Button } from '@/components/ui/button'
import { GetAllUser } from '@/api/user-api'
import { useRouter } from 'next/navigation'

function Page() {
  const router = useRouter()
  const [data, setData] = useState<any>([])
  useEffect(() => {
    async function fetchData() {
      const userData = await GetAllUser()
      setData(userData)
    }
    fetchData()
  }, [])

  return (
    <div className='p-3'>
      <div className="flex flex-row justify-between items-center w-full mb-4">
        User Page
        <Button variant={'default'} onClick={() => { router.push('/user/create') }}>Add User</Button>
      </div>
      <DataTable columns={UserColumns} data={data} />
    </div>
  )
}

export default Page