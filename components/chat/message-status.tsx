'use client';

import { Check, CheckCheck } from 'lucide-react';

interface MessageStatusProps {
  status: 'sent' | 'delivered' | 'read';
}

export function MessageStatus({ status }: MessageStatusProps) {
  if (status === 'sent') {
    return <Check className="h-4 w-4 text-muted-foreground" />;
  }

  if (status === 'delivered') {
    return <CheckCheck className="h-4 w-4 text-muted-foreground" />;
  }

  if (status === 'read') {
    return <CheckCheck className="h-4 w-4 text-primary" />;
  }

  return null;
}