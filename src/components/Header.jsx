'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton, UserProfile } from '@clerk/nextjs'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">

        <div className="flex lg:flex-1 gap-12">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Real Estate Listings</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-blue-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
            </svg>
          </a>
          <a href="/" className="text-sm/6 font-semibold text-gray-900 py-1 hidden lg:block">
            Home
          </a>
          <a href="/listings" className="text-sm/6 font-semibold text-gray-900 py-1 hidden lg:block">
            Listings
          </a>
          <a href="/about" className="text-sm/6 font-semibold text-gray-900 py-1 hidden lg:block">
            About Us
          </a>
          <a href="/faq" className="text-sm/6 font-semibold text-gray-900 py-1 hidden lg:block">
            FAQ
          </a>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          <SignedIn>
            <a href="/dashboard" className="text-sm/6 font-semibold text-gray-900 py-1">
              Dashboard
            </a>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton className="text-sm/6 font-semibold text-gray-900" />
            <SignUpButton className="text-sm/6 font-semibold text-gray-100 bg-blue-500 py-1 px-3 rounded-lg" />
          </SignedOut>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Real Estate Listings</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-blue-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
            </svg>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a href="/" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                  Home
                </a>
                <a href="/listigns" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                  Listings
                </a>
                <a href="/about" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                  About Us
                </a>
                <a href="/faq" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                  FAQ
                </a>
                <SignedIn>
                  <a href="/dashboard" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Dashboard
                  </a>
                  <span className='-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50'>
                    <UserButton />
                  </span>
                </SignedIn>
                <SignedOut>
                  <SignInButton className="text-sm/6 font-semibold text-gray-900" />
                  <SignUpButton className="text-sm/6 font-semibold text-gray-100 bg-blue-500 py-1 px-3 rounded-lg" />
                </SignedOut>
              </div>
              <div className="py-6">
			     
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
