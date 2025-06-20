"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { FeaturedContentCard } from "@/components/featured-content-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Clock, MapPin, Calendar, AlertTriangle, Info } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function TicketsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [bookingForm, setBookingForm] = useState({
    name: "",
    mobile: "",
    email: "",
    ticketType: "regular",
    visitDate: "",
    visitTime: "",
    numAdults: 1,
    numChildren: 0,
    numPersons: 1, // For student tickets
  })

  const [validationErrors, setValidationErrors] = useState<string[]>([])
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Get current date for date restrictions
  const getCurrentDate = () => {
    const today = new Date()
    return today.toISOString().split("T")[0]
  }

  // Get seasonal operating hours based on date
  const getOperatingHours = (date: string) => {
    if (!date) return { start: "09:00", end: "17:00" }

    const selectedDate = new Date(date)
    const month = selectedDate.getMonth() + 1

    // Winter season: Oct 1 - Mar 31 (5:30 AM - 5:00 PM)
    // Summer season: Apr 1 - Sep 30 (6:00 AM - 6:00 PM)
    if (month >= 10 || month <= 3) {
      return { start: "05:30", end: "17:00" }
    } else {
      return { start: "06:00", end: "18:00" }
    }
  }

  // Generate available time slots based on operating hours
  const generateTimeSlots = (date: string) => {
    const hours = getOperatingHours(date)
    const slots: string[] = []

    const startHour = Number.parseInt(hours.start.split(":")[0])
    const startMinute = Number.parseInt(hours.start.split(":")[1])
    const endHour = Number.parseInt(hours.end.split(":")[0])

    let currentHour = startHour
    let currentMinute = startMinute

    while (currentHour < endHour || (currentHour === endHour && currentMinute === 0)) {
      const timeString = `${currentHour.toString().padStart(2, "0")}:${currentMinute.toString().padStart(2, "0")}`
      slots.push(timeString)

      currentMinute += 30
      if (currentMinute >= 60) {
        currentMinute = 0
        currentHour += 1
      }
    }

    return slots
  }

  // Check if selected date is January 1st
  const isJanuary1st = (date: string) => {
    if (!date) return false
    const selectedDate = new Date(date)
    return selectedDate.getMonth() === 0 && selectedDate.getDate() === 1
  }

  // Get student ticket pricing
  const getStudentPricing = (ticketType: string) => {
    if (ticketType === "schoolStudent") return 10
    if (ticketType === "collegeStudent") return 30
    return 0
  }

  // Validate booking form with current form state
  const validateBooking = (currentForm = bookingForm) => {
    const errors: string[] = []

    // January 1st restrictions - only Regular tickets allowed
    if (isJanuary1st(currentForm.visitDate)) {
      if (currentForm.ticketType !== "regular") {
        errors.push("Only Regular tickets are available on January 1st. Please select Regular ticket type.")
      }
    }

    // Group ticket validation - only requires minimum 10 adults
    if (currentForm.ticketType === "group") {
      if (currentForm.numAdults < 10) {
        errors.push("Group tickets require minimum 10 adults.")
      }
    }

    // Date validation
    if (currentForm.visitDate && currentForm.visitDate < getCurrentDate()) {
      errors.push("Cannot book for past dates. Please select a future date.")
    }

    // Time validation
    if (currentForm.visitDate && currentForm.visitTime) {
      const hours = getOperatingHours(currentForm.visitDate)
      if (currentForm.visitTime < hours.start || currentForm.visitTime > hours.end) {
        errors.push(`Selected time is outside operating hours (${hours.start} - ${hours.end}).`)
      }
    }

    // Student ticket validation
    if (
      (currentForm.ticketType === "schoolStudent" || currentForm.ticketType === "collegeStudent") &&
      currentForm.numPersons < 1
    ) {
      errors.push("Please specify the number of persons for student tickets.")
    }

    setValidationErrors(errors)
    return errors.length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target
    const processedValue = type === "number" ? Number(value) : value

    const newFormState = {
      ...bookingForm,
      [name]: processedValue,
    }

    setBookingForm(newFormState)

    // Update available time slots when date changes
    if (name === "visitDate" && value) {
      const slots = generateTimeSlots(value)
      setAvailableTimeSlots(slots)
      // Reset time if current time is not available
      if (bookingForm.visitTime && !slots.includes(bookingForm.visitTime)) {
        newFormState.visitTime = ""
        setBookingForm(newFormState)
      }
    }

    // Validate immediately with new form state
    validateBooking(newFormState)
  }

  const handleSelectChange = (name: string, value: string) => {
    let newFormState = { ...bookingForm, [name]: value }

    // Handle ticket type changes
    if (name === "ticketType") {
      if (value === "group") {
        newFormState = { ...newFormState, numAdults: 10, numChildren: 0, numPersons: 1 }
      } else if (value === "schoolStudent" || value === "collegeStudent") {
        newFormState = { ...newFormState, numAdults: 1, numChildren: 0, numPersons: 1 }
      } else {
        newFormState = { ...newFormState, numAdults: 1, numChildren: 0, numPersons: 1 }
      }
    }

    setBookingForm(newFormState)

    // Validate immediately with new form state
    validateBooking(newFormState)
  }

  // Use effect to validate when form changes
  useEffect(() => {
    validateBooking(bookingForm)
  }, [bookingForm])

  const calculateBookingTotal = () => {
    const { ticketType, numAdults, numChildren, numPersons, visitDate } = bookingForm

    // January 1st special pricing (only for regular tickets)
    if (isJanuary1st(visitDate)) {
      if (ticketType === "regular") {
        return numAdults * 100 + numChildren * 50
      }
      // For other ticket types on Jan 1st, return 0 as they're not allowed
      return 0
    }

    // Student pricing
    if (ticketType === "schoolStudent" || ticketType === "collegeStudent") {
      const pricePerPerson = getStudentPricing(ticketType)
      return numPersons * pricePerPerson
    }

    // Group pricing logic
    if (ticketType === "group") {
      const adultTotal = numAdults * 25 // Group rate for adults (min 10)
      // Children pricing: Group rate if 10+, regular rate if less than 10
      const childTotal = numChildren >= 10 ? numChildren * 5 : numChildren * 20
      return adultTotal + childTotal
    }

    // Regular pricing
    return numAdults * 50 + numChildren * 20
  }

  const getPriceBreakdown = () => {
    const { ticketType, numAdults, numChildren, numPersons, visitDate } = bookingForm

    if (isJanuary1st(visitDate)) {
      if (ticketType === "regular") {
        return {
          adultPrice: 100,
          childPrice: 50,
          note: "January 1st Special Pricing",
          breakdown: `Adults: ${numAdults} × ₹100 = ₹${numAdults * 100}${numChildren > 0 ? `, Children: ${numChildren} × ₹50 = ₹${numChildren * 50}` : ""}`,
        }
      }
      return {
        adultPrice: 0,
        childPrice: 0,
        note: "Invalid ticket type for January 1st",
        breakdown: "Please select Regular ticket type for January 1st",
      }
    }

    if (ticketType === "schoolStudent") {
      return {
        personPrice: 10,
        note: "School Student Rate (ID Required)",
        breakdown: `Total Persons: ${numPersons} × ₹10 = ₹${numPersons * 10}`,
      }
    }

    if (ticketType === "collegeStudent") {
      return {
        personPrice: 30,
        note: "College Student Rate (ID Required)",
        breakdown: `Total Persons: ${numPersons} × ₹30 = ₹${numPersons * 30}`,
      }
    }

    if (ticketType === "group") {
      const childPrice = numChildren >= 10 ? 5 : 20
      const childPriceType = numChildren >= 10 ? "Group Rate" : "Regular Rate"

      return {
        adultPrice: 25,
        childPrice: childPrice,
        note: `Group Discount Applied (Adults: Group Rate${numChildren > 0 ? `, Children: ${childPriceType}` : ""})`,
        breakdown: `Adults: ${numAdults} × ₹25 = ₹${numAdults * 25}${numChildren > 0 ? `, Children: ${numChildren} × ₹${childPrice} = ₹${numChildren * childPrice}` : ""}`,
      }
    }

    return {
      adultPrice: 50,
      childPrice: 20,
      note: "Regular Pricing",
      breakdown: `Adults: ${numAdults} × ₹50 = ₹${numAdults * 50}${numChildren > 0 ? `, Children: ${numChildren} × ₹20 = ₹${numChildren * 20}` : ""}`,
    }
  }

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateBooking()) {
      return
    }

    // Here you would handle the form submission
    alert("Booking submitted successfully!")
  }

  const priceInfo = getPriceBreakdown()
  const isStudentTicket = bookingForm.ticketType === "schoolStudent" || bookingForm.ticketType === "collegeStudent"
  const isFormValid = validationErrors.length === 0

  return (
    <>
      <Navbar />

      <main>
        <HeroSection
          title="TICKETS & EXPERIENCES"
          subtitle="Book your visit and explore incredible animal experiences"
          backgroundImage="/images/header/animal-bg.png"
          height="medium"
        />

        {/* Enhanced Booking Form */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div className="max-w-4xl mx-auto">
              <div
                className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">BOOK YOUR VISIT</h2>
                <p className="text-xl text-white/80">Plan your perfect day at Patna Zoo</p>
              </div>

              <div
                className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 animate-fade-in shadow-lg ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "200ms", transition: "all 0.8s ease-out" }}
              >
                <h3 className="font-heading text-2xl text-white mb-8 text-center">Ticket Booking Form</h3>

                <form onSubmit={handleBookingSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="text-white text-base">
                        Your Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={bookingForm.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-zoo-yellow-600 focus:ring-zoo-yellow-600"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="mobile" className="text-white text-base">
                        Mobile *
                      </Label>
                      <Input
                        id="mobile"
                        name="mobile"
                        value={bookingForm.mobile}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-zoo-yellow-600 focus:ring-zoo-yellow-600"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-white text-base">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={bookingForm.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-zoo-yellow-600 focus:ring-zoo-yellow-600"
                    />
                  </div>

                  {/* Ticket Type and Visit Details */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="ticketType" className="text-white text-base">
                        Ticket Type *
                      </Label>
                      <Select
                        value={bookingForm.ticketType}
                        onValueChange={(value) => handleSelectChange("ticketType", value)}
                      >
                        <SelectTrigger className="bg-white/10 border-white/20 text-white focus:ring-zoo-yellow-600 focus:border-zoo-yellow-600">
                          <SelectValue placeholder="Select ticket type" />
                        </SelectTrigger>
                        <SelectContent className="bg-zoo-teal-800 border-white/20 text-white">
                          <SelectItem value="regular" className="focus:bg-zoo-teal-700 focus:text-white">
                            Regular
                          </SelectItem>
                          <SelectItem
                            value="group"
                            className="focus:bg-zoo-teal-700 focus:text-white"
                            disabled={isJanuary1st(bookingForm.visitDate)}
                          >
                            Group (10+ adults) {isJanuary1st(bookingForm.visitDate) && "(Not available on Jan 1st)"}
                          </SelectItem>
                          <SelectItem
                            value="schoolStudent"
                            className="focus:bg-zoo-teal-700 focus:text-white"
                            disabled={isJanuary1st(bookingForm.visitDate)}
                          >
                            School Student (₹10) {isJanuary1st(bookingForm.visitDate) && "(Not available on Jan 1st)"}
                          </SelectItem>
                          <SelectItem
                            value="collegeStudent"
                            className="focus:bg-zoo-teal-700 focus:text-white"
                            disabled={isJanuary1st(bookingForm.visitDate)}
                          >
                            College Student (₹30) {isJanuary1st(bookingForm.visitDate) && "(Not available on Jan 1st)"}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="visitDate" className="text-white text-base">
                        Visiting Date *
                      </Label>
                      <div className="relative">
                        <Input
                          id="visitDate"
                          name="visitDate"
                          type="date"
                          min={getCurrentDate()}
                          value={bookingForm.visitDate}
                          onChange={handleInputChange}
                          required
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-zoo-yellow-600 focus:ring-zoo-yellow-600"
                        />
                        <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-white w-4 h-4 pointer-events-none" />
                      </div>
                      {isJanuary1st(bookingForm.visitDate) && (
                        <p className="text-zoo-yellow-500 text-sm mt-1 flex items-center">
                          <span className="inline-block w-2 h-2 bg-zoo-yellow-500 rounded-full mr-2"></span>
                          January 1st: Only Regular tickets available with special pricing!
                        </p>
                      )}
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="visitTime" className="text-white text-base">
                        Visiting Time *
                      </Label>
                      <Select
                        value={bookingForm.visitTime}
                        onValueChange={(value) => handleSelectChange("visitTime", value)}
                        disabled={!bookingForm.visitDate}
                      >
                        <SelectTrigger className="bg-white/10 border-white/20 text-white focus:ring-zoo-yellow-600 focus:border-zoo-yellow-600">
                          <SelectValue placeholder={bookingForm.visitDate ? "Select time" : "Select date first"} />
                        </SelectTrigger>
                        <SelectContent className="bg-zoo-teal-800 border-white/20 text-white">
                          {availableTimeSlots.map((time) => (
                            <SelectItem key={time} value={time} className="focus:bg-zoo-teal-700 focus:text-white">
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {bookingForm.visitDate && (
                        <p className="text-white/70 text-sm">
                          Operating hours: {getOperatingHours(bookingForm.visitDate).start} -{" "}
                          {getOperatingHours(bookingForm.visitDate).end}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Group Ticket Information */}
                  {bookingForm.ticketType === "group" && (
                    <div className="bg-blue-500/20 border border-blue-500/30 p-4 rounded-lg">
                      <div className="flex items-start gap-2">
                        <Info className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        <div className="text-blue-300 text-sm">
                          <p className="font-medium mb-1">Group Ticket Pricing:</p>
                          <ul className="space-y-1">
                            <li>• Adults: ₹25 each (minimum 10 required)</li>
                            <li>• Children: ₹5 each if 10 or more, ₹20 each if less than 10</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Student Ticket Information */}
                  {isStudentTicket && (
                    <div className="bg-green-500/20 border border-green-500/30 p-4 rounded-lg">
                      <div className="flex items-start gap-2">
                        <Info className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <div className="text-green-300 text-sm">
                          <p className="font-medium mb-1">Student Ticket Pricing:</p>
                          <ul className="space-y-1">
                            <li>
                              • {bookingForm.ticketType === "schoolStudent" ? "School" : "College"} Students: ₹
                              {getStudentPricing(bookingForm.ticketType)} per person
                            </li>
                            <li>• Valid student ID required during visit</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Visitor Count */}
                  <div className="space-y-6 transition-all duration-300">
                    {isStudentTicket ? (
                      // Student ticket - single field for number of persons
                      <div className="space-y-3">
                        <Label htmlFor="numPersons" className="text-white text-base">
                          Number of Persons
                        </Label>
                        <div className="flex items-center max-w-md">
                          <Button
                            type="button"
                            onClick={() =>
                              setBookingForm((prev) => ({
                                ...prev,
                                numPersons: Math.max(1, Number(prev.numPersons) - 1),
                              }))
                            }
                            className="bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-l-md rounded-r-none h-10 px-3"
                          >
                            -
                          </Button>
                          <Input
                            id="numPersons"
                            name="numPersons"
                            type="number"
                            min="1"
                            value={bookingForm.numPersons}
                            onChange={handleInputChange}
                            className="bg-white/10 border-white/20 text-white text-center rounded-none border-x-0"
                            style={{ WebkitAppearance: "none", MozAppearance: "textfield" }}
                          />
                          <Button
                            type="button"
                            onClick={() =>
                              setBookingForm((prev) => ({
                                ...prev,
                                numPersons: Number(prev.numPersons) + 1,
                              }))
                            }
                            className="bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-r-md rounded-l-none h-10 px-3"
                          >
                            +
                          </Button>
                        </div>
                        <p className="text-white/70 text-sm">₹{getStudentPricing(bookingForm.ticketType)} per person</p>
                      </div>
                    ) : (
                      // Regular/Group tickets - separate fields for adults and children
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <Label htmlFor="numAdults" className="text-white text-base">
                            Number of Adults {bookingForm.ticketType === "group" && "(Min 10)"}
                          </Label>
                          <div className="flex items-center">
                            <Button
                              type="button"
                              onClick={() =>
                                setBookingForm((prev) => ({
                                  ...prev,
                                  numAdults: Math.max(
                                    bookingForm.ticketType === "group" ? 10 : 1,
                                    Number(prev.numAdults) - 1,
                                  ),
                                }))
                              }
                              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-l-md rounded-r-none h-10 px-3"
                            >
                              -
                            </Button>
                            <Input
                              id="numAdults"
                              name="numAdults"
                              type="number"
                              min={bookingForm.ticketType === "group" ? "10" : "1"}
                              value={bookingForm.numAdults}
                              onChange={handleInputChange}
                              className="bg-white/10 border-white/20 text-white text-center rounded-none border-x-0"
                              style={{ WebkitAppearance: "none", MozAppearance: "textfield" }}
                            />
                            <Button
                              type="button"
                              onClick={() =>
                                setBookingForm((prev) => ({
                                  ...prev,
                                  numAdults: Number(prev.numAdults) + 1,
                                }))
                              }
                              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-r-md rounded-l-none h-10 px-3"
                            >
                              +
                            </Button>
                          </div>
                          <p className="text-white/70 text-sm">₹{priceInfo.adultPrice} per adult</p>
                        </div>

                        <div className="space-y-3">
                          <Label htmlFor="numChildren" className="text-white text-base">
                            Number of Children
                          </Label>
                          <div className="flex items-center">
                            <Button
                              type="button"
                              onClick={() =>
                                setBookingForm((prev) => ({
                                  ...prev,
                                  numChildren: Math.max(0, Number(prev.numChildren) - 1),
                                }))
                              }
                              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-l-md rounded-r-none h-10 px-3"
                            >
                              -
                            </Button>
                            <Input
                              id="numChildren"
                              name="numChildren"
                              type="number"
                              min="0"
                              value={bookingForm.numChildren}
                              onChange={handleInputChange}
                              className="bg-white/10 border-white/20 text-white text-center rounded-none border-x-0"
                              style={{ WebkitAppearance: "none", MozAppearance: "textfield" }}
                            />
                            <Button
                              type="button"
                              onClick={() =>
                                setBookingForm((prev) => ({
                                  ...prev,
                                  numChildren: Number(prev.numChildren) + 1,
                                }))
                              }
                              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-r-md rounded-l-none h-10 px-3"
                            >
                              +
                            </Button>
                          </div>
                          <p className="text-white/70 text-sm">
                            ₹{priceInfo.childPrice} per child
                            {bookingForm.ticketType === "group" && bookingForm.numChildren > 0 && (
                              <span className="text-zoo-yellow-400">
                                {" "}
                                ({bookingForm.numChildren >= 10 ? "Group rate" : "Regular rate"})
                              </span>
                            )}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Student ID Notice */}
                    {isStudentTicket && (
                      <div className="bg-zoo-yellow-500/20 border border-zoo-yellow-500/30 p-4 rounded-lg">
                        <p className="text-zoo-yellow-400 text-sm flex items-center">
                          <span className="inline-block w-2 h-2 bg-zoo-yellow-500 rounded-full mr-2"></span>
                          Please carry valid {bookingForm.ticketType === "schoolStudent" ? "school" : "college"} ID
                          during your visit.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Price Summary */}
                  <div className="bg-white/10 border border-white/20 p-6 rounded-xl mt-8">
                    <div className="space-y-3">
                      <div className="text-white/80 text-sm">{priceInfo.breakdown}</div>
                      <div className="border-t border-white/20 pt-3">
                        <div className="flex justify-between items-center">
                          <h4 className="font-heading text-xl text-white">Total Price:</h4>
                          <div className="text-2xl font-bold text-zoo-yellow-500">₹{calculateBookingTotal()}</div>
                        </div>
                        <p className="text-white/70 text-sm mt-1">{priceInfo.note}</p>
                      </div>
                    </div>
                  </div>

                  {/* Validation Errors - Above Confirm Button */}
                  {validationErrors.length > 0 && (
                    <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg transition-all duration-300">
                      <div className="text-red-300 text-sm space-y-2">
                        {validationErrors.map((error, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                            <span>{error}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex justify-center pt-6">
                    <Button
                      type="submit"
                      disabled={!isFormValid}
                      className="bg-zoo-yellow-600 hover:bg-zoo-yellow-500 text-zoo-teal-900 font-bold uppercase tracking-wide rounded-full transition-all duration-300 px-10 py-6 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      CONFIRM BOOKING
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Visit Information */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardHeader>
                  <Clock className="w-8 h-8 text-zoo-yellow-600 mb-2" />
                  <CardTitle className="font-heading text-xl">Opening Times</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">
                    <strong>Oct-Mar:</strong> 5:30 AM - 5:00 PM
                  </p>
                  <p className="mb-2">
                    <strong>Apr-Sep:</strong> 6:00 AM - 6:00 PM
                  </p>
                  <p className="text-sm text-white/80">Seasonal timings apply</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 text-white">
                <CardHeader>
                  <MapPin className="w-8 h-8 text-zoo-yellow-600 mb-2" />
                  <CardTitle className="font-heading text-xl">Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">Sanjay Gandhi Biological Park</p>
                  <p className="mb-2">Bailey Road, Patna</p>
                  <p className="mb-2">Bihar 800001</p>
                  <p className="text-sm text-white/80">Parking available</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 text-white">
                <CardHeader>
                  <Users className="w-8 h-8 text-zoo-yellow-600 mb-2" />
                  <CardTitle className="font-heading text-xl">Special Rates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">Group discounts available</p>
                  <p className="mb-2">Student rates: School ₹10, College ₹30</p>
                  <p className="mb-2">January 1st special pricing</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-2 border-white text-white hover:bg-white hover:text-zoo-teal-700"
                  >
                    Contact Us
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Experience */}
        <section className="py-16 bg-zoo-teal-700">
          <FeaturedContentCard
            title="VIP Safari"
            subtitle="experience"
            description="Get up close with our amazing animals on a guided VIP safari tour. Includes behind-the-scenes access, animal feeding experiences, and exclusive photo opportunities with our conservation team."
            image="/placeholder.svg?height=400&width=600"
            href="/experiences/vip-safari"
            buttonText="BOOK VIP EXPERIENCE"
          />
        </section>
      </main>

      <Footer />
    </>
  )
}
