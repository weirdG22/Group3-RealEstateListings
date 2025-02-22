'use client'

//list of imports to different pages
const navigation = [
  { name: 'Listings', href: '/listings' },
  { name: 'About Us', href: '/about' },
  { name: 'Sign-Up', href: '/sign/login' },
  { name: 'Creating', href: '/create'},
  { name: 'Sign', href: '/signup'}
]

//list of imports that add to the page
import ListingTabs from '@/components/ListingsTabs';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { useState } from 'react';
import Options from '@/components/Options';




export default function More() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
    const [signUp, setSignUp] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Placeholder for login logic
        if (username && password) {
            setIsLoggedIn(true); // Set logged-in state
        }
    };

    return (
        <div className="">
            <div>
                <Navigation />
            </div>

            <div className="w-full my-20 flex justify-center">
            <div>
                {!isLoggedIn ? (
                    <div className='bg-[#cbc7ca] mt-30 w-[30rem] md:w-[60rem] rounded-xl p-5'>
                        <p className='md:text-5xl lg:text-6xl text-4xl ml-5 mb-10'>Login Info</p>
                        <form className='w-full self-center' onSubmit={handleLogin}>
                            <div className='flex flex-col items-center justify-center w-full '>
                                <input
                                    type="text"
                                    placeholder="Username"
                                    className="flex justify-center rounded-md w-[25rem] lg:w-[35rem] mb-4 p-2"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="flex justify-center rounded-md w-[25rem] lg:w-[35rem] mb-4 p-2"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <button
                                    type="submit"
                                    className="mt-2 p-2 bg-blue-400 hover:bg-blue-500 duration-150 w-[20rem] justify-center text-white rounded-md mb-20 md:mb-60"
                                >
                                    Login
                                </button>
                            </div>
                        </form>

                        <p className='md:text-center md:text-2xl'>Don't have an account? <a href="/signup" className="text-blue-500">Sign Up</a></p>
                    </div>
                ) : (
                    <div>
                        <p>Welcome back, {username}!</p>
                        {/* User profile information here */}
                        <button
                            onClick={() => setIsLoggedIn(false)} // Log out
                            className="mt-2 p-2 bg-red-500 text-white rounded-md"
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>
            </div>
            <Footer />
        </div>
    );
}