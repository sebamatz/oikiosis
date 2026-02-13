import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const { conversationId, content } = await request.json();

    if (!conversationId || !content) {
      return NextResponse.json(
        { error: "Missing conversationId or content" },
        { status: 400 },
      );
    }

    // 1. Create the Reply in the Database
    const message = await prisma.message.create({
      data: {
        conversationId: conversationId, // Links to the internal ID
        content: content,
        sender: "giannis", // It's from you
        isRead: true, // You read your own message
      },
    });

    // 2. Update the Conversation timestamp (so it jumps to the top of your list)
    await prisma.conversation.update({
      where: { id: conversationId },
      data: { updatedAt: new Date() },
    });

    return NextResponse.json({ success: true, message });
  } catch (error) {
    console.error("Reply Error:", error);
    return NextResponse.json(
      { error: "Failed to send reply" },
      { status: 500 },
    );
  }
}
