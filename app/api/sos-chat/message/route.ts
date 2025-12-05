import { NextRequest, NextResponse } from "next/server";
import {
  getConversation,
  createOrUpdateConversation,
  addMessage,
  updateConversation,
} from "@/lib/mock-chat-storage";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { sessionId, name, content } = body;

    if (!sessionId || !content) {
      return NextResponse.json(
        { error: "Session ID and message content are required" },
        { status: 400 }
      );
    }

    // Find or create conversation
    let conversation = getConversation(sessionId);

    if (!conversation) {
      conversation = createOrUpdateConversation(sessionId, name);
    } else if (name && !conversation.name) {
      conversation = createOrUpdateConversation(sessionId, name);
    }

    // Create user message
    addMessage(conversation.id, content, "user");

    // Reload conversation to get updated messages
    conversation = getConversation(sessionId)!;

    // Create automatic bot response for first message
    const isFirstMessage =
      conversation.messages.filter((m) => m.sender === "user").length === 1;

    if (isFirstMessage) {
      addMessage(
        conversation.id,
        `Σε ευχαριστώ που μου έγραψες.

Ξέρω ότι δεν είναι εύκολο να βάλεις σε λόγια όλα αυτά.

Θα διαβάσω ο ίδιος το μήνυμά σου
και θα σου απαντήσω μέσα από αυτό το chat
με ένα μήνυμα μόνο για σένα
και με 1–2 πολύ συγκεκριμένα, μικρά βήματα για το «τι κάνω τώρα».

Μέχρι τότε, δεν χρειάζεται να πάρεις όλες τις αποφάσεις.
Αρκεί που έκανες αυτό το βήμα.`,
        "giannis"
      );
    }

    // Reload conversation to get all messages
    conversation = getConversation(sessionId)!;

    return NextResponse.json({
      conversation: {
        ...conversation,
        messages: [...conversation.messages].sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        ),
      },
    });
  } catch (error) {
    console.error("Error creating message:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
