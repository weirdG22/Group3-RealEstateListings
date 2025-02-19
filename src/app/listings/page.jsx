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

export default function Listings() {
    return (
      <div>
        <Navigation />
       
        {/* */}
          <div className='relative'>
            <div className='mt-20 bg-[#7a7eb1] w-[100vw] lg:h-[30rem] mi:h-[25rem] sm:h-[20rem] py-24'>

              {/*Where the map logic will be located. Will get rid of the bg when 
              adding the pictures */}

            </div>
          </div>


          <div className='py-10 px-5 flex md:py-5 md:px-4 sm:px-2'>


              <div className='px-5 flex-3 relative'>
                <h1 className='text-center text-3xl lg:text-5xl'>Filters</h1>
                {filters.map((filters, index) => {
                  return <div className='flex my-8  cursor-pointer'>
                             <p className='sm:py-10 bg:py-6 font-semibold bg-blue-100 hover:bg-blue-200 transition-colors duration-150 rounded-full w-full text-center self-center' key={index}>{filters.option}</p>
                        </div>
                })}
              </div>

              
              <div className='flex'>
                <div className='text-lg items-center'>
                <input
                  type="text"
                  placeholder="Enter your location..."
                  className="mb-5 md:mb-0 sm:mb-0 rounded-xl border-2 border-black p-2 box-border align-middle self-center w-full text-base sm:w-[45%] sm:text-xs md:w-[55%] md:text-base lg:w-[65%] lg:text-lg"
                />

                <a href='/create' className='md:mt-5 md:ml-5 border-2 border-black rounded-xl p-2 hover:bg-[#8e9094] duration-150'>Add Listing</a>

                {/*Where the listings will be located at
                when creating a tab allow the user to set up the timezone */}
                  <div>  
                  </div>
                  
                </div>
            </div>
          


          </div>
          <Footer />
      </div>
     
    );
  }
  