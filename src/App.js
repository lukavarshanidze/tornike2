import "./App.css"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import bg from './assets/bg.jpeg'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Agordzineba from "./pages/Agordzineba";
import About from "./pages/About";
import { Contact } from "./pages/Contact";



function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/ერის-აღორძინება" element={<Agordzineba />}/>
          <Route path="/ჩვენ-შესახებ" element={<About />}/>
          <Route path="/კონტაქტი" element={<Contact />}/>
        </Routes>
        {/* <img src={bg}/> */}
        <></>
        {/* <Footer /> */}
      </Router>
    </div>
  )
}

export default App
