'use client'
import React, { useState } from 'react'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import MDEditor from '@uiw/react-md-editor'
import { Button } from './ui/button'
import { Send } from 'lucide-react'


const StartupForm = () => {
   const [ errors, setErrors ] = useState<Record<string,string>>({})
   const [ pitch, setPitch ] = useState()
   const isPending = false

   return (
      <form action={() => {}} className='startup-form'>
         <div>
            <label htmlFor='title' className='startup-form_label'>Title</label>
            <Input 
               className='startup-form_input' 
               id='title' 
               name='title' 
               required
               placeholder='Startup Title'
            />

            {errors.title && <p className='startup-form_error'>{errors.title}</p>}
         </div>

         <div>
            <label htmlFor='description' className='startup-form_label'>Description</label>
            <Textarea 
               className='startup-form_textarea' 
               id='description' 
               name='description' 
               required
               placeholder='Startup Description'
            />

            {errors.description && <p className='startup-form_error'>{errors.description}</p>}
         </div>

         <div>
            <label htmlFor='category' className='startup-form_label'>Category</label>
            <Input 
               className='startup-form_input' 
               id='category' 
               name='category' 
               required
               placeholder='Startup Category'
            />

            {errors.category && <p className='startup-form_error'>{errors.category}</p>}
         </div>

         <div>
            <label htmlFor='link' className='startup-form_label'>Image URL</label>
            <Input 
               className='startup-form_input' 
               id='link' 
               name='link' 
               required
               placeholder='Startup Image URL'
            />

            {errors.link && <p className='startup-form_error'>{errors.link}</p>}
         </div>

         <div data-color-mode='light'>
            <label htmlFor='pitch' className='startup-form_label'>Pitch</label>
            <MDEditor
               value={pitch}
               onChange={(value) => setPitch(value as string)}
               id="pitch"
               preview="edit" 
               height={300}
               style={{ borderRadius: 20, overflow: 'hidden' }}
               textareaProps={{
                  placeholder: 'Describe the idea that you want to bring to life'
               }}
               previewOptions={{
                  disallowedElements: ['style']
               }}
            />

            {errors.pitch && <p className='startup-form_error'>{errors.pitch}</p>}
         </div>
         
         <Button 
            type='submit' 
            className='startup-form_btn text-white'
            disabled={isPending}
         >
            {isPending ? 'Submitting Startup...' : 'Submit Startup'}
            <Send className='size-8 ml-2' />
         </Button>
      </form>
   )
}

export default StartupForm