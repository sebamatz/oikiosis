import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    // Fetch all conversations, ordered by the most recent update
    const conversations = await prisma.conversation.findMany({
      orderBy: { updatedAt: "desc" },
      include: {
        messages: {
          orderBy: { createdAt: "asc" },
          take: 1, // Optional: Just grab the first message for a preview if you want
        },
        _count: {
          select: { messages: true },
        },
      },
    });

    return NextResponse.json({ conversations });
  } catch (error) {
    console.error("Admin Load Error:", error);
    return NextResponse.json(
      { error: "Failed to load chats" },
      { status: 500 },
    );
  }
}
