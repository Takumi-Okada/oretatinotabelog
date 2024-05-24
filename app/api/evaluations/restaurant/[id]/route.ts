import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET( request: Request,{ params }: { params: { id: string } }) {
  const id = params.id;

  try {
    const evaluations = await prisma.evaluation.findMany({
      where: {
        restaurantId: id,
      },
      include: {
        user: true,
      }
    });

    return NextResponse.json(evaluations);
  } catch (err) {
    return NextResponse.json(err);
  }
}

export const revalidate = 0;