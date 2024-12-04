'use client';

import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';

interface MessageReactionsProps {
  reactions: {
    emoji: string;
    count: number;
    users: string[];
  }[];
  onReact: (emoji: string) => void;
  currentUserReactions: string[];
}

const quickReactions = ['👍', '❤️', '😂', '😮', '😢', '😡'];

export function MessageReactions({ reactions, onReact, currentUserReactions }: MessageReactionsProps) {
  return (
    <div className="flex items-center gap-1 mt-1">
      {reactions.map((reaction) => (
        <Button
          key={reaction.emoji}
          variant="ghost"
          size="sm"
          className={cn(
            'h-6 px-2 text-xs gap-1',
            currentUserReactions.includes(reaction.emoji) && 'bg-primary/10'
          )}
          onClick={() => onReact(reaction.emoji)}
        >
          <span>{reaction.emoji}</span>
          <span>{reaction.count}</span>
        </Button>
      ))}
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="sm" className="h-6 px-2">
            +
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-2">
          <div className="flex gap-1">
            {quickReactions.map((emoji) => (
              <Button
                key={emoji}
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={() => onReact(emoji)}
              >
                {emoji}
              </Button>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}