import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

//https://nextjs.org/docs/app/building-your-application/routing/route-handlers#dynamic-route-segments
export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
  } catch (err) {
    return NextResponse.json(err);
  }
}