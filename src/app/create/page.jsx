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


export default function CreateListings() {
    //The listings will need the name of the user as well as the properties address

    const [currentInput, setcurrentInput] = useState('');
    const [currentBeds, setcurrentBeds] = useState('');
    const [currentBaths, setcurrentBaths] = useState('');
    const [image, setimage] = useState([]);
 
    

    const C_H_I = (e) => {
        const input = e.target.value;

        //checking if the input is a number
        if (/^\d*$/.test(input)) {
            setcurrentInput(input)
        }
    }

    const CurrentBeds = (e) => {
        const input = e.target.value;

        //checking if the input is a number
        if (/^\d*$/.test(input)) {
            setcurrentBeds(input)
        } else if (input === '') {
            setcurrentBeds('')
        }
    }

    const CurrentBath = (e) => {
        const input = e.target.value;

        if (/^\d*$/.test(input)) {
            setcurrentBaths(input)
        } else if (input === '') {
            setcurrentBaths('')
        }
    }

    const inputImages = (e) => {
        const newInputs = [...image];

        if (e.target.files.length > 0) {
           const newFiles = Array.from(e.target.files);
           setimage((prevImage) => [...prevImage, ...newFiles])
        }
    }


    return(
        <div className=''>
            <Navigation />
            <div className='relative mt-20 h-[35rem] lg:h-[50rem] duration-100 w-full bg-cover bg-no-repeat bg-[url(https://images.unsplash.com/photo-1600585153490-76fb20a32601?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]'>
            <div className='absolute inset-0 bg-black bg-opacity-50'></div> {/* Dimmer background layer */}
            <p className='absolute bottom-0 left-0 text-white p-4 lg:text-6xl md:text-4xl text-xl'>Create a Listing for your property</p>
        </div>

            <div className='mx-5 my-3 p-5 bg-[#cbc7ca] rounded-xl'>
                <p className='text-4xl'>Complete the Form</p>
                <form className=''>
                    <div className=''>
                            {/* Since the user is already loggin the names should be prefilled */}
                            <div className=''>
                                <input
                                type="text"
                                placeholder='First name'
                                className='my-5 rounded-xl border-2 border-black p-2 box-border align-middle self-center ' 
                                required
                            />

                                <input
                                type="text"
                                placeholder='Last name'
                                className='justify-center mx-2 rounded-xl border-2 border-black p-2 box-border align-middle self-center ' 
                                required
                            />
                        </div>
                    </div>

                    <div className='w-[100%]'>
                        <div className='flex flex-col md:flex md:flex-row'>
                            <input
                                type="text"
                                placeholder='Address...'
                                className='mr-2 rounded-xl border-2 border-black p-2 box-border align-middle self-center w-full md:w-[30%]' 
                                required
                            />

                            <Options  />

                            <input
                                onChange={C_H_I}
                                value={currentInput}
                                maxLength={5}
                                type="text"
                                placeholder='Zipcode'
                                className='mx-2 rounded-xl border-2 border-black p-2 box-border align-middle self-center w-[8rem] text-center' 
                                required
                            />
                        </div>
                    </div>

                    {/*Entereing in the number of beds and baths for the property */}
                    <div>
                        <p className='text-2xl mt-5 mb-2'>Number of Beds</p>
                        <input
                            onChange={CurrentBeds}
                            maxLength={3}
                            value={currentBeds}
                            type="text"
                            placeholder=''
                            className='mr-2 rounded-xl border-2 border-black p-2 box-border align-middle text-center w-[3rem]' 
                            required
                        />
                        
                        <p className='text-2xl mb-2'>Number of Baths</p>
                        <input
                            onChange={CurrentBath}
                            value={currentBaths}
                            maxLength={3}
                            type="text"
                            placeholder=''
                            className='rounded-xl border-2 border-black p-2 box-border align-middle text-center  w-[3rem]' 
                            required
                        />
                    </div>


                    {/* Image panel where users can insert in different pictures "Maybe just 5 for rn" */}
                        <p className='text-2xl mt-2'>Enter in any pictures from your listing</p>

                        <div className='mb-10'>
                            {/* Loop to display file inputs */}
                            <div>
                                {/* Initial input to add more */}
                                <input
                                type="file"
                                accept="image/*"
                                className="border p-2 border-black mt-2"
                                onChange={inputImages}
                                required
                                />
                                
                                {/* Dynamically created inputs for each image */}
                                {image.map((_, index) => (
                                <input
                                    key={index}
                                    type="file"
                                    accept="image/*"
                                    className="border p-2 border-black mt-2"
                                    onChange={inputImages}
                                    required
                                />
                                ))}
                            </div>
                    </div>

                    <div className=''>
                        <p className='text-2xl'>Enter a description for your property</p>
                        <textarea className='border-2 border-black box-border w-full h-[18rem] text-left resize-none' maxLength={5000} placeholder='Description...'></textarea>
                    </div>
                    

                    {/* Saving area for Submission */}
                    <div>
                        <input type='submit' className='py-4 rounded-xl border-2 border-black w-[80%] lg:w-full hover:bg-[#060606] hover:text-white duration-150'/>
                    </div>
                </form>
            </div>
        </div>
    )
}
