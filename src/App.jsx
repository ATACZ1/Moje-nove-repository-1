import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Amenities from './components/Amenities'
import Rooms from './components/Rooms'
import Restaurant from './components/Restaurant'
import Surroundings from './components/Surroundings'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Amenities />
      <Rooms />
      <Restaurant />
      <Surroundings />
      <Contact />
      <Footer />
    </div>
  )
}
