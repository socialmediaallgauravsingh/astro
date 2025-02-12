import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const Chat = () => {
  return (
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="glass p-6 min-h-[600px]">
        <div className="flex items-center gap-2 mb-6">
          <MessageCircle className="w-6 h-6 text-mystic-400" />
          <h1 className="text-2xl font-bold">Astrology AI Chat</h1>
        </div>
        
        <iframe
          src="https://www.chatbase.co/chatbot-iframe/rG_911t1obqQUraljCY32"
          width="100%"
          height="500"
          frameBorder="0"
          className="rounded-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default Chat;
