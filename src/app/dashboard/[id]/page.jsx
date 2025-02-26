'use client'

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { useEffect, useState } from "react";
import * as React from "react";
import { useRouter } from 'next/navigation'
import { UploadButton } from "@uploadthing/react";
import { useAuth } from "@clerk/nextjs";

export default function EditUnits({ params }) {
    const { id } = React.use(params);
    const { userId: ownerId } = useAuth();
    const router = useRouter();

    const [unit, setUnit] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [address, setAddress] = useState("");
    const [beds, setBeds] = useState(1);
    const [baths, setBaths] = useState(1);
    const [sqft, setSqft] = useState(0);
    const [price, setPrice] = useState(0);
    const [status, setStatus] = useState("");
    const [textPosted, setPosted] = useState(false);
    const [type, setType] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    
    useEffect(() => {
        const res = fetch(`/api/units/${id}`, { cache: "no-store" })
            .then((res) => res.json())
            .then(({ unit }) => {
                setUnit(unit);

                setAddress(unit.address);
                setBeds(unit.beds);
                setBaths(unit.baths);
                setSqft(unit.sqft);
                setPrice(unit.price);
                setStatus(unit.status);
                setPosted(unit.posted ? "true" : "false");
                setType(unit.type);
                setImgUrl(unit.imgUrl);

                setLoading(false);
            });
    }, []);

    if (loading) return <p className="text-center">Loading...</p>
    if (!unit) return <p className="text-center">Unable to find specified unit.</p>

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!address || !beds || !baths || !sqft || !price || !status || !textPosted || !type || !imgUrl || !ownerId) {
            console.log(type, address, imgUrl, beds, baths, sqft, status, price, textPosted, ownerId)
            return setError("All fields must be filled out.")
        }

        let posted = (textPosted === "true" ? true : false);
        
        try {
            const res = await fetch(`/api/units/${unit._id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ type, address, imgUrl, beds, baths, sqft, status, price, posted, ownerId })
            });

            if (res.ok) {
                router.push("/dashboard");
            } else {
                setError("Failed to create new unit. Please alert the site owner of this issue.");
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <Header />

            <h1 className="text-4xl text-center font-bold mb-4">Edit a Unit</h1>
            <p className="text-center text-red-500">{error ?? error}</p>

            <section className="max-w-7xl mx-auto px-4 xl:px-0 grid lg:grid-cols-3 gap-8 *:p-2 justify-center items-center">
                <div className="grid gap-2 border-[1px] justify-center border-neutral-200 shadow-lg">
                    <p className="text-center">Unit Image:</p>
                    <img src={imgUrl} alt="Unit" className="rounded h-52" />
                    <UploadButton 
                        endpoint="imageUploader"
                        onClientUploadComplete={(res) => {
                          setImgUrl(res[0].ufsUrl);
                        }}
                        onUploadError={(error) => {
                          alert(`ERROR! ${error.message}`);
                        }}
                    />
                </div>
                <form className="lg:col-span-2 grid lg:grid-cols-3 gap-8" onSubmit={handleSubmit}>
                    <div className="lg:col-span-2">
                        <p>Address:</p>
                        <input className="border-[1px] border-neutral-200 p-2 w-full rounded" type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <div>
                        <p>Bedrooms:</p>
                        <input className="border-[1px] border-neutral-200 p-2 w-full rounded" type="number" min={1} placeholder="Bedrooms" value={beds} onChange={(e) => setBeds(e.target.value)} />
                    </div>
                    <div>
                        <p>Bathrooms:</p>
                        <input className="border-[1px] border-neutral-200 p-2 w-full rounded" type="number" min={1} placeholder="Bathrooms" value={baths} onChange={(e) => setBaths(e.target.value)} />
                    </div>
                    <div>
                        <p>Square Feet:</p>
                        <input className="border-[1px] border-neutral-200 p-2 w-full rounded" type="number" min={0} placeholder="Square Feet" value={sqft} onChange={(e) => setSqft(e.target.value)} />
                    </div>
                    <div>
                        <p>Price:</p>
                        <input className="border-[1px] border-neutral-200 p-2 w-full rounded" type="number" min={0} placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div>
                        <p>Status:</p>
                        <select className="p-2 border-[1px] border-neutral-200 w-full rounded" value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option value="Active">Active</option>
                            <option value="Pending">Pending</option>
                            <option value="Sold">Sold</option>
                        </select>
                    </div>
                    <div>
                        <p>Posted:</p>
                        <select className="p-2 border-[1px] border-neutral-200 w-full rounded" value={textPosted} onChange={(e) => setPosted(e.target.value)}>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </div>
                    <div>
                        <p>Type of Unit:</p>
                        <select className="p-2 border-[1px] border-neutral-200 w-full rounded" value={type} onChange={(e) => setType(e.target.value)}>
                            <option value="sale">For Sale</option>
                            <option value="rent">For Rent</option>
                        </select>
                    </div>
                    <div className="lg:col-span-3 mx-auto">
                        <button onClick={(e) => {e.preventDefault(); router.push("/dashboard/delete/" + unit._id);}} className="bg-red-600 hover:bg-red-700 text-white p-2 text-lg rounded-lg px-8 mr-12">Delete</button>
                        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white p-2 text-lg rounded-lg px-8">Update</button>
                    </div>
                </form>
            </section>

            <Footer />
        </>
    )
}