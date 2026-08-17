"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Calendar, ChevronLeft, ChevronRight, Info, X } from "lucide-react";

export default function BookingModal() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const isOpen = searchParams.has("book");

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentWeekStart, setCurrentWeekStart] = useState<Date>(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    // Start of the week (Monday)
    const day = today.getDay() || 7; 
    const weekStart = new Date(today);
    if (day !== 1) {
      weekStart.setDate(today.getDate() - (day - 1));
    }
    return weekStart;
  });

  // Generate 7 days (Mon-Sun) from currentWeekStart
  const weekDays = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date(currentWeekStart);
    d.setDate(d.getDate() + i);
    return d;
  });

  const nextWeek = () => {
    const d = new Date(currentWeekStart);
    d.setDate(d.getDate() + 7);
    setCurrentWeekStart(d);
  };

  const prevWeek = () => {
    const d = new Date(currentWeekStart);
    d.setDate(d.getDate() - 7);
    setCurrentWeekStart(d);
  };

  const close = () => {
    router.replace(pathname, { scroll: false });
  };

  if (!isOpen) return null;

  const monthYear = currentWeekStart.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  const slots = [
    "09:00 AM", "10:00 AM", "11:00 AM",
    "12:00 PM", "01:00 PM", "02:00 PM",
    "03:00 PM", "04:00 PM", "05:00 PM",
    "06:00 PM", "07:00 PM", "08:00 PM",
  ];

  // Disable past times (2 hrs buffer)
  const isSlotDisabled = (slot: string) => {
    if (!selectedDate) return true;
    
    const [time, ampm] = slot.split(" ");
    let [hours, minutes] = time.split(":").map(Number);
    if (ampm === "PM" && hours !== 12) hours += 12;
    if (ampm === "AM" && hours === 12) hours = 0;

    const slotDate = new Date(selectedDate);
    slotDate.setHours(hours, minutes, 0, 0);

    const now = new Date();
    // Time slot must be at least 2 hours ahead of the current time
    const twoHoursFromNow = new Date(now.getTime() + 2 * 60 * 60 * 1000);

    return slotDate < twoHoursFromNow;
  };

  const handleBook = () => {
    if (!selectedDate || !selectedTime) return;
    const dateStr = selectedDate.toLocaleString("default", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    const message = `Hi Topgear HQ, I would like to book a drop-off slot.

*Date:* ${dateStr}
*Time:* ${selectedTime}`;
    const whatsappUrl = `https://wa.me/918105156999?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
    close();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={close}
      />
      
      {/* Modal */}
      <div className="relative bg-[#161616] border border-white/10 rounded-2xl w-full max-w-2xl max-h-[95vh] md:max-h-[90vh] overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-[#FF2E2E]" />
            <h2 className="text-white text-lg font-bold tracking-tight">
              Select Drop-off Time
            </h2>
          </div>
          <button 
            onClick={close}
            className="cursor-pointer text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 md:p-8 flex flex-col gap-6 md:gap-8 overflow-y-auto">
          {/* Calendar Section */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <button 
                onClick={prevWeek}
                className="cursor-pointer w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-white font-semibold text-sm">
                {monthYear}
              </span>
              <button 
                onClick={nextWeek}
                className="cursor-pointer w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 md:gap-2">
              {weekDays.map((day, i) => {
                const now = new Date();
                const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
                const isPastDay = day < today;
                const isSelected = selectedDate?.toDateString() === day.toDateString();
                const dayName = day.toLocaleString("default", { weekday: "short" });
                const dateNum = day.getDate();
                
                return (
                  <button
                    key={i}
                    disabled={isPastDay}
                    onClick={() => {
                      setSelectedDate(day);
                      setSelectedTime(null); // reset time on new date
                    }}
                    className={`cursor-pointer flex flex-col items-center gap-0.5 sm:gap-1 md:gap-2 p-1.5 sm:p-2 md:p-3 rounded-xl border transition-all ${
                      isPastDay
                        ? "border-transparent text-gray-700 cursor-not-allowed"
                        : isSelected
                        ? "border-[#FF2E2E] bg-[#FF2E2E]/10 text-white"
                        : "border-transparent text-gray-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span className="text-[8px] sm:text-[10px] md:text-xs font-medium uppercase tracking-wider">
                      {dayName}
                    </span>
                    <span className={`text-xs sm:text-sm md:text-lg font-bold ${isSelected ? "text-white" : ""}`}>
                      {dateNum}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="h-px bg-white/10 w-full" />

          {/* Time Slots Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-sm font-semibold tracking-wide">
              Available Slots {selectedDate ? `(${selectedDate.toLocaleString("default", { month: "short", day: "numeric" })})` : ""}
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {slots.map((slot, i) => {
                const disabled = isSlotDisabled(slot);
                const isSelected = selectedTime === slot;
                
                return (
                  <button
                    key={i}
                    disabled={disabled || !selectedDate}
                    onClick={() => setSelectedTime(slot)}
                    className={`cursor-pointer py-3 rounded-lg text-sm font-bold transition-all border ${
                      !selectedDate 
                        ? "border-white/5 bg-white/5 text-gray-600 cursor-not-allowed"
                        : disabled
                        ? "border-white/5 bg-white/5 text-gray-500 line-through cursor-not-allowed"
                        : isSelected
                        ? "border-[#FF2E2E] bg-[#FF2E2E] text-white shadow-[0_0_15px_rgba(255,46,46,0.4)]"
                        : "border-white/10 bg-[#1a1a1a] text-gray-300 hover:bg-white/10 hover:border-white/20"
                    }`}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-[#1a1a1a] border border-white/5 rounded-xl p-4 flex items-start gap-3">
            <Info className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Drop-off typically takes 15-30 minutes for a thorough pre-inspection of the vehicle.
            </p>
          </div>
          
          {/* Action Button */}
          {selectedDate && selectedTime && (
            <button
              onClick={handleBook}
              className="cursor-pointer mt-2 w-full bg-gradient-to-r from-[#FF2E2E] to-[#cc2525] hover:from-[#e62929] hover:to-[#b32020] text-white py-4 rounded-xl font-bold tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(255,46,46,0.4)] flex items-center justify-center gap-2"
            >
              Continue to WhatsApp
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
          {/* Bottom padding for mobile scrolling */}
          <div className="h-4 md:h-0 shrink-0" />
        </div>
      </div>
    </div>
  );
}
