import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET( request: Request ) {

  try {
    const evaluations = await prisma.evaluation.groupBy({
      by: ['restaurantId'],
      _avg: {
        cost: true,
        taste: true,
        atmosphere: true,
        service: true,
      },
    });
    return NextResponse.json(evaluations);
  } catch (err) {
    return NextResponse.json(err);
  }
}