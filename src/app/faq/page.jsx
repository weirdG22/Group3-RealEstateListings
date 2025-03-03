'use client'

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useState } from 'react';



export default function About() {
  
  const [active, setactive] = useState({
    search: false,
    freeBrowse: false,
    listProp: false,
    verify: false,
    fraud: false,
  })
  const activeClick = (section) => {
    setactive((prevState) => ({
      [section]: !prevState[section],
    }))
  }


  return (
    <div>
      <Header />

      <section className="h-64 bg-[url(https://images.unsplash.com/photo-1707077865701-2854996afc4f)] bg-cover bg-center">
        <div className="w-full h-full backdrop-blur-[4px] flex items-center justify-center">
          <h1 className="text-6xl text-white font-bold">Frequently Asked Questions</h1>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 xl:px-0">
        <div className=''>

          <div>
              <div onClick={() => activeClick('search')} className='relative flex justify-between items-center mt-5 p-5 cursor-pointer text-xl md:text-3xl border-2 border-black bg-[#817a85] hover:bg-[#9c969f] leading-none overflow-hidden'>
                <h3 className=''>How do I search for properties on Real Estate Listings?</h3>
                <span className='absolute right-10 '>{active.search  ? '-' : '+'}</span>
              </div>

              <div className={`text-2xl max-h-0 overflow-hidden transition-all duration-300 ease-in-out ${active.search ? 'max-h-[500px]' : 'max-h-0'}`}>
                <p className='py-5'>You can search for properties by using our advanced filters, property type (rental or for sale), number of bedrooms, and number of bathrooms.</p>
              </div>
          </div>


          <div>
              <div onClick={() => activeClick('freeBrowse')} className='relative flex justify-between items-center p-5 cursor-pointer text-xl md:text-3xl border-2 border-black bg-[#817a85] hover:bg-[#9c969f]'>
                <h3>Is it free to browse listings?</h3>
                <span className='absolute right-10'>{active.freeBrowse ? '-' : '+'}</span>
              </div>
              
              <div className={`text-2xl max-h-0 overflow-hidden transition-all duration-300 ease-in-out ${active.freeBrowse ? 'max-h-[500px]' : 'max-h-0'}`}>
                <p className='py-5'>Yes! Browsing listings on Real Estate Listings is completely free. You can view property details and images without any charges.</p>
              </div>
          </div>

          <div>
              <div onClick={() => activeClick('listProp')} className='relative flex justify-between items-center p-5 cursor-pointer text-2xl md:text-3xl border-2 border-black bg-[#817a85] hover:bg-[#9c969f]'>
              <h3>How do I list my property on your website?</h3>
              <span className='absolute right-10 '>{active.listProp ? '-' : '+'}</span>
              </div>

              <div className={`text-2xl  max-h-0 overflow-hidden transition-all duration-300 ease-in-out ${active.listProp ? 'max-h-[500px]' : 'max-h-0'}`}>
                  <p className='py-5'>Listing is Easy! After signing up for an account, navigate to the dashboard, click "Add Unit", fill in the details, and press Add!</p>
              </div>
          </div>


          <div>
              <div onClick={() => activeClick('verify')}  className='relative flex justify-between items-center p-5 cursor-pointer text-xl md:text-3xl border-2 border-black bg-[#817a85] hover:bg-[#9c969f]'>
              <h3>Are the listings verified?</h3>
              <span className='absolute right-10 '>{active.verify ? '-' : '+'}</span>
              </div>

              <div className={`text-2xl  max-h-0 overflow-hidden transition-all duration-300 ease-in-out ${active.verify ? 'max-h-[500px]' : 'max-h-0'}`}>
                <p className='py-5'>We strive to ensure all listings are accurate and up-to-date. However, we recommend doing your due diligence by verifying details with the property owner, visiting the location, and reviewing any necessary documents before making a decision.</p>
              </div>
          </div>


          <div>
              <div onClick={() => activeClick('fraud')} className='relative flex justify-between items-center p-5 cursor-pointer text-xl md:text-3xl border-2 border-black bg-[#817a85] hover:bg-[#9c969f]'>
              <h3>What should I do if I find a fraudulent or inaccurate listing?</h3>
              <span className='absolute right-10 '>{active.fraud ? '-' : '+'}</span>
              </div>

              <div className={`text-2xl  max-h-0 overflow-hidden transition-all duration-300 ease-in-out ${active.fraud ? 'max-h-[500px]' : 'max-h-0'}`}>
                <p className='py-5'>Send an email to our support team at <span className='font-semibold'>ewalters37@ivytech.edu</span> and we will look into the property listing as soon as possible.</p>
              </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}