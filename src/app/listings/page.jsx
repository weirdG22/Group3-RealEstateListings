'use client'

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Listing from '@/components/Listings';
import { useState } from 'react';

let units = [
  {
    type: 'sale',
    address: "123 Address Rd, Indianapolis, IN, 46227",
    beds: 1,
    baths: 1,
    sqft: 2520,
    status: "Active",
    price: 500000
  },
  {
    type: 'sale',
    address: "123 Address Rd, Indianapolis, IN, 46227",
    beds: 1,
    baths: 1,
    sqft: 2520,
    status: "Active",
    price: 500000
  },
  {
    type: 'rent',
    address: "123 Address Rd, Indianapolis, IN, 46227",
    beds: 1,
    baths: 1,
    sqft: 2520,
    status: "Active",
    price: 1000
  },
  {
    type: 'rent',
    address: "123 Address Rd, Indianapolis, IN, 46227",
    beds: 1,
    baths: 1,
    sqft: 2520,
    status: "Active",
    price: 2500
  },
  {
    type: 'sale',
    address: "123 Address Rd, Indianapolis, IN, 46227",
    beds: 1,
    baths: 1,
    sqft: 2520,
    status: "Active",
    price: 500000
  },
  {
    type: 'sale',
    address: "123 Address Rd, Indianapolis, IN, 46227",
    beds: 1,
    baths: 1,
    sqft: 2520,
    status: "Active",
    price: 500000
  },
  {
    type: 'sale',
    address: "123 Address Rd, Indianapolis, IN, 46227",
    beds: 1,
    baths: 1,
    sqft: 2520,
    status: "Active",
    price: 500000
  },
  {
    type: 'sale',
    address: "123 Address Rd, Indianapolis, IN, 46227",
    beds: 1,
    baths: 1,
    sqft: 2520,
    status: "Active",
    price: 500000
  },
  {
    type: 'rent',
    address: "123 Address Rd, Indianapolis, IN, 46227",
    beds: 1,
    baths: 1,
    sqft: 2520,
    status: "Active",
    price: 1500
  },
  {
    type: 'sale',
    address: "123 Address Rd, Indianapolis, IN, 46227",
    beds: 1,
    baths: 1,
    sqft: 2520,
    status: "Active",
    price: 500000
  },
]

export default function About() {
    const [typeOfUnit, setTypeOfUnit] = useState('all');
    const [bedrooms, setBedrooms] = useState(1);
    const [bathrooms, setBathrooms] = useState(1);

    return (
      <div>
        <Header />

        <section className='h-64 bg-[url(https://images.unsplash.com/photo-1524813686514-a57563d77965)] bg-cover'>
          <div className="w-full h-full backdrop-blur-[4px] flex items-center justify-center">
            <h1 className='text-6xl text-white font-bold'>Our Listings</h1>
          </div>
        </section>

        <section className='max-w-7xl mx-auto px-4 xl:px-0'>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[30%_30%_20%_20%] gap-4 mt-4 border-neutral-300 border-b-2 pb-2 text-neutral-800">
            <input type="text" placeholder='Search an Address' className='w-72 outline-none' />

            <div className="flex">
              <p className='pr-3 font-semibold'>Type of Unit:</p>
              <button className={typeOfUnit === 'all' ? "font-semibold bg-neutral-200 rounded px-3" : "px-3"} onClick={() => setTypeOfUnit('all')}>All</button>
              <button className={typeOfUnit === 'sale' ? "font-semibold bg-neutral-200 rounded px-3" : "px-3"} onClick={() => setTypeOfUnit('sale')}>For Sale</button>
              <button className={typeOfUnit === 'rent' ? "font-semibold bg-neutral-200 rounded px-3" : "px-3"} onClick={() => setTypeOfUnit('rent')}>For Rent</button>
            </div>

            <div className="flex">
              <p className='pr-3 font-semibold'>Bedrooms:</p>
              <button className={bedrooms === 1 ? "font-semibold bg-neutral-200 rounded px-3" : "px-3"} onClick={() => setBedrooms(1)}>1</button>
              <button className={bedrooms === 2 ? "font-semibold bg-neutral-200 rounded px-3" : "px-3"} onClick={() => setBedrooms(2)}>2</button>
              <button className={bedrooms === 3 ? "font-semibold bg-neutral-200 rounded px-3" : "px-3"} onClick={() => setBedrooms(3)}>3+</button>
            </div>

            <div className="flex">
            <p className='pr-3 font-semibold'>Bathrooms:</p>
              <button className={bathrooms === 1 ? "font-semibold bg-neutral-200 rounded px-3" : "px-3"} onClick={() => setBathrooms(1)}>1</button>
              <button className={bathrooms === 2 ? "font-semibold bg-neutral-200 rounded px-3" : "px-3"} onClick={() => setBathrooms(2)}>2</button>
              <button className={bathrooms === 3 ? "font-semibold bg-neutral-200 rounded px-3" : "px-3"} onClick={() => setBathrooms(3)}>3+</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-4 gap-8">

            {units.map((unit, index) => (
              <Listing key={index} unit={unit} />
            ))}

          </div>
        </section>

        <Footer />
      </div>
    );
}
  