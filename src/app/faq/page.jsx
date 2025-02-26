'use client'

import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function About() {
  return (
    <div>
      <Header />

      <section className="h-64 bg-[url(https://images.unsplash.com/photo-1707077865701-2854996afc4f)] bg-cover bg-center">
        <div className="w-full h-full backdrop-blur-[4px] flex items-center justify-center">
          <h1 className="text-6xl text-white font-bold">Frequently Asked Questions</h1>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 xl:px-0">
        <dl className="mt-8 mb-8 divide-y divide-gray-900/10">

          <div className="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8">
            <dt className="text-base/7 font-semibold text-gray-900 lg:col-span-5">How do I search for properties on Real Estate Listings?</dt>
            <dd className="mt-4 lg:col-span-7 lg:mt-0">
              <p className="text-base/7 text-gray-600">You can search for properties by using our advanced filters, property type (rental or for sale), number of bedrooms, and number of bathrooms.</p>
            </dd>
          </div>

          <div className="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8">
            <dt className="text-base/7 font-semibold text-gray-900 lg:col-span-5">Is it free to browse listings?</dt>
            <dd className="mt-4 lg:col-span-7 lg:mt-0">
              <p className="text-base/7 text-gray-600">Yes! Browsing listings on Real Estate Listings is completely free. You can view property details and images without any charges.</p>
            </dd>
          </div>

          <div className="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8">
            <dt className="text-base/7 font-semibold text-gray-900 lg:col-span-5">How do I list my property on your website?</dt>
            <dd className="mt-4 lg:col-span-7 lg:mt-0">
              <p className="text-base/7 text-gray-600">Listing is Easy! After signing up for an account, navigate to the dashboard, click "Add Unit", fill in the details, and press Add!</p>
            </dd>
          </div>

          <div className="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8">
            <dt className="text-base/7 font-semibold text-gray-900 lg:col-span-5">Are the listings verified?</dt>
            <dd className="mt-4 lg:col-span-7 lg:mt-0">
              <p className="text-base/7 text-gray-600">We strive to ensure all listings are accurate and up-to-date. However, we recommend doing your due diligence by verifying details with the property owner, visiting the location, and reviewing any necessary documents before making a decision.</p>
            </dd>
          </div>

          <div className="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8">
            <dt className="text-base/7 font-semibold text-gray-900 lg:col-span-5">What should I do if I find a fraudulent or inaccurate listing?</dt>
            <dd className="mt-4 lg:col-span-7 lg:mt-0">
              <p className="text-base/7 text-gray-600">Send an email to our support team at <span className='font-semibold'>ewalters37@ivytech.edu</span> and we will look into the property listing as soon as possible.</p>
            </dd>
          </div>
        </dl>
      </section>

      <Footer />
    </div>
  );
}