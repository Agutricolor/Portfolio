import React from 'react'
import './App.css'
import { Footer } from './components/Footer/Footer'
import { Navbar } from './components/Navbar/Navbar'

function App() {

  return (
    <div className="App h-screen bg-slate-900">
      <Navbar />
      <Footer />
    </div>
  )
}

export default App
