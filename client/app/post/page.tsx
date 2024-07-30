'use client'
import { DataTable } from '@/components/dynamic-table/data-table'
import React, { useEffect, useState } from 'react'
import { PostColumns } from './post-column'
import { GetAllPost } from '@/api/post-api'
import { GetAllUser } from '@/api/user-api'

function Page() {
  const [data, setData ] = useState<Post[]>([])
  const [user, setUser] = useState<User[]>([])

  useEffect(() => {
    async function fetchData() {
      const postData = await GetAllPost()
      const userData = await GetAllUser()
      setUser(userData)

      const postView = postData.map(post => {
        const author = userData.find(user => user.id === post.authorId)
        return {...post, authorName: author ? author.name : 'Unknow'}
      })

      setData(postView)
    }
    fetchData()
  },[])

  return (
    <div className='p-3'>
      Post Page
      <DataTable columns={PostColumns} data={data} />
    </div>
  )
}

export default Page