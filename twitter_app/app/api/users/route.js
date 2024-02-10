import prisma from "@/utils/connect";
import { NextResponse, NextRequest } from "next/server";

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    if (users.length === 0) {
      return new NextResponse(JSON.stringify({ message: "No users find!" }), {
        status: 401,
      });
    }
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    await prisma.$disconnect();
    return new NextResponse("Something went wrong to fetch all users", {
      status: 400,
    });
  }
}
