import React from 'react'

const Contact = () => {
  return (
    <div className=' text-white'>
    <div className='flex flex-col justify-center items-center w-full container mx-auto'>
        <h1 className='text-4xl font-bold pt-8 bg-gradient-to-r from-[#EB568E] to-[#144EE3] bg-clip-text text-transparent'>Contact Us</h1>
        <div className="inputs flex gap-2 flex-col justify-center items-center mt-5">
            <form  className='flex gap-2 flex-col w-85 max-w-md'>
                <label className='text-neutral-400' htmlFor="name">Name:</label>
                <input name="user_name" className='bg-gray-700 p-2 rounded-lg' type="text" placeholder='Enter your full name' required />

                <label className='text-neutral-400' htmlFor="email">Email:</label>
                <input name="user_email" className='bg-gray-700 p-2 rounded-lg' type="email" placeholder='Enter your email' required />

                <label className='text-neutral-400' htmlFor="subject">Subject:</label>
                <input name="subject" className='bg-gray-700 p-2 rounded-lg' type="text" placeholder='Enter the subject' required />

                <label className='text-neutral-400' htmlFor="message">Message:</label>
                <textarea
                    name="message"
                    className='bg-gray-700 p-2 rounded-lg h-40 resize-none'
                    placeholder='Enter your message'
                    required
                ></textarea>

                <button type="submit" className='bg-[#144EE3] hover:bg-[#144fe3b3] p-2 rounded-lg'>Submit</button>
            </form>
        </div>
    </div>
</div>
  )
}

export default Contact