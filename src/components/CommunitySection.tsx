import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";

const COMMUNITY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663399093717/MGB3hZiSUzCzSYWUYFZFfE/community-section-WPchQKuLXgc9qcjnCuLojr.webp";

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

const weeklyContent = [
  {
    day: "Monday",
    title: "Monday Motivation",
    description: "Start the week with an inspiring word to carry you through.",
  },
  {
    day: "Tuesday",
    title: "Tuesday Truth Check",
    description: "Dive deep into biblical truths that ground and strengthen your faith.",
  },
  {
    day: "Wednesday",
    title: "Wednesday Stay the Course",
    description: "Mid-week encouragement to persevere and keep your eyes on Christ.",
  },
  {
    day: "Thursday",
    title: "Thursday Thankfulness",
    description: "Cultivate a heart of gratitude through reflection and praise.",
  },
  {
    day: "Friday",
    title: "Friday Fellowship",
    description: "Connect with fellow believers and share in the joy of community.",
  },
  {
    day: "Saturday",
    title: "Saturday Make Room",
    description: "Create space in your heart and life for God to move and work in new ways.",
  },
  {
    day: "Sunday",
    title: "Sunday Rise Again",
    description: "Celebrate the resurrection power that renews and restores us each week.",
  },
];

export default function CommunitySection() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="community" className="relative overflow-hidden">
      {/* Full-bleed community image */}
      <div className="relative h-[50vh] lg:h-[60vh]">
        <img
          src={COMMUNITY_IMG}
          alt="Community gathering at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-cream" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <p
              className="text-gold-light text-xs tracking-[0.3em] uppercase mb-3 font-semibold"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Our Community
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
              style={{ fontFamily: "var(--font-display)", textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
            >
              Stay the <span className="text-gold italic">Course</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Weekly content cards */}
      <div ref={ref} className="bg-cream py-16 lg:py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p
              className="text-charcoal-light text-base lg:text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              Throughout the week, we share devotional content,{" "}
              <Link href="/prayer-community" className="text-gold hover:text-gold-light font-semibold transition-colors">
                prayer support
              </Link>
              , and biblical truth
              to encourage believers and help you stay rooted in your faith journey. Our{" "}
              <Link href="/fellowship" className="text-gold hover:text-gold-light font-semibold transition-colors">
                community fellowship
              </Link>
              {" "}provides daily inspiration and connection with fellow believers worldwide.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-7 gap-4 lg:gap-3">
            {weeklyContent.map((item, i) => (
              <div
                key={item.day}
                className={`group relative p-6 bg-white rounded-sm border border-gold/10 hover:border-gold/30 shadow-sm hover:shadow-md transition-all duration-500 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Day label */}
                <p
                  className="text-gold text-[10px] tracking-[0.25em] uppercase font-bold mb-3"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {item.day}
                </p>
                <h3
                  className="text-base font-bold text-charcoal mb-2 leading-snug"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-charcoal-light/70 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {item.description}
                </p>
                {/* Bottom gold accent */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold/0 group-hover:bg-gold/40 transition-all duration-500 rounded-b-sm" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
