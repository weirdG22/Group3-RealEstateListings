'use client'

import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { useState } from 'react';
import Timing from '@/components/Timer';
import { InboxIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Filters',
    description:
      'Find the home that best fits your needs (and wants). From rentals to home purchases, we have you covered.',
    href: '#',
    icon: InboxIcon,
  },
  {
    name: 'Verified Landlords',
    description:
      'Take out the guesswork with our verified landlords. For a unit to be rented on REL, the landlord needs to verify themselves in a regerous verification process to protect our clients.',
    href: '#',
    icon: UsersIcon,
  },
  {
    name: 'Real Agents',
    description:
      'Like our Verified Landlord program, out real estate agents are tested to ensure we give all of our clients the experiance they deserve.',
    href: '#',
    icon: TrashIcon,
  },
]


/*Make this a componet that can take differnt users that are
actually signed up to the website instead of premade */
const Users =[
  {
   username: 'William Reed',
   position: 'Property Owner',
   text: '"It helps me alot to get my different properties the advertisments thay need so I can sell quickly and efficiently!"',
   picture: 'https://images.unsplash.com/photo-1524854859347-bd2f42367134?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },

  {
    username: 'Diana Moore',
    position: 'Platform User',
    text: '"The process of finding a new home was incredibly easy and satisfying! My next home will absolutely be found here!"',
    picture: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },

  {
    username: 'Judith Black',
    position: 'Platform User',
    text: '"Very quick and helpful! This site has it all, From the ability to create listings easily to finding listings in different states easily!"',
    picture: 'https://images.unsplash.com/photo-1533736970669-7edc3f971be1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },

  {
    username: 'Jeff Riverstone',
    position: 'Property Owner',
    text: '"It saves so much time and energy. It allows people to see the house without having to drive and look around first!"',
    picture: 'https://images.unsplash.com/photo-1619169312864-c81168058d7a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },

  {
    username: 'Jessie Atler',
    position: 'Platform User',
    text: `"Wouldn't want to use anything else. This site is amazing and has everything I need!!!"`,
    picture: 'https://images.unsplash.com/photo-1592621385612-4d7129426394?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  }
]





export default function Home() {

  const [CurrentTime, setCurrentTime] = useState(0);
 // Update the user index when the timer changes
 const handleTimeUpdate = (newTime) => {
  setCurrentTime(newTime);  // Update the user index to show based on timer


};
  return (
    <div>
      <Hero />

      <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            The peace of mind of moving
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            Finding your dream home shouldn't be difficult. That's where Real Estate Listings comes in.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature,) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      </div>

      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-6 max-h-auto min-h-[2rem]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(90rem_20rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-right skew-x-[30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl flex flex-col justify-center items-center">
        <figure className="mt-10 leading-10">
          <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
            <p key={CurrentTime} className='animate-textTransition'>
              {Users[CurrentTime].text}
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              key={CurrentTime}
              alt=""
              src={Users[CurrentTime].picture}
              className="mx-auto size-10 rounded-full animate-textTransition"
            />

            <Timing cycleLength={Users.length} timeLength={5000} onTimeUpdate={handleTimeUpdate} />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
            
            <div key={Users[CurrentTime].username} className="font-semibold text-gray-900 animate-fadding_Bottom" >
              <span>{Users[CurrentTime].username}</span>
            </div>

              <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                <circle r={1} cx={1} cy={1} />
              </svg>

              <div key={CurrentTime} className="text-gray-600 animate-fadding_Bottom" >
                <span>{Users[CurrentTime].position}</span>
            </div>
            
            </div> 
    
          </figcaption>
        </figure>
      </div>
    </section>

    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <h2 className="max-w-2xl text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Stop the Hunt. Find your Dream Home today.
        </h2>
        <div className="mt-10 flex items-center gap-x-6">
          <a
            href="/listings"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get started
          </a>
          <a href="/about" className="text-sm/6 font-semibold text-gray-900">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>

      <Footer />

    </div>
  );
}
