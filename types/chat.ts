export interface Conversation {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
}

export interface ChatHeaderProps {
  title: string;
  memberCount: number;
}

export interface SearchProps {
  value: string;
  onChange: (value: string) => void;
}

export interface UserProfile {
  name: string;
  email: string;
  avatar?: string;
}