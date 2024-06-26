import { useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import './App.css'

import Header from './components/Header';
import Default from "./components/Default";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Footer from './components/Footer';

function App() {
  const [currView, setCurrView] = useState('default');

  function handleChangeView(view){
    setCurrView(view);
  }

  return (
    <>
      <Header onChange={handleChangeView} />
      <AnimatePresence>
        {currView==='default' && <Default />}
        {currView==='resume' && <Resume />}
        {currView==='portfolio' && <Portfolio />}
        <Footer />
      </AnimatePresence> 
    </>
  )
}

export default App
