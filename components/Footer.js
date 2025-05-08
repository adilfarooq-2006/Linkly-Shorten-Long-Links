import React from 'react'
import Script from 'next/script'

const Footer = () => {
    return (
        <div className='fixed bottom-0 bg-gray-900 w-full text-white flex flex-col justify-center items-center'>
            <div className="logo font-bold text-4xl bg-gradient-to-r from-[#EB568E] to-[#144EE3] bg-clip-text text-transparent">
                Linkly
            </div>
            <div className='flex justify-center items-center text-sm'>
                Made with
                <lord-icon
                    src="https://cdn.lordicon.com/rqfqhnxq.json"
                    trigger="hover"
                    stroke="light"
                    colors="primary:#121331,secondary:#f28ba8,tertiary:#ffc738,quaternary:#f9c9c0,quinary:#e83a30,senary:#ebe6ef"
                >
                </lord-icon>by Adil Farooq
            </div>
            <Script
                src="https://cdn.lordicon.com/lordicon.js"
                strategy="lazyOnload"
            />
        </div>
    )
}

export default Footer