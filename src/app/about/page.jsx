"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function About() {
  return (
    <div>
      <Header />

      <section className="h-64 bg-[url(https://images.unsplash.com/photo-1597220141661-df3e77364fee)] bg-cover bg-center">
        <div className="w-full h-full backdrop-blur-[4px] flex items-center justify-center">
          <h1 className="text-6xl text-white font-bold">About Us</h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 xl:px-0 flex flex-col gap-6 mt-6 text-lg">
        <p>Welcome to Real Estate Listings, your trusted platform for finding the perfect place to call home. Whether you're searching for a rental unit, a new home to purchase, or an investment property, we make the process seamless and stress-free.</p>

        <p>Our platform connects renters, buyers, and property owners by offering a user-friendly experience with up-to-date listings, high-quality images, and detailed property information. With advanced search tools and personalized recommendations, we help you find the right space that fits your needs and budget.</p>

        <p>At Real Estate Listings, we believe that finding a home should be exciting, not overwhelming. That’s why we are committed to transparency, efficiency, and customer satisfaction. Whether you’re a first-time homebuyer, a landlord looking to list a property, or a tenant searching for your next rental, we are here to make your real estate journey as smooth as possible.</p>

        <p>Start exploring today and discover your next home with Real Estate Listings.</p>
      </section>

      <Footer />
    </div>
  );
}
