import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET( request: Request,{ params }: { params: { id: string } }) {
  const id = params.id;

  try {
    const restaurant = await prisma.restaurant.findUnique({
      where: {
        id: id,
      },
      include: {
        user: true,
        evaluations: {
          include: {
            user: true,
            restaurant: true,
          }
        }
      },
    });

    return NextResponse.json(restaurant);
  } catch (err) {
    return NextResponse.json(err);
  }
}