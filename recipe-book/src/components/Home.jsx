import React from 'react'
import Navigation from './Navigation'

function Home() {
  return (
    <div>
        <Navigation />
        <section id="home" className="h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-4xl font-bold">Welcome to Home</h1>
      </section>
      <section id="about" className="h-screen bg-gray-200 flex items-center justify-center">
        <h1 className="text-4xl font-bold">About Us</h1>
      </section>
      <section id="contact" className="h-screen bg-gray-300 flex items-center justify-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
      </section>
        <h1>This is a home page</h1>
    </div>
  )
}

export default Home