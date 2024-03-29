import React from 'react';
import { CodeIcon } from '@heroicons/react/solid';
import { projects } from '../data';

export default function Projects() {
    return (
        <section id='projects'className='text-gray-400 bg-zinc-800 body-font'>
            <div className='container px-5 py-10 mx-auto text-center lg:px-40'>
                <div className='flex flex-col w-full mb-20'>
                    <CodeIcon className='mx-auto inline-block w-10 mb-4' />
                    <h1 className='sm:text-4xl text-3xl font-medium title-font mb-4 text-white'>
                        <span className='text-blue-500'>Apps</span> I've Built
                    </h1>
                    <p className='lg:w-2/3 mx-auto leading-relaxed text-base text-violet-300 mb-4'>
                        Take a look around in my portfolio to see my projects.  I'm sure you will find something you will like.
                    </p>
                    <p className='lg:w-2/3 mx-auto leading-relaxed text-base text-violet-300'>
                        Please also checkout my <a href='https://github.com/karicheslock' alt='Github portfolio for Kari' className='text-blue-500 hover:font-bold'>GitHub profile</a> and view my collection of repositories.  I have many projects in progress that will be published soon.
                    </p>
                </div>
                <div className='flex flex-wrap -m-4'>
                    {projects.map((projects) => (
                        <a
                            href={projects.link}
                            key={projects.image}
                            className='sm:w-1/3 w-100 p-4'
                        >
                            <div className='flex relative h-full'>
                                <img 
                                    alt='gallery'
                                    className='absolute inset-0 w-full h-full object-contain object-top'
                                    src={projects.image}
                                />
                                <div className='px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100'>
                                    <h2 className='tracking-widest text-sm title-font font-medium text-green-400 mb-1'>
                                        {projects.subtitle}
                                    </h2>
                                    <h1 className='title-font text-lg font-medium text-white mb-3'>
                                        {projects.title}
                                    </h1>
                                    <p className='leading-relaxed text-violet-300'>{projects.description}</p>
                                </div>   
                            </div>
                        </a>
                    ))}
                </div>   
            </div>
        </section>
    );
}