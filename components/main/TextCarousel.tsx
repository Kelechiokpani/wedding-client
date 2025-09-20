"use client";
import React from "react";

const messages = [
    "💍 Welcome to   Sophia ❤️ Daniel Wedding Celebration — RSVP Now & Join the Love Story! 💍",
    "🥂 Guests are kindly requested to check in at the reception 🥂",
    "🎉 Let’s make memories that last forever 🎉",
    "📸 Don’t forget to take pictures & tag us 📸",
];

export default function TextCarousel() {
    return (
        <div className="w-full overflow-hidden bg-yellow-100 border-b border-pink-300">
            <div className="flex whitespace-nowrap animate-marquee">
                {[...messages, ...messages].map((msg, i) => (
                    <span key={i} className="mx-8 py-2 text-pink-700 font-medium">
            {msg}
          </span>
                ))}
            </div>
        </div>
    );
}
