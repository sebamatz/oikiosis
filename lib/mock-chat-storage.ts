// Mock in-memory storage for SOS chat conversations
// This will reset on server restart - for development/testing only

interface Message {
  id: string;
  conversationId: string;
  content: string;
  sender: "user" | "giannis";
  createdAt: string;
}

interface Conversation {
  id: string;
  sessionId: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
  messages: Message[];
}

const mockConversations = new Map<string, Conversation>();

export function getConversation(sessionId: string): Conversation | null {
  return mockConversations.get(sessionId) || null;
}

export function createOrUpdateConversation(
  sessionId: string,
  name?: string | null
): Conversation {
  let conversation = mockConversations.get(sessionId);

  if (!conversation) {
    conversation = {
      id: `conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      sessionId,
      name: name || null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      messages: [],
    };
    mockConversations.set(sessionId, conversation);
  } else if (name && !conversation.name) {
    conversation.name = name;
    conversation.updatedAt = new Date().toISOString();
  }

  return conversation;
}

export function addMessage(
  conversationId: string,
  content: string,
  sender: "user" | "giannis"
): Message {
  const conversation = Array.from(mockConversations.values()).find(
    (c) => c.id === conversationId
  );

  if (!conversation) {
    throw new Error("Conversation not found");
  }

  const message: Message = {
    id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    conversationId,
    content,
    sender,
    createdAt: new Date().toISOString(),
  };

  conversation.messages.push(message);
  conversation.updatedAt = new Date().toISOString();

  return message;
}

export function updateConversation(conversation: Conversation): void {
  mockConversations.set(conversation.sessionId, conversation);
}
