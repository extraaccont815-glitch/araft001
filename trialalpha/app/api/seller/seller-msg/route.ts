import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import SellerMsg from "@/models/SellerMsg";


export async function POST(req: NextRequest) {
    try {
        await connectToDatabase();
        const { email, sellerName, message } = await req.json();
        if (!email || !sellerName || !message) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 }

            )
        }
        const normalizedEmail = email.toLowerCase();
        const existingMsg = await SellerMsg.findOne({ email: normalizedEmail })
        if (existingMsg) {
            return NextResponse.json({ error: "A message is already sent from this email" }, { status: 400 }
            )
        }
        const existingUser = await User.findOne({ email: normalizedEmail,
            role: "seller" 
        });
        if (!existingUser) {
            return NextResponse.json(
                { error: "You are having an existing seller account" }, 
                { status: 400 } 
            )
    }
}