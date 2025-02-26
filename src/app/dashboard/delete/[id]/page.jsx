'use client'

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import * as React from "react";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'

export default function DeleteUnit({ params }) {
    const { id } = React.use(params);
    const router = useRouter();

    const [unit, setUnit] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const res = fetch(`/api/units/${id}`, { cache: "no-store" })
            .then((res) => res.json())
            .then(({ unit }) => {
                setUnit(unit);
                setLoading(false);
            });
    }, []);
    
    if (loading) return <p className="text-center">Loading...</p>
    if (!unit) return <p className="text-center">Unable to find specified unit.</p>

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const res = await fetch(`/api/units?id=${unit._id}`, {
                method: "DELETE"
            });

            if (res.ok) {
                router.push("/dashboard");
            } else {
                setError("Failed to delete unit. Please alert the site owner of this issue.");
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <Header />

            <section className="max-w-xl mx-auto px-4 xl:px-0 text-center border-[1px] border-neutral-200 bg-neutral-100 shadow-lg p-8 m-8 rounded-2xl">
                <h1 className="text-2xl font-semibold">Are you sure you want to delete this unit?</h1>
                <h3 className="text-lg py-8">{unit.address}</h3>
                <p className="text-center text-red-500">{error ?? error}</p>
                <form onSubmit={handleSubmit} className="py-2 px-6 bg-red-500 text-white font-semibold rounded inline-block">
                    <button type="submit">Delete</button>
                </form>
            </section>

            <Footer />
        </>
    )
}