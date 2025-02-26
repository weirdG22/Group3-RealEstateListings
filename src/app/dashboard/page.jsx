"use client";

import DashboardListings from "@/components/DashboardListings";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function About() {
  return (
    <div>
      <Header />

      <section className="max-w-7xl mx-auto px-4 xl:px-0">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-base font-semibold text-gray-900">Units</h1>
              <p className="mt-2 text-sm text-gray-700">
                A list of all the units in your account including their address, beds, baths, and sqft.
              </p>
            </div>
            <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
              <a
                href="/dashboard/add"
                className="transition block rounded-md bg-blue-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Add unit
              </a>
            </div>
          </div>
          <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                
                <DashboardListings />

              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
