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
import CreateListings from '../create/page';
import dynamic from 'next/dynamic';
import { useState } from 'react';



//Filter option
const filters = [
  {
    option : 'New Listings',
  },
  {
    option : 'Dated Listings',
  },
  {
    option : 'Clientele',
  },
]




const ListingsMap = dynamic(() => import('@/components/Map'), { ssr: false }); // For importing the map
export default function Listings() {

    const [inputValue, setInputValue] = useState(''); // to store input value
    const [searchedAddress, setSearchedAddress] = useState('');

    // Function that will use the input value
    const searchLocation = () => {
      setSearchedAddress(inputValue); // setting searched address
    };

    // Handle input changes
    const changeText = (e) => {
      setInputValue(e.target.value);
    };

    return (
      <div>
        <Navigation />
       
        {/* */}
          <div className='relative z-25'>
            <div className='mt-20  w-[100vw] lg:h-[30rem] mi:h-[25rem] sm:h-[20rem]'>
                <ListingsMap searchedAddress={searchedAddress} />
            </div>
          </div>


          <div className='my-5'> {/* Keep this part in mind!!! */}


          <div className=''>

            <div className='flex self-center'>
                
                  <input
                    value={inputValue}
                    onChange={changeText}
                    type="text"
                    placeholder="Enter your location..."
                    className=" ml-2 rounded-xl border-2 border-black box-border align-middle text-base w-[50%] py-2"
                  />
                  <p onClick={searchLocation} className=' ml-2 border-2 border-black rounded-xl hover:bg-[#8e9094] duration-150 w-35 px-3 py-2 text-center align-center cursor-pointer'>
                    Search
                  </p>
                  <a href='/create' className=' ml-2 border-2 border-black rounded-xl hover:bg-[#8e9094] duration-150 w-35 px-3 py-2 text-center align-center'>
                    Add Listing
                  </a>
              </div>

              <div className='w-full text-center  flex'>
                 {filters.map((filter, index) => {
              return (
                <div className='cursor-pointer py-3 px-6 my-3 ml-2 mx-3 bg-blue-100 hover:bg-blue-200 rounded-xl border-2 duration-150'>
                  <p className=''  key={index}>
                    {filter.option}
                  </p>
                </div>
              );
            })}
            </div>


                {/*Where the listings will be located at
                when creating a tab allow the user to set up the timezone */}
                <div className='max-h-[34rem] overflow-y-scroll overflow-hidden mx-8 my-3'>
                  <div className='lg:grid-cols-4 md:grid grid-cols-3 grid-cols-2 gap-3 w-full h-[40rem] sm:mx-2 mx-5'>
                    <div className='bg-black'>item 1</div>
                    <div className='bg-white'>item 2</div>
                    <div className='bg-black'>item 3</div>
                    <div className='bg-white'>item 4</div>
                    <div className='bg-black'>item 5</div>
                    <div className='bg-white'>item 6</div>
                    <div className='bg-black'>item 7</div>
                    <div className='bg-white'>item 8</div>
                    <div className='bg-black'>item 9</div>
                </div> 
                </div>
            </div>
          


          </div>
          <Footer />
      </div>
     
    );
}
  
