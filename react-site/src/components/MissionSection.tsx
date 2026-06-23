import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { Globe, BookOpen, Heart, Users } from "lucide-react";

const MISSION_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663399093717/MGB3hZiSUzCzSYWUYFZFfE/mission-section-DKpd7nmWvFMMGfcUetDQr2.webp";

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

const pillars = [
  {
    icon: Globe,
    title: "Global Unity",
    description:
      "Bridging nations and cultures through the shared foundation of faith in Christ, fostering connections that transcend borders.",
  },
  {
    icon: BookOpen,
    title: "Biblical Truth",
    description:
      "Grounding our community in Scripture, encouraging daily devotion and a deeper understanding of God's Word.",
  },
  {
    icon: Heart,
    title: "Compassionate Love",
    description:
      "Demonstrating Christ's love through acts of service, support, and genuine care for one another.",
  },
  {
    icon: Users,
    title: "Community Building",
    description:
      "Creating spaces for believers to gather, share, grow, and encourage one another in their walk of faith.",
  },
];

export default function MissionSection() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="mission" className="relative py-24 lg:py-32 bg-charcoal overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(212,168,83,0.15) 0%, transparent 50%),
                            radial-gradient(circle at 75% 75%, rgba(212,168,83,0.1) 0%, transparent 50%)`
        }} />
      </div>

      <div ref={ref} className="container relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <p
            className="text-gold text-xs tracking-[0.3em] uppercase mb-4 font-semibold"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Our Mission
          </p>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-cream leading-tight mb-6 transition-all duration-1000 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ fontFamily: "var(--font-display)" }}
          >
            Christ at the{" "}
            <span className="text-gold italic">Centre</span>
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
          <p
            className="text-cream/60 text-base lg:text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Our mission is to unite the global body of Christ through{" "}
            <Link href="/prayer-community" className="text-gold hover:text-gold-light font-semibold transition-colors">
              prayer
            </Link>
            , encouragement, and{" "}
            <Link href="/fellowship" className="text-gold hover:text-gold-light font-semibold transition-colors">
              fellowship
            </Link>
            .
            We empower believers to stay the course in their faith journey, support one another with compassion,
            and share the transformative message of Christ across every nation.
          </p>
        </div>

        {/* Two-column: Image + Pillars */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Mission image */}
          <div
            className={`lg:col-span-2 transition-all duration-1000 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="relative max-w-sm mx-auto lg:mx-0">
              <img
                src={MISSION_IMG}
                alt="Globe with cross symbolizing global Christian mission"
                className="w-full rounded-sm shadow-2xl"
              />
              <div className="absolute -top-3 -left-3 w-full h-full border border-gold/20 rounded-sm -z-10" />
            </div>
          </div>

          {/* Pillars grid */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6 lg:gap-8">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className={`group p-6 lg:p-8 rounded-sm border border-cream/8 bg-cream/3 hover:bg-cream/6 hover:border-gold/20 transition-all duration-500 ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${300 + i * 150}ms` }}
              >
                <div className="w-12 h-12 rounded-sm bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                  <pillar.icon className="w-6 h-6 text-gold" />
                </div>
                <h3
                  className="text-lg font-bold text-cream mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {pillar.title}
                </h3>
                <p
                  className="text-cream/50 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
