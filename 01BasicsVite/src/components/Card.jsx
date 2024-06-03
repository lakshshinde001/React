import React from 'react'

function Card({username="CHAI", post ="Not Assigneed Yet..."}) {
    // console.log(props);
  return (

    <div className=''>
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 w-96 h-96 mx-auto flex items-center justify-center">
    <div>
        <img className="w-24 h-24 rounded-full mx-auto" src="https://tailwindcss.com/_next/static/media/sarah-dayan.de9b3815.jpg" alt="" width="100" height="100"/>
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
                <p className="text-lg font-medium">
                    “Tailwind CSS is the only framework that I've seen scale
                    on large teams. It’s easy to customize, adapts to any design,
                    and the build size is tiny.”
                </p>
            </blockquote>
            <figcaption className="font-medium">
                <div className="text-sky-500 dark:text-sky-400">
                    {username}
                </div>
                <div className="dark:text-slate-500">
                    {post}
                </div>
            </figcaption>
        </div>
    </div>
</figure>


    </div>
  )
}

export default Card