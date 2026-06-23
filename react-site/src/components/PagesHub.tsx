import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { BookOpen, Users, Heart, Bookmark, ArrowRight } from "lucide-react";

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

const pages = [
  {
    id: 1,
    title: "About Christians Global",
    description: "Learn about our mission, values, and how we're uniting believers across every nation in faith.",
    icon: BookOpen,
    href: "/about",
    color: "bg-amber-50 border-amber-200 hover:bg-amber-100",
  },
  {
    id: 2,
    title: "Global Prayer Community",
    description: "Discover how we unite in prayer across nations and cultures, interceding for one another.",
    icon: Heart,
    href: "/prayer-community",
    color: "bg-rose-50 border-rose-200 hover:bg-rose-100",
  },
  {
    id: 3,
    title: "Christian Fellowship Worldwide",
    description: "Explore meaningful connections with believers worldwide who share your faith and journey.",
    icon: Users,
    href: "/fellowship",
    color: "bg-blue-50 border-blue-200 hover:bg-blue-100",
  },
  {
    id: 4,
    title: "Faith Resources",
    description: "Access curated Bible studies, prayer journals, and spiritual growth materials.",
    icon: Bookmark,
    href: "/resources",
    color: "bg-indigo-50 border-indigo-200 hover:bg-indigo-100",
  },
];

export default function PagesHub() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="pages-hub" className="relative py-24 lg:py-32 bg-cream overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/2 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="container relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <p
            className="text-gold text-xs tracking-[0.3em] uppercase mb-4 font-semibold"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Explore Our Community
          </p>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight mb-6 transition-all duration-1000 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ fontFamily: "var(--font-display)" }}
          >
            Learn More About <span className="text-gold italic">Christians Global</span>
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
          <p
            className="text-charcoal/60 text-base lg:text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Discover the different aspects of our global Christian community and find what resonates with your faith journey.
          </p>
        </div>

        {/* Pages grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {pages.map((page, i) => {
            const IconComponent = page.icon;
            return (
              <Link
                key={page.id}
                href={page.href}
                className={`group relative p-6 lg:p-5 rounded-sm border-2 transition-all duration-500 cursor-pointer block ${page.color} ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-sm bg-charcoal/5 flex items-center justify-center mb-4 group-hover:bg-charcoal/10 transition-colors duration-300">
                  <IconComponent className="w-6 h-6 text-charcoal" />
                </div>

                {/* Title */}
                <h3
                  className="text-lg font-bold text-charcoal mb-2 leading-snug"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {page.title}
                </h3>

                {/* Description */}
                <p
                  className="text-charcoal/60 text-sm leading-relaxed mb-4"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {page.description}
                </p>

                {/* Arrow indicator */}
                <div className="flex items-center text-charcoal font-semibold text-sm group-hover:translate-x-1 transition-transform duration-300">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </div>

                {/* Bottom gold accent */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold/0 group-hover:bg-gold/40 transition-all duration-500 rounded-b-sm" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
