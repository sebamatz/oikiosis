import { NextRequest, NextResponse } from "next/server";
import { getConversation } from "@/lib/mock-chat-storage";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const sessionId = searchParams.get("sessionId");

    if (!sessionId) {
      return NextResponse.json(
        { error: "Session ID is required" },
        { status: 400 }
      );
    }

    const conversation = getConversation(sessionId);

    if (conversation) {
      return NextResponse.json({
        conversation: {
          ...conversation,
          messages: [...conversation.messages].sort(
            (a, b) =>
              new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          ),
        },
      });
    }

    return NextResponse.json({
      conversation: null,
    });
  } catch (error) {
    console.error("Error fetching conversation:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
