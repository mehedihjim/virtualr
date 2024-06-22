import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Features from './components/Features/Features'
import Workflow from './components/Workflow/Workflow'
import Pricing from './components/Pricing/Pricing'
import Testimonials from './components/Testimonial/Testimonials'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Banner />
        <Features />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </>
  )
}

export default App
