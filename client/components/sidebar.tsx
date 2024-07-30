'use client'
import React from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

function SideBar() {
  const router = useRouter()
  return (
    <div className='h-screen bg-red-200 w-[250px] flex flex-col items-center p-4'>
      <Button variant={'ghost'} className='w-full m-2' onClick={() => router.push('/')}>
        <h1>Logo</h1>
      </Button>
      <Button variant={'secondary'} className='w-full m-2' onClick={() => router.push('/user')}>
        <span className="material-symbols-outlined">
          person
        </span>
        User
      </Button>
      <Button variant={'secondary'} className='w-full m-2' onClick={() => router.push('/profile')}>
        <span className="material-symbols-outlined me-3">
          badge
        </span>
        Profile
      </Button>
      <Button variant={'secondary'} className='w-full m-2' onClick={() => router.push('/post')}>
        <span className="material-symbols-outlined me-3">
          widgets
        </span>
        Post
      </Button>
    </div>
  )
}

export default SideBar