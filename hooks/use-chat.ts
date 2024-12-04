'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import type { Conversation } from '@/types/chat';

export function useChat() {
  const router = useRouter();
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleConversationSelect = useCallback((id: string) => {
    setSelectedConversation(id);
    router.push(`/chat/${id}`);
  }, [router]);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  return {
    selectedConversation,
    searchQuery,
    handleConversationSelect,
    handleSearch,
  };
}