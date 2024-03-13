import React from 'react'

function Layout({children}:{children:React.ReactNode}) {
  return (
    <div className='flex justify-center p-8  min-h-screen w-full bg-purple-100'>
        {children}
    </div>
  )
}

export default Layout