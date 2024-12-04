'use client';

import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';
import { FileUpload } from './file-upload';
import { EmojiPicker } from './emoji-picker';

interface MessageInputProps {
  onSend: (content: string, files?: File[]) => void;
}

export function MessageInput({ onSend }: MessageInputProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  }, [message, onSend]);

  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  }, [handleSubmit]);

  const handleEmojiSelect = (emoji: any) => {
    setMessage((prev) => prev + emoji.native);
  };

  const handleFileUpload = (files: File[]) => {
    onSend(message, files);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="border-t p-4">
      <div className="flex items-end gap-2">
        <FileUpload onUpload={handleFileUpload} />
        <div className="flex-1">
          <Textarea
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyPress}
            rows={1}
            className="resize-none"
          />
        </div>
        <EmojiPicker onEmojiSelect={handleEmojiSelect} />
        <Button type="submit" size="icon" className="shrink-0">
          <Send className="h-5 w-5" />
        </Button>
      </div>
    </form>
  );
}