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
            <div className='mx-[5rem]'>
                <form className='mt-[5rem]'>

                    <div>
                            <p>Enter your first and last name:</p>
                            <input
                            type="text"
                            placeholder='First name'
                            className=' rounded-xl border-2 border-black p-2 box-border align-middle self-center ' 
                        />

                            <input
                            type="text"
                            placeholder='Last name'
                            className='mx-2 rounded-xl border-2 border-black p-2 box-border align-middle self-center ' 
                        />
                    </div>

                    <div className='w-[100%]'>
                        <p className='w-[100%]' > Enter the address the property is located </p>

                        <input
                            type="text"
                            placeholder='Address...'
                            className='mr-2 rounded-xl border-2 border-black p-2 box-border align-middle self-center w-[30%]' 
                        />

                        <Options />

                        <input
                            onChange={C_H_I}
                            value={currentInput}
                            maxLength={5}
                            type="text"
                            placeholder='Zipcode'
                            className='mx-2 rounded-xl border-2 border-black p-2 box-border align-middle self-center w-[8rem] text-center' 
                        />
                    </div>

                    {/*Entereing in the number of beds and baths for the property */}
                    <div>
                        <p>Number of Beds</p>
                        <input
                            onChange={CurrentBeds}
                            maxLength={3}
                            value={currentBeds}
                            type="text"
                            placeholder=''
                            className='mr-2 rounded-xl border-2 border-black p-2 box-border align-middle text-center w-[3rem]' 
                        />
                        
                        <p>Number of Baths</p>
                        <input
                            onChange={CurrentBath}
                            value={currentBaths}
                            maxLength={3}
                            type="text"
                            placeholder=''
                            className='rounded-xl border-2 border-black p-2 box-border align-middle text-center  w-[3rem]' 
                        />
                    </div>


                    {/* Image panel where users can insert in different pictures "Maybe just 5 for rn" */}
                        <p>Enter in any pictures from your listing</p>

                        <div>
                            {/* Loop to display file inputs */}
                            <div>
                                {/* Initial input to add more */}
                                <input
                                type="file"
                                accept="image/*"
                                className="border p-2 mt-2"
                                onChange={inputImages}
                                />
                                
                                {/* Dynamically created inputs for each image */}
                                {image.map((_, index) => (
                                <input
                                    key={index}
                                    type="file"
                                    accept="image/*"
                                    className="border p-2 mt-2"
                                    onChange={inputImages}
                                />
                                ))}
                            </div>
                    </div>

                    <div>
                        <p>Enter a description for your property</p>
                        <textarea className='border-2 border-black box-border w-full h-[18rem] text-left resize-none' maxLength={5000} placeholder='Description...'></textarea>
                    </div>
                    

                    {/* Saving area for Submission */}
                    <div>
                        <input type='submit' className='border-2 border-black w-[50%] sm:max-w-[30%]'/>
                    </div>
                </form>
            </div>
        </div>
    )
}