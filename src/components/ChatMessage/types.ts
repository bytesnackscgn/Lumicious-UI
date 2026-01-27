export type ChatMessageVariant = 'sent' | 'received';
export type ChatMessageSize = 'sm' | 'md' | 'lg';
export type ChatMessageStatus = 'sent' | 'delivered' | 'read' | 'failed';

export interface ChatMessageProps {
  id?: string | number;
  content: string;
  variant?: ChatMessageVariant;
  size?: ChatMessageSize;
  timestamp?: string | Date;
  avatar?: string;
  username?: string;
  status?: ChatMessageStatus;
  loading?: boolean;
  showAvatar?: boolean;
  showTimestamp?: boolean;
  showStatus?: boolean;
}