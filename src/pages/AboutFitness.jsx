import React from 'react';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';

function AboutFitness() {
    return (
        <div className='relative top-20 w-full h-auto'>
            <div className='flex flex-col md:flex-row w-full h-full'>
                {/* Image Section */}
                <div className='flex justify-end items-center bg-orange-600 w-full md:w-1/2 relative'>
                    <img
                        src="https://radiustheme.com/demo/wordpress/gymedge/wp-content/uploads/2016/10/about-fitness-img.png"
                        alt=""
                        className='z-10 w-full md:w-auto'
                    />
                    <div className="rotate-45 h-52 w-52 absolute bg-orange-600 hidden md:block  "></div>
                </div>

                {/* Text Section */}
                <div className='w-full md:w-1/2 p-5 flex flex-col gap-10 justify-center items-center md:ml-5'>
                    <div>
                        <div className='flex items-center gap-4'>
                            <FitnessCenterIcon style={{ color: 'rgb(234, 88, 12)', fontSize: '40px', fontWeight: "900" }} />
                            <h1 className='font-bold text-2xl'>Weight Lifting</h1>
                        </div>
                        <div className='mt-3 text-lg font-normal text-gray-700'>
                            <p>Weightlifting, also called Olympic weightlifting, is an athletic discipline in the modern Olympic programme in which the athlete attempts a maximum-weight single lift of a barbell loaded with weight plates.</p>
                        </div>
                    </div>

                    <div>
                        <div className='flex items-center gap-4'>
                            <AccessibleForwardIcon style={{ color: 'rgb(234, 88, 12)', fontSize: '40px', fontWeight: "900" }} />
                            <h1 className='font-bold text-2xl'>Running</h1>
                        </div>
                        <div className='mt-3 text-lg font-normal text-gray-700'>
                            <p>Running is a method of terrestrial locomotion allowing humans and other animals to move rapidly on foot. Running is a type of gait characterized by an aerial phase in which all feet are off the ground.</p>
                        </div>
                    </div>

                    <div>
                        <div className='flex items-center gap-4'>
                            <SelfImprovementIcon style={{ color: 'rgb(234, 88, 12)', fontSize: '40px', fontWeight: "900" }} />
                            <h1 className='font-bold text-2xl'>Yoga</h1>
                        </div>
                        <div className='mt-3 text-lg font-normal text-gray-700'>
                            <p>Yoga, is a meditative means of discovering dysfunctional perception and cognition, as well as overcoming it for release from suffering, inner peace, and salvation.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutFitness;
