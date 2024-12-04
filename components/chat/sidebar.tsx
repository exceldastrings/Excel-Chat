'use client';

import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Search } from '@/components/chat/search';
import { ConversationList } from '@/components/chat/conversation-list';
import { UserButton } from '@/components/chat/user-button';
import { PlusCircle } from 'lucide-react';
import { useChat } from '@/hooks/use-chat';

export function Sidebar() {
  const { searchQuery, handleSearch } = useChat();

  return (
    <div className="w-[320px] flex flex-col border-r">
      <div className="p-4 border-b">
        <div className="flex items-center justify-between mb-4">
          <UserButton />
          <Button size="icon" variant="ghost">
            <PlusCircle className="h-5 w-5" />
          </Button>
        </div>
        <Search value={searchQuery} onChange={handleSearch} />
      </div>
      <ScrollArea className="flex-1 px-2">
        <ConversationList />
      </ScrollArea>
    </div>
  );
}