"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
    }, 1000)
  }

  return (
    <div className="bg-zoo-beige-light text-zoo-teal-700 rounded-lg p-6 md:p-8">
      <h3 className="font-heading text-2xl md:text-3xl mb-4">BE THE FIRST TO KNOW</h3>
      <p className="mb-6">Sign up for our newsletter to receive updates on events, animal news and special offers.</p>

      {isSubmitted ? (
        <div className="bg-green-100 text-green-800 p-4 rounded-lg animate-fade-in">
          <p className="font-bold">Thank you for signing up!</p>
          <p>You'll receive our next newsletter soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input
              type="text"
              placeholder="First name"
              className="bg-white border-zoo-teal-200 text-zoo-teal-700 md:col-span-1"
              required
            />
            <Input
              type="text"
              placeholder="Last name"
              className="bg-white border-zoo-teal-200 text-zoo-teal-700 md:col-span-1"
              required
            />
            <Input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white border-zoo-teal-200 text-zoo-teal-700 md:col-span-1"
              required
            />
          </div>

          <div className="flex items-start gap-2">
            <input type="checkbox" id="privacy" className="mt-1" required />
            <label htmlFor="privacy" className="text-sm">
              I agree to the privacy policy and consent to Patna Zoo contacting me via email.
            </label>
          </div>

          <Button
            type="submit"
            className="bg-zoo-yellow-600 hover:bg-zoo-yellow-500 text-zoo-teal-900 font-bold uppercase tracking-wide py-3 px-6 rounded-full transition-all duration-300"
          >
            SIGN UP
          </Button>
        </form>
      )}
    </div>
  )
}
