import React from 'react'

function BeingBody() {
    return (
        <div className='mt-20 w-full p-5 pt-10'>
            <div className='flex h-auto sm:h-96 w-full justify-center z-50 relative '>
                <div className='absolute lg:relative z-10'>
                    <img
                        src="https://radiustheme.com/demo/wordpress/gymedge/wp-content/uploads/2016/10/being-builder.png"
                        alt=""
                        className='h-full w-full object-cover'
                    />
                </div>
                <div className='relative z-20 text-center'>
                    <h1 className='text-4xl sm:text-6xl md:text-8xl font-semibold mt-32 text-black'>
                        BEING <span className='text-orange-600'>BODY</span>
                    </h1>
                    <h1 className='text-3xl sm:text-4xl md:text-6xl text-gray-300 tracking-[20px] sm:tracking-[30px] md:tracking-[40px] mt-5'>
                        BUILDERS
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default BeingBody
