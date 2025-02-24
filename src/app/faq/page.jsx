'use client'

import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function About() {
  return (
    <div>
      <Header />

      <section className="h-64 bg-[url(https://images.unsplash.com/photo-1597220141661-df3e77364fee)] bg-cover bg-center">
        <div className="w-full h-full backdrop-blur-[4px] flex items-center justify-center">
          <h1 className="text-6xl text-white font-bold">Frequently Asked Questions</h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 xl:px-0">
        FAQ
      </section>

      <Footer />
    </div>
  );
}
  