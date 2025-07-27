import Nav from './components/Nav.jsx'
import './App.css'
import AuroraBackgroundDemo from './components/header.jsx'
import Over from './components/Over.jsx'
import Spc from './components/spc.jsx'
import TimelineDemo from './components/time.jsx'
import Section from './components/section.jsx'
import Footer from './components/footer.jsx'

function App() {
  return (
    <div className='bg-gray-200'>
    <Nav/>
    <AuroraBackgroundDemo/>
    <Over/>
    <Spc/>
    <TimelineDemo/>
    <Section/>
    <Footer/>
      
    </div>
  )
}

export default App
