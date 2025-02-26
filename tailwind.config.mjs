import { Transition } from '@headlessui/react';
import { transform } from 'next/dist/build/swc/generated-native';
import { withUt } from "uploadthing/tw";

/** @type {import('tailwindcss').Config} */
export default withUt({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

        colors: {
          background: "var(--background)",
          foreground: "var(--foreground)",
        },
        keyframes: {
          fadding_Bottom: {
              '0%': { transform: 'translateY(4rem)', opacity: '0%' },
              '100%':{ transform: 'translateY(0rem)', opacity: '100%' },
          },
          textTransition: {
            '0%' : {opacity: '0'},
            '100%' : {opacity: '1'}
          },
        },
        animation: {
          fadding_Bottom: 'fadding_Bottom 1.2s ease-in-out',
          textTransition: 'textTransition 1.5s ease-in-out',
        },
    },
  },
  plugins: [],
});
