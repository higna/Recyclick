import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} RECYCLICK. All rights reserved.</p>
        <p>Follow us on social media!</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:underline">Facebook</a>
          <a href="#" className="hover:underline">Twitter</a>
          <a href="#" className="hover:underline">Instagram</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer