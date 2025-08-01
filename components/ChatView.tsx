
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { streamChat } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Send, Mic, Loader, MessageCircle, ArrowLeft } from './Icons';
import { useSpeechRecognition } from '../hooks/useSpeechRecognition';

interface ChatViewProps {
  onBack: () => void;
}

const ChatView: React.FC<ChatViewProps> = ({ onBack }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'initial',
      role: 'model',
      text: 'Hallo! Ich bin dein Binokel Buddy. Frag mich alles über das Spiel!',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(scrollToBottom, [messages]);

  const handleSpeechResult = useCallback((transcript: string) => {
    setInput(prev => (prev + ' ' + transcript).trim());
  }, []);

  const { isListening, isSupported, startListening, stopListening } = useSpeechRecognition(handleSpeechResult);


  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { id: Date.now().toString(), role: 'user', text: input.trim() };
    const modelMessage: ChatMessage = { id: (Date.now() + 1).toString(), role: 'model', text: ''};

    setMessages(prev => [...prev, userMessage, modelMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const stream = await streamChat(userMessage.text);
      let responseText = '';
      for await (const chunk of stream) {
        responseText += chunk.text;
        setMessages(prev => prev.map(msg => msg.id === modelMessage.id ? { ...msg, text: responseText } : msg));
      }
    } catch (error) {
      console.error(error);
      const errorMessage = error instanceof Error ? error.message : "Ein unbekannter Fehler ist aufgetreten.";
       setMessages(prev => prev.map(msg => msg.id === modelMessage.id ? { ...msg, text: `Entschuldigung, ein Fehler ist aufgetreten: ${errorMessage}` } : msg));
    } finally {
      setIsLoading(false);
    }
  };

  const toggleListening = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  }

  return (
    <div className="flex flex-col h-full bg-slate-100">
      <header className="sticky top-0 bg-white/80 backdrop-blur-sm p-4 border-b border-slate-200 flex items-center">
          <button onClick={onBack} className="p-2 rounded-full hover:bg-slate-100 mr-3" aria-label="Zurück zur Regelübersicht">
              <ArrowLeft className="w-6 h-6 text-slate-600" />
          </button>
          <div className="flex items-center">
            <MessageCircle className="w-6 h-6 text-emerald-600 mr-2"/>
            <h2 className="text-lg font-bold text-slate-800">Chat-Hilfe</h2>
          </div>
      </header>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex items-end gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-3 rounded-2xl ${
                msg.role === 'user'
                  ? 'bg-emerald-600 text-white rounded-br-lg'
                  : 'bg-white text-slate-800 rounded-bl-lg shadow-sm'
              }`}
            >
              {msg.text ? msg.text.split('\n').map((line, i) => <p key={i}>{line}</p>) : <Loader />}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-3 bg-white/80 backdrop-blur-sm border-t border-slate-200">
        <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={isListening ? "Höre zu..." : "Stelle eine Frage..."}
            className="flex-1 px-4 py-2 bg-slate-100 border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
            disabled={isLoading}
            aria-label="Frage an den Chat-Assistenten"
          />
          {isSupported && (
             <button type="button" onClick={toggleListening} className={`p-2 rounded-full transition-colors ${isListening ? 'bg-red-500 text-white animate-pulse' : 'bg-slate-200 text-slate-600 hover:bg-slate-300'}`} aria-label={isListening ? "Spracheingabe stoppen" : "Spracheingabe starten"}>
                <Mic className="w-5 h-5" />
             </button>
          )}
          <button type="submit" disabled={isLoading || !input.trim()} className="bg-emerald-600 text-white p-2 rounded-full hover:bg-emerald-700 disabled:bg-slate-300 disabled:cursor-not-allowed" aria-label="Nachricht senden">
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatView;
