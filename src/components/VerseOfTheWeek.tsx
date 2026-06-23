/*
 * Verse of the Week — Banner Component
 * Design: "Sacred Warmth" — Liturgical Modernism
 * A warm, elegant banner that rotates weekly through curated Scripture verses.
 * Uses a subtle gold-accented design with Playfair Display for the verse text.
 */

import { useState, useEffect, useMemo } from "react";
import { BookOpen, ChevronLeft, ChevronRight } from "lucide-react";

interface Verse {
  text: string;
  reference: string;
}

const verses: Verse[] = [
  {
    text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.",
    reference: "Jeremiah 29:11",
  },
  {
    text: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
    reference: "Proverbs 3:5-6",
  },
  {
    text: "I can do all this through him who gives me strength.",
    reference: "Philippians 4:13",
  },
  {
    text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
    reference: "Joshua 1:9",
  },
  {
    text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
    reference: "Romans 8:28",
  },
  {
    text: "The Lord is my shepherd, I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul.",
    reference: "Psalm 23:1-3",
  },
  {
    text: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
    reference: "Isaiah 40:31",
  },
  {
    text: "Come to me, all you who are weary and burdened, and I will give you rest.",
    reference: "Matthew 11:28",
  },
  {
    text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.",
    reference: "Psalm 34:18",
  },
  {
    text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
    reference: "Philippians 4:6",
  },
  {
    text: "For where two or three gather in my name, there am I with them.",
    reference: "Matthew 18:20",
  },
  {
    text: "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
    reference: "Joshua 1:9",
  },
];

function getWeekNumber(): number {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  const diff = now.getTime() - start.getTime();
  const oneWeek = 1000 * 60 * 60 * 24 * 7;
  return Math.floor(diff / oneWeek);
}

export default function VerseOfTheWeek() {
  const weekIndex = useMemo(() => getWeekNumber() % verses.length, []);
  const [currentIndex, setCurrentIndex] = useState(weekIndex);
  const [isAnimating, setIsAnimating] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const navigateVerse = (direction: "prev" | "next") => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) =>
        direction === "next"
          ? (prev + 1) % verses.length
          : (prev - 1 + verses.length) % verses.length
      );
      setTimeout(() => setIsAnimating(false), 400);
    }, 200);
  };

  const verse = verses[currentIndex];

  return (
    <section
      className={`relative overflow-hidden transition-all duration-1000 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        background:
          "linear-gradient(135deg, oklch(0.18 0.02 260) 0%, oklch(0.22 0.03 55 / 0.3) 50%, oklch(0.18 0.02 260) 100%)",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="absolute top-1/2 left-8 -translate-y-1/2 w-32 h-32 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-8 -translate-y-1/2 w-32 h-32 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 py-8 lg:py-10">
        <div className="flex items-center justify-center gap-4 lg:gap-8 max-w-4xl mx-auto">
          {/* Previous button */}
          <button
            onClick={() => navigateVerse("prev")}
            className="flex-shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold/50 hover:text-gold hover:border-gold/40 hover:bg-gold/5 transition-all duration-300"
            aria-label="Previous verse"
          >
            <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5" />
          </button>

          {/* Verse content */}
          <div className="flex-1 text-center min-w-0">
            {/* Label */}
            <div className="flex items-center justify-center gap-2 mb-3">
              <BookOpen className="w-3.5 h-3.5 text-gold/70" />
              <span
                className="text-gold/70 text-[10px] lg:text-xs tracking-[0.3em] uppercase font-semibold"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Verse of the Week
              </span>
              <BookOpen className="w-3.5 h-3.5 text-gold/70" />
            </div>

            {/* Verse text */}
            <blockquote
              className={`transition-all duration-400 ${
                isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
              }`}
            >
              <p
                className="text-cream/85 text-base sm:text-lg lg:text-xl italic leading-relaxed mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                &ldquo;{verse.text}&rdquo;
              </p>
              <cite
                className="text-gold text-xs lg:text-sm not-italic font-medium tracking-wide"
                style={{ fontFamily: "var(--font-body)" }}
              >
                — {verse.reference}
              </cite>
            </blockquote>
          </div>

          {/* Next button */}
          <button
            onClick={() => navigateVerse("next")}
            className="flex-shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold/50 hover:text-gold hover:border-gold/40 hover:bg-gold/5 transition-all duration-300"
            aria-label="Next verse"
          >
            <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
