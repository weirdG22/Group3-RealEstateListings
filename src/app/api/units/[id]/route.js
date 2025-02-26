import connectMongoDB from "@/libs/mongodb";
import Unit from "@/models/Units";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
    const { id } = await params;

    const { type, address, imgUrl, beds, baths, sqft, status, price, posted } = await req.json();

    await connectMongoDB();

    await Unit.findByIdAndUpdate(id, { type, address, imgUrl, beds, baths, sqft, status, price, posted });

    return NextResponse.json({ message: "Unit Updated!" }, { status: 200 })
}

export async function GET(req, { params }) {
    const { id } = await params;

    await connectMongoDB();

    const unit = await Unit.findOne({_id: id});

    return NextResponse.json({ unit }, { status: 200 });
}