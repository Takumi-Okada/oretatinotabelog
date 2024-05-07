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