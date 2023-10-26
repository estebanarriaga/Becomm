import { cookies } from 'next/headers';

import { NextResponse } from 'next/server';
import prismadb from '@/lib/prismadb';
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  try {

    const body = await req.json();

    const {
      email,
      password,
      name,
      type,
    } = body;

		console.log(body)

    if (!email) {
      return new NextResponse("Email is required", { status: 400 });
    }

    if (!password) {
      return new NextResponse("Password is required", { status: 400 });
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    // TODO: Use a library like bcrypt to hash the password before saving
    const hashedPassword = password; // This is a placeholder. Replace with actual hashed value.

    const user = await prismadb.user.create({
      data: {
        email,
        hashedPassword: hashedPassword,
        name,
        type,
      },
    });

		// Generate a JWT for the user
    const token = jwt.sign({ userId: user.id, email: user.email }, "JWT_SECRET", {
      expiresIn: '7d', // Token will expire in 7 days
    });

    const response = NextResponse.json({ user, token });
    cookies().set('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development', // Secure in production
      sameSite: 'strict',
      path: '/',
      maxAge: 7 * 24 * 60 * 60, // 7 days
    });
    return response;
  } catch (error) {
    console.log('[USERS_POST]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};
