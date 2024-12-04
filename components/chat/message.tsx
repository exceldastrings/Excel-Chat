'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MessageStatus } from './message-status';
import { MessageReactions } from './message-reactions';
import { cn } from '@/lib/utils';

interface MessageProps {
  message: {
    id: string;
    content: string;
    sender: {
      name: string;
      avatar?: string;
    };
    timestamp: string;
    isOwn: boolean;
    status?: 'sent' | 'delivered' | 'read';
    reactions?: {
      emoji: string;
      count: number;
      users: string[];
    }[];
    files?: {
      name: string;
      url: string;
      type: string;
    }[];
  };
  onReact: (messageId: string, emoji: string) => void;
  currentUserReactions: string[];
}

export function Message({ message, onReact, currentUserReactions }: MessageProps) {
  return (
    <div
      className={cn(
        'flex items-end gap-2',
        message.isOwn && 'flex-row-reverse'
      )}
    >
      <Avatar className="h-8 w-8">
        <AvatarImage src={message.sender.avatar} />
        <AvatarFallback>
          {message.sender.name.slice(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <div
        className={cn(
          'flex flex-col gap-1 max-w-[70%]',
          message.isOwn && 'items-end'
        )}
      >
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">
            {message.sender.name}
          </span>
          <span className="text-xs text-muted-foreground">
            {message.timestamp}
          </span>
          {message.isOwn && message.status && (
            <MessageStatus status={message.status} />
          )}
        </div>
        <div
          className={cn(
            'rounded-lg px-3 py-2 text-sm',
            message.isOwn
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted'
          )}
        >
          {message.content}
          {message.files && message.files.length > 0 && (
            <div className="mt-2 space-y-2">
              {message.files.map((file) => (
                <div key={file.name} className="flex items-center gap-2">
                  <a
                    href={file.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs underline"
                  >
                    {file.name}
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
        {message.reactions && (
          <MessageReactions
            reactions={message.reactions}
            onReact={(emoji) => onReact(message.id, emoji)}
            currentUserReactions={currentUserReactions}
          />
        )}
      </div>
    </div>
  );
}