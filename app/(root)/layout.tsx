import MobileNav from '@/components/shared/MobileNav'
import Sidebar from '@/components/shared/Sidebar'
import React from 'react'

const Layout=({children}:{children:React.ReactNode}) =>{
  return (
    <main className="flex min-h-screen w-full flex-col bg-white lg:flex-row">
      <Sidebar/>
      <MobileNav/>
      <div className="mt-16 flex-1 overflow-auto py-8 lg:mt-0 lg:max-h-screen lg:py-1">
        <div className='max-w-5xl mx-auto px-5 md:px-5 w-full text-dark-400 p-12s-regular'>
        {children}   
        </div>
      </div>
    </main>
  )
}

export default Layout