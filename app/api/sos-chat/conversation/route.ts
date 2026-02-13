import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Force this route to always fetch fresh data (no caching)
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const sessionId = searchParams.get("sessionId");

    if (!sessionId) {
      return NextResponse.json(
        { error: "Session ID required" },
        { status: 400 },
      );
    }

    // THE FIX: Fetch from REAL Database and explicitly INCLUDE messages
    const conversation = await prisma.conversation.findUnique({
      where: { sessionId: sessionId },
      include: {
        messages: {
          orderBy: { createdAt: "asc" }, // Sort by oldest first
        },
      },
    });

    return NextResponse.json({
      conversation: conversation || null,
    });
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
