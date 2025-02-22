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

export default function About() {
    return (
      <div className='relative'>
          <Navigation />



          <Footer />
      </div>
    );
  }
  