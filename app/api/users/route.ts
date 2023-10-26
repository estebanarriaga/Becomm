import { NextResponse } from 'next/server';
import prismadb from '@/lib/prismadb';  // Assuming you've set up a Prisma client instance like this

export async function POST(req: Request) {
  try {

    const body = await req.json();

    const {
      email,
      password, // Note: Never store plain-text passwords. Always hash them before saving to the database.
      name,
      type,     // Either 'USER' or 'STREAMER'
    } = body;

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
        password: hashedPassword,
        name,
        type,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.log('[USERS_POST]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};
