"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X, Info, AlertTriangle, AlertCircle } from "lucide-react"

interface PopupMessage {
  id: string
  title: string
  message: string
  priority: "info" | "medium" | "high"
  link?: {
    text: string
    href: string
  }
  validUntil?: string // ISO date string
}

interface PriorityPopupProps {
  asSection?: boolean
}

export function PriorityPopup({ asSection = false }: PriorityPopupProps) {
  const [messages, setMessages] = useState<PopupMessage[]>([])
  const [showPopup, setShowPopup] = useState(false)
  const [currentMessage, setCurrentMessage] = useState<PopupMessage | null>(null)

  // Sample messages - in a real app, these would come from an API or CMS
  const sampleMessages: PopupMessage[] = [
    {
      id: "high-weather-1",
      title: "Weather Advisory",
      message:
        "Due to heavy rainfall expected today, some outdoor exhibits may be temporarily closed for visitor safety. Indoor exhibits and covered areas remain open. Please check our latest updates before your visit.",
      priority: "high",
      link: {
        text: "Check Weather Updates",
        href: "/visit",
      },
      validUntil: "2025-12-31", // Updated to future date
    },
    // Uncomment to test different priorities
    // {
    //   id: "medium-maintenance-1",
    //   title: "Scheduled Maintenance",
    //   message: "The Tiger Territory exhibit will be under maintenance from 2 PM to 4 PM today. All other exhibits remain open as usual.",
    //   priority: "medium",
    //   link: {
    //     text: "View All Exhibits",
    //     href: "/animals"
    //   }
    // },
    // {
    //   id: "info-new-arrival-1",
    //   title: "New Arrival",
    //   message: "We're excited to welcome our newest family member - a baby elephant born last week! Visit the Elephant Sanctuary to catch a glimpse of our little one.",
    //   priority: "info",
    //   link: {
    //     text: "Meet Our Animals",
    //     href: "/animals/indian-elephant"
    //   }
    // }
  ]

  useEffect(() => {
    // Filter valid messages
    const now = new Date()
    const validMessages = sampleMessages.filter((msg) => {
      if (!msg.validUntil) return true
      return new Date(msg.validUntil) > now
    })

    if (validMessages.length === 0) {
      setMessages([])
      setCurrentMessage(null)
      return
    }

    // Sort by priority (high > medium > info)
    const priorityOrder = { high: 3, medium: 2, info: 1 }
    const sortedMessages = validMessages.sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority])

    setMessages(sortedMessages)
    setCurrentMessage(sortedMessages[0])

    // Check if we should show popup (first visit today)
    if (!asSection && sortedMessages.length > 0) {
      const today = new Date().toDateString()
      const lastShown = localStorage.getItem("popup-last-shown")

      if (lastShown !== today) {
        setShowPopup(true)
        localStorage.setItem("popup-last-shown", today)
      }
    }
  }, [asSection])

  const handleClosePopup = () => {
    setShowPopup(false)
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClosePopup()
    }
  }

  const getPriorityStyles = (priority: string) => {
    switch (priority) {
      case "high":
        return {
          borderColor: "border-l-red-500",
          iconBg: "bg-red-500/10",
          iconColor: "text-red-500",
          buttonBg: "bg-red-500 hover:bg-red-600",
          accentColor: "text-red-400",
        }
      case "medium":
        return {
          borderColor: "border-l-yellow-500",
          iconBg: "bg-yellow-500/10",
          iconColor: "text-yellow-500",
          buttonBg: "bg-yellow-500 hover:bg-yellow-600",
          accentColor: "text-yellow-400",
        }
      case "info":
        return {
          borderColor: "border-l-green-500",
          iconBg: "bg-green-500/10",
          iconColor: "text-green-500",
          buttonBg: "bg-green-500 hover:bg-green-600",
          accentColor: "text-green-400",
        }
      default:
        return {
          borderColor: "border-l-zoo-beige-400",
          iconBg: "bg-zoo-beige-400/10",
          iconColor: "text-zoo-beige-400",
          buttonBg: "bg-zoo-beige-400 hover:bg-zoo-beige-500",
          accentColor: "text-zoo-beige-400",
        }
    }
  }

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "high":
        return AlertCircle
      case "medium":
        return AlertTriangle
      case "info":
        return Info
      default:
        return Info
    }
  }

  if (!currentMessage) return null

  const styles = getPriorityStyles(currentMessage.priority)
  const IconComponent = getPriorityIcon(currentMessage.priority)

  // Full-screen popup version
  if (!asSection && showPopup) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={handleBackdropClick}
      >
        <div className="relative w-full max-w-2xl mx-auto animate-in slide-in-from-bottom-4 zoom-in-95 duration-300">
          <div className={`bg-zoo-teal-800 rounded-lg shadow-2xl border-l-4 ${styles.borderColor} overflow-hidden`}>
            {/* Header */}
            <div className="flex items-start justify-between p-6 pb-4">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-full ${styles.iconBg} flex-shrink-0`}>
                  <IconComponent className={`w-6 h-6 ${styles.iconColor}`} />
                </div>
                <div>
                  <h2 className="font-heading text-2xl text-white mb-2">{currentMessage.title}</h2>
                  <p className={`text-sm font-medium ${styles.accentColor} uppercase tracking-wide`}>
                    {currentMessage.priority === "high"
                      ? "High Priority"
                      : currentMessage.priority === "medium"
                        ? "Medium Priority"
                        : "Information"}
                  </p>
                </div>
              </div>
              <button
                onClick={handleClosePopup}
                className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close popup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="px-6 pb-6">
              <p className="text-white/90 text-lg leading-relaxed mb-6">{currentMessage.message}</p>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 justify-end">
                <button
                  onClick={handleClosePopup}
                  className="px-6 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors font-medium"
                >
                  Dismiss
                </button>
                {currentMessage.link && (
                  <a
                    href={currentMessage.link.href}
                    onClick={handleClosePopup}
                    className={`px-6 py-3 ${styles.buttonBg} text-white rounded-lg transition-colors font-medium text-center`}
                  >
                    {currentMessage.link.text}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Section version for homepage
  if (asSection) {
    return (
      <section className="py-8 bg-zoo-teal-700">
        <div className="zoo-container">
          <div
            className={`bg-zoo-teal-800 rounded-lg shadow-lg border-l-4 ${styles.borderColor} overflow-hidden animate-in slide-in-from-top-4 duration-500`}
          >
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-full ${styles.iconBg} flex-shrink-0`}>
                  <IconComponent className={`w-6 h-6 ${styles.iconColor}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-heading text-xl text-white">{currentMessage.title}</h3>
                    <span
                      className={`text-xs font-medium ${styles.accentColor} uppercase tracking-wide px-2 py-1 rounded-full bg-white/5`}
                    >
                      {currentMessage.priority === "high"
                        ? "High Priority"
                        : currentMessage.priority === "medium"
                          ? "Medium Priority"
                          : "Information"}
                    </span>
                  </div>
                  <p className="text-white/90 leading-relaxed mb-4">{currentMessage.message}</p>
                  {currentMessage.link && (
                    <a
                      href={currentMessage.link.href}
                      className={`inline-flex items-center px-4 py-2 ${styles.buttonBg} text-white rounded-lg transition-colors font-medium text-sm`}
                    >
                      {currentMessage.link.text}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return null
}
