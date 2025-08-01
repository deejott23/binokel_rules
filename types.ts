
import React from 'react';

export interface RuleSection {
  id: string;
  title: string;
  summary: string;
  content: React.ReactNode;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
}
