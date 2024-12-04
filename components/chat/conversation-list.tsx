'use client';

import { ConversationItem } from '@/components/chat/conversation-item';
import type { Conversation } from '@/types/chat';
import { useChat } from '@/hooks/use-chat';

export function ConversationList() {
  const { handleConversationSelect } = useChat();
  
  // Temporary mock data
  const conversations: Conversation[] = [
    {
      id: '1',
      name: 'Team Chat',
      lastMessage: 'Hey everyone! How are you doing?',
      timestamp: '2:30 PM',
      unread: 2,
    },
    {
      id: '2',
      name: 'Alice Smith',
      lastMessage: "Sure, let's meet tomorrow",
      timestamp: '1:45 PM',
      unread: 0,
    },
  ];

  return (
    <div className="space-y-2 py-2">
      {conversations.map((conversation) => (
        <ConversationItem
          key={conversation.id}
          conversation={conversation}
          onClick={handleConversationSelect}
        />
      ))}
    </div>
  );
}