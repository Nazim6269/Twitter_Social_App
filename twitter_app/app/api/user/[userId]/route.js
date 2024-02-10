import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export async function GET(params) {
  try {
    const userId = params.userId;
    if (!userId || typeof userId !== "string") {
      throw new Error("Invalid ID");
    }
    const existingUser = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    const followersCount = await prisma.user.count({
      where: {
        followingIds: {
          has: userId,
        },
      },
    });
    return new NextResponse(
      JSON.stringify({ ...existingUser, followersCount }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    await prisma.$disconnect();
    return new NextResponse("Something went wrong to find this user!", {
      status: 400,
    });
  }
}
