import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function POST( request: Request ) {
  const { restaurantId, userId, cost, taste, service, atmosphere } = await request.json();

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });


    const restaurant = await prisma.restaurant.findUnique({
        where: {
          id: restaurantId,
        },
      });
  
    if (!user || !restaurant) {
      console.error('指定されたユーザーID、レストランIDが見つかりません');
      return;
    }
  
    const evaluation = await prisma.evaluation.create({
      data: {
        userId: user.id,
        restaurantId: restaurant.id,
        cost: cost,
        taste: taste,
        service: service,
        atmosphere: atmosphere
      },
    }); 
    return NextResponse.json(evaluation);
  } catch (err) {
    return NextResponse.json(err);
  }
}