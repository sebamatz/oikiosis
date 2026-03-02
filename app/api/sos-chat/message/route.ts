import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendEmailNotification } from "@/lib/notifications"; // Added Import

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { sessionId, name, content } = body;

    console.log("1. Received Request for Session:", sessionId);

    if (!sessionId || !content) {
      return NextResponse.json(
        { error: "Session ID and content are required" },
        { status: 400 },
      );
    }

    // STEP 1: Find or Create the Conversation
    let conversation = await prisma.conversation.findUnique({
      where: { sessionId: sessionId },
    });

    if (!conversation) {
      console.log("2. Creating NEW conversation");
      conversation = await prisma.conversation.create({
        data: {
          sessionId: sessionId,
          name: name || "Anonymous User",
        },
      });
    } else {
      console.log("2. Found EXISTING conversation ID:", conversation.id);
      // Update name if user provided a new one, or just bump updatedAt
      await prisma.conversation.update({
        where: { id: conversation.id },
        data: {
          name: name || conversation.name,
          updatedAt: new Date(),
        },
      });
    }

    // STEP 2: Save the User Message
    await prisma.message.create({
      data: {
        conversationId: conversation.id,
        content: content,
        sender: "user",
        isRead: false,
      },
    });

    // STEP 3: Fetch the full conversation with messages for the UI
    const finalConversation = await prisma.conversation.findUnique({
      where: { id: conversation.id },
      include: {
        messages: {
          orderBy: { createdAt: "asc" },
        },
      },
    });

    if (!finalConversation) throw new Error("Conversation lost after creation");

    // STEP 4: First Message Logic (Notifications & Auto-Reply)
    const userMsgCount = finalConversation.messages.filter(
      (m) => m.sender === "user",
    ).length;

    if (userMsgCount === 1) {
      console.log("3. First message detected. Triggering Notifications.");

      // --- TRIGGER GMAIL NOTIFICATION ---
      // We don't 'await' this so the user doesn't wait for the email server to respond
      sendEmailNotification(sessionId, content, name || "Anonymous User").catch(
        (err) => console.error("Notification trigger failed:", err),
      );

      // ADDED: The [AUDIO:/relax.mp3] tag at the very end.
      // Place your audio file at public/relax.mp3
      const autoReplyText = `Σε ευχαριστώ που μου έγραψες.

Ξέρω ότι δεν είναι εύκολο
να βάζεις σε λόγια όλα όσα περνάς.
​Θα διαβάσω ο ίδιος το μήνυμά σου με μεγάλη προσοχή. 

Επειδή η επικοινωνία μας εδώ είναι απολύτως ανώνυμη (δεν ζητάμε email), δεν θα σου έρθει κάποια ειδοποίηση, όταν σου απαντήσω.
​Γι' αυτό, σε παρακαλώ να επιστρέψεις σε αυτό ακριβώς το chat μέσα στο επόμενο 24ωρο.
​Θα σου έχω αφήσει ένα μήνυμα μόνο για σένα, με 1-2 μικρά, ξεκάθαρα βήματα για το «τι κάνω τώρα».

​Μέχρι τότε, δεν χρειάζεται να πάρεις καμία απόφαση, ούτε να απαντήσεις σε κανέναν. Αρκεί που έκανες αυτό το πρώτο βήμα.`;

      // Save the Auto-Reply message
      const botMsg = await prisma.message.create({
        data: {
          conversationId: conversation.id,
          sender: "giannis",
          content: autoReplyText,
          isRead: true,
        },
      });

      // Manually add the bot message to the object instead of another DB query
      // This is faster and prevents any race conditions
      finalConversation.messages.push(botMsg);

      return NextResponse.json({ conversation: finalConversation });
    }

    // Return the updated conversation for normal messages
    return NextResponse.json({
      conversation: finalConversation,
    });
  } catch (error) {
    console.error("CRITICAL CHAT ERROR:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
