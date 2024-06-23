import { CheckCircle2 } from "lucide-react"
import codeImg from '../../assets/code.jpg'
import { checklistItems } from "../../constants"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Workflow = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <div id="workflow" className="mt-20">
            <h2 data-aos="zoom-out-up" className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">Accelerate Your <span className='bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent'>Coding flow</span></h2>
            <div className="flex flex-wrap justify-center mt-10 lg:mt-20">
                <div className="p-2 w-full lg:w-1/2">
                    <img data-aos="flip-left" src={codeImg} alt="Code Image" />
                </div>
                <div data-aos="fade-up"
                    data-aos-duration="3000" className="p-2 w-full lg:w-1/2">
                    {checklistItems.map((item, index) => (
                        <div className="flex mb-12" key={index}>
                            <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                                <CheckCircle2 />
                            </div>
                            <div className="">
                                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                                <p className="text-md text-neutral-500">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Workflow
