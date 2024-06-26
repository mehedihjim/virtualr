import { CheckCircle2 } from "lucide-react"
import { features, pricingOptions } from './../../constants/index';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Pricing = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);
    return (
        <div id="pricing" className="mt-20">
            <h2 data-aos="zoom-out" className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">Pricing</h2>
            <div className="flex flex-wrap">
                {pricingOptions.map((option, index) => (
                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                        <div className="p-10 border border-neutral-700 rounded-xl">
                            <p className="text-4xl mb-8">
                                {option.title}
                                {option.title === "Pro" && <span className='bg-gradient-to-r from-orange-500 to-red-400 bg-clip-text text-transparent text-xl mb-4 ml-2'>     (Most Populer)</span>}
                            </p>
                            <p className="mb-8">
                                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                                <span className="text-neutral-400 tracking-tight">/Month</span>
                            </p>
                            <ul>
                                {option.features.map((features, index) => (
                                    <li key={index} className="mt-8 flex items-center">
                                        <CheckCircle2 />
                                        <span className="ml-2">{features}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href="#" className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking tight text-xl hover:bg-gradient-to-r from-orange-500 to-orange-900 transition duration-300 rounded-lg border border-orange-900">Subscribe</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Pricing
