import React from 'react'

const About = () => {
    return (
        <div className='text-white  container mx-auto'>
            <div>
                <span>
                <h1 className='text-4xl font-bold bg-gradient-to-r from-[#EB568E] to-[#144EE3] bg-clip-text text-transparent text-center'>About Linkly</h1></span>
                <div className=' bg-[#181E29] text-center flex flex-col p-5 text-2xl mt-10 mx-auto w-[90%] md:w-[70%] rounded-xl'>
                    <p className='bg-[#181E29] rounded-xl md:p-5 md:px-50'>At Linkly, we believe simplicity should power every connection. That is why we built a tool that transforms long, complicated URLs into short, memorable links you can easily share anywhere. Whether you are a marketer tracking campaigns, a content creator managing your bio links, or just someone tired of bulky URLs, Linkly has your back.
                    </p>
                    <p className='bg-[#181E29] rounded-xl md:p-5 md:px-50'>
                        With powerful analytics, customizable short links, and a clean, user-friendly dashboard, Linkly is more than just a URL shortener — its a smarter way to manage and share your online presence.
                        Fast. Reliable. Effortless. Thats the Linkly way.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default About