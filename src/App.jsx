import Sidebar from './components/sidebar/Sidebar'
import Home from './components/home/Home'
import About from './components/about/About'
import Blog from './components/blog/Blog'
import Contact from './components/contact/Contact'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'
import Resume from './components/resume/Resume'
import Testimonials from './components/testimonials/Testimonials'
import './App.css'

function App() {

  return (
    <>
      <Sidebar></Sidebar>
      <div className="main">
        <Home></Home>
        <About></About>
        <Services></Services>
        <Resume></Resume>
        <Portfolio></Portfolio>
        <Testimonials></Testimonials>
        <Blog></Blog>
        <Contact></Contact>
      </div>
    </>
  )
}

export default App
