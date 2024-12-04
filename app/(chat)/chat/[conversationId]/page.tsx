'use client';

import { MessageList } from '@/components/chat/message-list';
import { MessageInput } from '@/components/chat/message-input';
import { useCallback } from 'react';

// Temporary mock data
const mockMessages = [
  {
    id: '1',
    content: 'Hey, how are you?',
    sender: {
      id: '1',
      name: 'John Doe',
      avatar: '',
    },
    timestamp: '2:30 PM',
    isOwn: false,
  },
  {
    id: '2',
    content: "I'm doing great, thanks! How about you?",
    sender: {
      id: '2',
      name: 'Current User',
      avatar: '',
    },
    timestamp: '2:31 PM',
    isOwn: true,
  },
];

export default function ConversationPage({
  params,
}: {
  params: { conversationId: string };
}) {
  const handleSendMessage = useCallback((content: string) => {
    // TODO: Implement sending messages
    console.log('Sending message:', content);
  }, []);

  return (
    <div className="flex-1 flex flex-col">
      <MessageList messages={mockMessages} />
      <MessageInput onSend={handleSendMessage} />
    </div>
  );
}