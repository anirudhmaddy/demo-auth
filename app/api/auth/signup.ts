import { NextRequest, NextResponse } from 'next/server';
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/db"; // Assuming you have this file to connect to MongoDB
import * as postmark from "postmark";

const postmarkClient = new postmark.ServerClient(process.env.POSTMARK_API_TOKEN!);

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db();

    // Check if user already exists
    const existingUser = await db.collection("users").findOne({ email });

    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    // Create new user using MongoDB Adapter
    const adapter = MongoDBAdapter(clientPromise);
    const newUser = await adapter.createUser({ email });

    if (!newUser) {
      return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
    }

    // Send verification email using Postmark
    const verificationToken = Math.random().toString(36).substring(2, 15);
    const verificationUrl = `${process.env.NEXTAUTH_URL}/api/auth/verify?token=${verificationToken}&email=${encodeURIComponent(email)}`;

    await postmarkClient.sendEmail({
      From: "anirudh@localhost.com",
      To: email,
      Subject: "Verify your email",
      TextBody: `Please verify your email by clicking this link: ${verificationUrl}`,
      HtmlBody: `<p>Please verify your email by clicking this link: <a href="${verificationUrl}">${verificationUrl}</a></p>`,
    });

    return NextResponse.json({ message: 'Verification email sent' }, { status: 200 });
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
