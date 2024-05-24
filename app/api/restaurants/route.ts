import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const restaurants = await prisma.restaurant.findMany();
    return NextResponse.json(restaurants);
  } catch (err) {
    return NextResponse.json(err);
  }
}

export async function POST( request: Request ) {
  const { userId, genre, name, url } = await request.json();

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
  
    if (!user ) {
      console.error('指定されたユーザーIDが見つかりません');
      return;
    }
  
    const restaurant = await prisma.restaurant.create({
      data: {
        userId: user.id,
        genre: genre,
        name: name,
        url: url,
      },
    }); 
    return NextResponse.json(restaurant);
  } catch (err) {
    return NextResponse.json(err);
  }
}