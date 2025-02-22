'use client'

//list of imports to different pages
const navigation = [
  { name: 'Listings', href: '/listings' },
  { name: 'About Us', href: '/about' },
  { name: 'Sign-Up', href: '/sign/login' },
  { name: 'Creating', href: '/create'},
]

//list of imports that add to the page
import ListingTabs from '@/components/ListingsTabs';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { useState } from 'react';
import Options from '@/components/Options';


export default function Sign() {
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const confirmSign = (e) => {
        e.preventDefault();
        console.log({ firstname, lastname, username, password });
        // You can add your API call here for sign-up.
    };

    return (
        <div>
            <div>
                <Navigation />
            </div>

            <div className="w-full my-20 flex justify-center">
            <div>
                <div className='bg-[#cbc7ca] mt-8 w-[30rem] md:w-[60rem] rounded-xl p-5'>
                    <p className='md:text-5xl lg:text-6xl text-4xl ml-5 mb-10'>Sign-Up Information</p>
                    <form className='w-full self-center' onSubmit={confirmSign}>
                        <div className='flex flex-col items-center justify-center w-full'>
                            <input
                                type="text"
                                placeholder="First Name"
                                className="flex justify-center rounded-md w-[25rem] lg:w-[35rem] mb-4 p-2"
                                value={firstname}
                                onChange={(e) => setfirstname(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="flex justify-center rounded-md w-[25rem] lg:w-[35rem] mb-4 p-2"
                                value={lastname}
                                onChange={(e) => setlastname(e.target.value)}
                                required
                            />
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
                                className="mt-2 p-2 bg-blue-400 hover:bg-blue-500 duration-150 w-[20rem] justify-center text-white rounded-md md:mb-60"
                            >
                                Sign-Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            
        </div>
        <Footer />
        </div>
    );
}
