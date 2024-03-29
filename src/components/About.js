import React from 'react';

export default function About() {
    return (
        <section id='about'>
            <div className='container mx-auto flex px-10 py-20 md:flex-row flex-col items-center'>
                <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
                    <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>
                        Hi, I'm <span className='text-violet-500'>Kari</span>.
                        <br className='hidden lg:inline-block' />  I love to build <span className='text-blue-500'>apps</span> that are helpful, fun, and easy to use.
                    </h1>
                    <p className='mb-8 leading-relaxed'>
                        Please take a look at my projects to see what I can do.  Contact me if you like what you see.
                    </p>
                    <div className='flex justify-center'>
                        <a
                            href='#contact'
                            className='inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg'
                        >
                            Work With Me
                        </a>
                        <a
                            href='#projects'
                            className='ml-4 inline-flex text-white bg-pink-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg'
                        >
                            See My Past Work
                        </a>
                    </div>
                </div>
                <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
                    <img 
                        className='object-cover object-center rounded'
                        alt='Kari profile'
                        src='../images/kari-coding.jpg'
                    />
                </div>
            </div>        
        </section>
    )
}