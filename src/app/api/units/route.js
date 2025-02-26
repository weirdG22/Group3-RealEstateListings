import connectMongoDB from "@/libs/mongodb";
import Unit from "@/models/Units";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { type, address, imgUrl, beds, baths, sqft, status, price, posted, ownerId } = await req.json();

    await connectMongoDB();

    await Unit.create({ type, address, imgUrl, beds, baths, sqft, status, price, posted, ownerId });

    return NextResponse.json({ message: "Unit Added!"}, { status: 201 })
}

export async function GET() {
    await connectMongoDB();

    const units = await Unit.find();

    return NextResponse.json({ units });
}

export async function DELETE(req) {
    const id = req.nextUrl.searchParams.get('id');

    await connectMongoDB();

    await Unit.findByIdAndDelete(id);

    return NextResponse.json({ message: "Unit Deleted!" }, { status: 200 });
}