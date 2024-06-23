import { features } from '../../constants'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Features = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <div className='relative mt-20 border-b border-neutral-700 min-h-[800px]'>
            <div data-aos="zoom-in" className="text-center">
                <span className='bg-neutral-700 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase'>Features</span>
                <h2 className='text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20'>Easily build <span className='bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent'>your code</span></h2>
            </div>
            <div className="flex flex-wrap mt-10 lg:mt-20">
                {features.map((feature, index) => (
                    <div data-aos="flip-up" data-aos-duration="1000" className="w-full sm:w-1/2 lg:w-1/3">
                        <div className="flex">
                            <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                                {feature.icon}
                            </div>
                            <div>
                                <h5 className='mt-1 mb-6 text-xl'>{feature.text}</h5>
                                <p className='text-md text-neutral-500 p-2 mb-20'>{feature.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Features
