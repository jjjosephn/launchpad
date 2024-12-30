import React from 'react'
import Ping from './Ping'
import { client } from '@/sanity/lib/client'
import { STARTUP_VIEWS_QUERY } from '@/sanity/lib/queries'
import { writeClient } from '@/sanity/lib/write-client'
import { after } from 'next/server'

const View = async ({ id }: {id: string} ) => {
   const { views: totalViews } = await client
      .withConfig({ useCdn: false })
      .fetch(STARTUP_VIEWS_QUERY, { id })

   after(
      async() => await writeClient
      .patch(id)
      .set({ views: totalViews + 1 })
      .commit()
   )
      
   return (
      <div className='view-container'>
         <div className='absolute -top-1.5 -right-1.5'>
            <Ping />
         </div>

         <p className='view-text'>
            <span className='font-black'>{totalViews} {totalViews === 1 ? 'view' : 'views'}</span>
         </p>
      </div>
   )
}

export default View