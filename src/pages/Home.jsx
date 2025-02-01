
import HeroSection from '../components/Hero'
import Features from '../components/Features'
import OurProcess from '../components/Process'
import Footer from '../components/Footer'


function Home() {
    return (
        <div className='w-full h-screen'>
            <HeroSection />
            <Features />
            <OurProcess />
            <Footer />
        </div>
    )
}

export default Home
