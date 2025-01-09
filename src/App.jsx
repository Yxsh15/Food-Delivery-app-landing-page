import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cards from './components/Cards'
import Foods from './components/Foods'
import Category from './components/Category'

//if you are using a style for a tag multiple times consider making it a global style to save time

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Cards/>
      <Foods/>
      <Category/>
    </div>
  )
}

export default App
