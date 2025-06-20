"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send } from "lucide-react"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! Welcome to Patna Zoo. How can I help you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ])
  const [inputText, setInputText] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const handleSendMessage = async () => {
    if (!inputText.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText.trim(),
      isUser: true,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputText("")
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "System is still in development.",
        isUser: false,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40",
          "w-10 h-10 sm:w-14 sm:h-14", // Smaller on mobile
          "bg-green-500 hover:bg-green-600 text-white",
          "rounded-full shadow-lg transition-all duration-300 flex items-center justify-center group",
          "hover:scale-110 hover:shadow-xl",
          "focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-zoo-teal-700",
          isOpen ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto",
        )}
        aria-label="Open chat"
        title="Chat with us"
      >
        <MessageCircle className="w-4 h-4 sm:w-6 sm:h-6 transition-transform duration-200 group-hover:scale-110" />
      </button>

      {/* Chat Interface - Picture in Picture Style */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-start p-4 sm:p-6 pointer-events-none">
          <div
            className={cn(
              "bg-white rounded-2xl shadow-2xl pointer-events-auto",
              "w-full max-w-sm h-96 sm:h-[500px]", // Responsive height
              "flex flex-col overflow-hidden",
              "animate-in slide-in-from-bottom-4 duration-300",
              "border border-gray-200",
            )}
          >
            {/* Header */}
            <div className="bg-green-500 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">PZ</span>
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Patna Zoo Assistant</h3>
                  <p className="text-xs text-green-100">Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <div key={message.id} className={cn("flex", message.isUser ? "justify-end" : "justify-start")}>
                  <div
                    className={cn(
                      "max-w-[80%] rounded-2xl px-3 py-2 text-sm",
                      message.isUser
                        ? "bg-green-500 text-white rounded-br-md"
                        : "bg-white text-gray-800 rounded-bl-md shadow-sm",
                    )}
                  >
                    <p className="leading-relaxed">{message.text}</p>
                    <p className={cn("text-xs mt-1", message.isUser ? "text-green-100" : "text-gray-500")}>
                      {formatTime(message.timestamp)}
                    </p>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white text-gray-800 rounded-2xl rounded-bl-md px-3 py-2 shadow-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type a message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                  disabled={isTyping}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputText.trim() || isTyping}
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                    inputText.trim() && !isTyping
                      ? "bg-green-500 text-white hover:bg-green-600"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed",
                  )}
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
