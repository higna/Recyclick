import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white-500 text-black py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Recyclick Africa. <br></br> All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer