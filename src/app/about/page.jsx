"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Background from "@/components/AboutBackground";


export default function About() {
  return (
    <div>
      <Header />

      <section className="h-[35rem] lg:h-[45rem] bg-[black] bg-cover bg-center">
          <Background />
      </section>

      <section className="text-2xl mx-5">
        <h1 className="text-5xl flex justify-center my-9">Learn more about us</h1>

        <div className="relative grid grid-cols-2 gap-5 border-2 mx-3 ">
            <p className="p-5 text-sm sm:text-xl md:text-2xl lg:text-3xl overflow-hidden text-ellipsis">Welcome to Real Estate Listings, your trusted platform for finding the perfect place to call home. Whether you're searching for a rental unit, a new home to purchase, or an investment property, we make the process seamless and stress-free.</p>

            <img className="h-full  w-full object-cover" src="https://images.unsplash.com/photo-1573496774426-fe3db3dd1731?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>

        <p className="my-10">At Real Estate Listings, we believe that finding a home should be exciting, not overwhelming. That’s why we are committed to transparency, efficiency, and customer satisfaction. Whether you’re a first-time homebuyer, a landlord looking to list a property, or a tenant searching for your next rental, we are here to make your real estate journey as smooth as possible.</p>

        <section className="relative bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover mx-5 h-[15rem] text-xl text-center text-white mt-5 rounded-lg">
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
            <div className="h-full w-full backdrop-blur-[2px] flex items-center">
                <p className="">Our platform connects renters, buyers, and property owners by offering a user-friendly experience with up-to-date listings, high-quality images, and detailed property information. With advanced search tools and personalized recommendations, we help you find the right space that fits your needs and budget.</p>
            </div>
        </section>

        <p className="mt-5">Start exploring today and discover your next home with Real Estate Listings. If you have more questions. please refer to our <a href="/faq" className="cursor-pointer text-red-500 hover:text-red-400 underline underline-offset-3">F.A.Q Page</a></p>
      </section>

      <Footer />
    </div>
  );
}
