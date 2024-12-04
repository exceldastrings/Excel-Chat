'use client';

import { Sidebar } from '@/components/chat/sidebar';
import { Header } from '@/components/chat/header';

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        <Header title="Select a conversation" memberCount={0} />
        {children}
      </main>
    </div>
  );
}