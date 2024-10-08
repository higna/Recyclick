import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
    // State variables to hold form data
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        // You can add your form submission logic here
        console.log('Form submitted:', { name, email, message });

        // Reset the form fields after submission
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div>
            <Navbar />
            <h1 className='text-4xl font-bold mt-10'>Contact Page</h1>
            <form className='mt-6 max-w-lg mx-auto' onSubmit={handleSubmit}>
                <div>
                    <label className='block mb-2 text-lg font-medium' htmlFor="name">Name:</label>
                    <input
                        className='border p-2 w-full'
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className='mt-4'>
                    <label className='block mb-2 text-lg font-medium' htmlFor="email">Email:</label>
                    <input
                        className='border p-2 w-full'
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className='mt-4'>
                    <label className='block mb-2 text-lg font-medium' htmlFor="message">Message:</label>
                    <textarea
                        className='border p-2 w-full'
                        id="message"
                        rows="4"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button className='mt-4 bg-blue-500 text-white py-2 px-4 rounded' type="submit">
                    Send Message
                </button>
            </form>
            <div className="justify-center">
                <p>Follow us on social media!</p>
            </div>
            <div className="flex justify-center space-x-4">
                <a href="#" className="hover:underline">Facebook</a>
                <a href="#" className="hover:underline">Twitter</a>
                <a href="#" className="hover:underline">Instagram</a>
            </div>
            <Footer />
        </div>

    );
};

export default Contact;
