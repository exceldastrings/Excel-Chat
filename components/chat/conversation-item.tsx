'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import type { Conversation } from '@/types/chat';

interface ConversationItemProps {
  conversation: Conversation;
  onClick: (id: string) => void;
}

export function ConversationItem({ conversation, onClick }: ConversationItemProps) {
  return (
    <button
      onClick={() => onClick(conversation.id)}
      className={cn(
        'w-full flex items-center gap-3 p-2 rounded-lg hover:bg-accent transition',
        conversation.unread && 'font-medium'
      )}
    >
      <Avatar>
        <AvatarImage src="" />
        <AvatarFallback>
          {conversation.name.slice(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <div className="flex-1 text-left truncate">
        <div className="flex items-center justify-between">
          <span className="text-sm">{conversation.name}</span>
          <span className="text-xs text-muted-foreground">
            {conversation.timestamp}
          </span>
        </div>
        <p className="text-xs text-muted-foreground truncate">
          {conversation.lastMessage}
        </p>
      </div>
      {conversation.unread > 0 && (
        <div className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
          {conversation.unread}
        </div>
      )}
    </button>
  );
}