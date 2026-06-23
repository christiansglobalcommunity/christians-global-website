import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663399093717/MGB3hZiSUzCzSYWUYFZFfE/hero-bg-AUcfcKqPN7KXwdznZwGjQK.webp";

export default function HeroSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const heading = headingRef.current;
    const subtitle = subtitleRef.current;
    if (heading) {
      heading.style.opacity = "0";
      heading.style.transform = "translateY(30px)";
      setTimeout(() => {
        heading.style.transition = "opacity 1s ease, transform 1s ease";
        heading.style.opacity = "1";
        heading.style.transform = "translateY(0)";
      }, 300);
    }
    if (subtitle) {
      subtitle.style.opacity = "0";
      subtitle.style.transform = "translateY(20px)";
      setTimeout(() => {
        subtitle.style.transition = "opacity 1s ease, transform 1s ease";
        subtitle.style.opacity = "1";
        subtitle.style.transform = "translateY(0)";
      }, 700);
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt="Golden wheat field at sunset symbolizing global Christian unity and faith"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/40 to-charcoal/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/30 via-transparent to-charcoal/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center px-4 max-w-4xl mx-auto">

        {/* Main heading */}
        <h1
          ref={headingRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream leading-tight mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          One Body,{" "}
          <span className="text-gold italic">Many Nations</span>
          <br />
          <span className="text-cream/90">Christ at the Centre</span>
        </h1>

        {/* Gold rule */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-cream/70 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          Uniting believers across every nation, culture, and language through the transformative power of faith in Jesus Christ.
          <br className="hidden sm:block" />
          <br className="hidden sm:block" />
          A global Christian media publisher connecting believers from every nation to share faith, prayer, encouragement, and the message of Jesus Christ.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#about"
            className="px-8 py-3.5 bg-gold text-charcoal font-semibold text-sm tracking-wide uppercase rounded-sm hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Discover Our Mission
          </a>
          <a
            href="#connect"
            className="px-8 py-3.5 border border-cream/30 text-cream font-medium text-sm tracking-wide uppercase rounded-sm hover:border-gold hover:text-gold transition-all duration-300"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Join the Community
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-cream/40 text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-body)" }}>
          Scroll
        </span>
        <ChevronDown className="w-5 h-5 text-gold/60" />
      </div>
    </section>
  );
}
