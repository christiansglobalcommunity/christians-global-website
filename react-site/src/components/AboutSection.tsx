import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";

const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663399093717/MGB3hZiSUzCzSYWUYFZFfE/about-section-Gxbt3k2LY4XYSYH6iErME5.webp";

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function AboutSection() {
  const { ref, inView } = useInView(0.15);

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-cream overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div
            className={`relative transition-all duration-1000 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative">
              <img
                src={ABOUT_IMG}
                alt="Diverse hands coming together in unity"
                className="w-full rounded-sm shadow-2xl shadow-charcoal/20"
              />
              {/* Gold accent border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/30 rounded-sm -z-10" />
            </div>
          </div>

          {/* Text side */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <p
              className="text-gold-dark text-xs tracking-[0.3em] uppercase mb-4 font-semibold"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Who We Are
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              United in Faith,{" "}
              <span className="text-gold-dark italic">Diverse in Nations</span>
            </h2>

            <div className="w-16 h-px bg-gradient-to-r from-gold to-transparent mb-6" />

            <p
              className="text-charcoal-light text-base lg:text-lg leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              Christians Global is a faith-based community dedicated to uniting believers from every corner of the world.
              We create spaces for{" "}
              <Link href="/fellowship" className="text-gold hover:text-gold-light font-semibold transition-colors">
                Christian fellowship
              </Link>
              , prayer, and encouragement where believers can grow together
              regardless of nationality or background. We believe that the body of Christ transcends borders, languages,
              and cultures — and that together, we are stronger in our shared faith and mission.
            </p>
            <p
              className="text-charcoal-light text-base lg:text-lg leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              Founded on the principle that Christ is at the centre of all we do, we
              seek to encourage, equip, and empower Christians across the globe to live
              out their faith with boldness and love.
            </p>

            {/* Scripture quote */}
            <blockquote className="border-l-2 border-gold pl-6 py-2">
              <p
                className="text-charcoal italic text-lg leading-relaxed"
                style={{ fontFamily: "var(--font-display)" }}
              >
                "For just as each of us has one body with many members, and these members
                do not all have the same function, so in Christ we, though many, form one
                body."
              </p>
              <cite
                className="text-gold-dark text-sm mt-3 block not-italic font-medium"
                style={{ fontFamily: "var(--font-body)" }}
              >
                — Romans 12:4-5
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
