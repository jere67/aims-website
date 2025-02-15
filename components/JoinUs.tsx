import React from 'react'

const JoinUs = () => {
  return (
      <div className="w-full -mt-16 mb-32">
        <div className="h-full w-full dark:bg-black-100 bg-white absolute left-0 right-0">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
  
        <div className="py-12 relative z-10">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tight text-blue-michigan sm:text-4xl md:text-5xl mb-4">
              Want to Join <span className="text-yellow-maize">Us?</span>
            </h2>
            <p className='max-w-3xl text-xl text-center tracking-tight text-blue-michigan mb-16'>
              Are you a PhD student looking for postdoc? Undergrad looking to continue graduate school? MS student looking for PhD? This is what you need to know about us!
            </p>
          </div>
  
          <div className="px-4 md:px-6 max-w-7xl mx-auto">
            
          </div>
        </div>
      </div>
    );
}

export default JoinUs