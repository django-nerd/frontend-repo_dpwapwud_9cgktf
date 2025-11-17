import Header from './components/Header'
import Hero from './components/Hero'
import Releases from './components/Releases'
import Artists from './components/Artists'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <Hero />
      <Releases />
      <Artists />
      <Footer />
    </div>
  )
}

export default App
