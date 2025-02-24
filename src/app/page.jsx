'use client'

import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Reviews from '@/components/Reviews';
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

export default function Home() {
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

    <Reviews />

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
