import { formatDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { Author, Startups } from '@/sanity/types'

export type StartupTypeCard = Omit<Startups, 'author'> & { author?: Author}

const StartupCard = ({ post }: StartupTypeCard) => {
   const { 
      _createdAt, 
      views, 
      author,
      _id, 
      description, 
      category, 
      image, 
      title 
   } = post

   return (
    <li className='startup-card group'>
      <div className='flex-between'>
         <p className='startup_card_date'>
            {formatDate(_createdAt)}
         </p>

         <div className='flex gap-1.5'>
            <EyeIcon className='size-6 text-primary'/>
            <span className='text-16-medium'>{views}</span>
         </div>
      </div>

      <div className='flex-between mt-5 gap-5'>
         <div className='flex-1'>
            <Link href={`/user/${author?._id}`}>
               <p className='text-16-medium line-clamp-1'>
                  {author?.name}
               </p>
            </Link>

            <Link href={`/startup/${_id}`}>
               <h3 className='text-26-semibold line-clamp-1'>
                  {title}
               </h3>
            </Link>
         </div>

         <Link href={`/user/${author?._id}`}>
            <Image 
               className='rounded-full'
               src={author.image}
               width={48}
               height={48}
               alt='User image'/>
         </Link>

      </div>

      <Link href={`/startup/${_id}`}>
         <p className='startup_card_desc'>
            {description}
         </p>
         <img src={image} alt={title} className='startup-card_img' />
      </Link>

      <div className='flex-between gap-3 mt-5'>
         <Link href={`/?query=${category?.toLowerCase()}`}>
            <p className='text-16-medium'>{category}</p>
         </Link>
         <Button className='startup-card_btn' asChild>
            <Link href={`/startup/${_id}`}>
               Details
            </Link>
         </Button>
      </div>
   </li>
  )
}

export default StartupCard