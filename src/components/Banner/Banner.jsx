import video1 from '../../assets/video1.mp4'
import video2 from '../../assets/video2.mp4'

const Banner = () => {
    return (
        <div id="banner" className="flex flex-col items-center mt-6 lg:mt-20">
            <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>VirtualR build tools <span className='bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent'>for developers</span></h1>
            <p className='mt-10 text-center text-neutral-500 text-lg max-w-4xl'>Empower your craetivity and bring your VR app ideas to life with our initiative development tools. Get started today and turn your imagination into impressive reality</p>
            <div id="banner-buttons" className='my-10 flex justify-center space-x-6'>
                <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>Start for free</a>
                <a href="#" className='py-2 px-3 border rounded-md'>Documentation</a>
            </div>
            <div id="videos" className='flex justify-center mt-10'>
                <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'><source src={video1} type='video/mp4' />Your browser doesn't support the video</video>
                <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'><source src={video2} type='video/mp4' />Your browser doesn't support the video</video>
            </div>
        </div>
    )
}

export default Banner
