/*
 * Prayer Wall Component (Email-based with Formspree)
 * Design: "Sacred Warmth" — Liturgical Modernism
 * Allows visitors to submit prayer requests via email
 */

import { useState, useEffect, useRef } from "react";
import { Heart, Send, Loader2, CheckCircle } from "lucide-react";
import { toast } from "sonner";

export default function PrayerWallFormspree() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    request: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Intersection observer for scroll animation
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.request.trim()) {
      toast.error("Please fill in name and prayer request");
      return;
    }

    if (formData.email && !formData.email.includes("@")) {
      toast.error("Please enter a valid email");
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit to Formspree
      const response = await fetch("https://formspree.io/f/xyzabc123", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email || "anonymous@prayers.local",
          request: formData.request,
          _subject: `New Prayer Request from ${formData.name}`,
        }),
      });

      if (response.ok) {
        toast.success("Prayer request submitted! Thank you for sharing.");
        setFormData({ name: "", email: "", request: "" });
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        toast.error("Failed to submit prayer request. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Failed to submit prayer request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="prayer-wall" className="relative py-24 lg:py-32 bg-cream overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold/2 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="container relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p
            className="text-gold text-xs tracking-[0.3em] uppercase mb-4 font-semibold"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Community Prayer
          </p>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight mb-6 transition-all duration-1000 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ fontFamily: "var(--font-display)" }}
          >
            Prayer <span className="text-gold italic">Wall</span>
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
          <p
            className="text-charcoal/60 text-base lg:text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Share your prayer requests with our community. We believe in the power of collective prayer and intercession.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Submit form */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <h3
              className="text-xl font-bold text-charcoal mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Share Your Request
            </h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 px-6 bg-white rounded-sm border border-gold/20">
                <CheckCircle className="w-12 h-12 text-gold mb-4" />
                <p
                  className="text-charcoal font-semibold text-center mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Prayer Submitted!
                </p>
                <p
                  className="text-charcoal/60 text-sm text-center"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Thank you for sharing your prayer request. Our community is praying with you.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    className="block text-charcoal/70 text-xs tracking-wider uppercase mb-2"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-gold/20 rounded-sm text-charcoal text-sm focus:border-gold/40 focus:outline-none focus:ring-1 focus:ring-gold/20 transition-all duration-300 placeholder:text-charcoal/30"
                    placeholder="Enter your name"
                    style={{ fontFamily: "var(--font-body)" }}
                  />
                </div>

                <div>
                  <label
                    className="block text-charcoal/70 text-xs tracking-wider uppercase mb-2"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-gold/20 rounded-sm text-charcoal text-sm focus:border-gold/40 focus:outline-none focus:ring-1 focus:ring-gold/20 transition-all duration-300 placeholder:text-charcoal/30"
                    placeholder="your@email.com"
                    style={{ fontFamily: "var(--font-body)" }}
                  />
                </div>

                <div>
                  <label
                    className="block text-charcoal/70 text-xs tracking-wider uppercase mb-2"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Prayer Request
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.request}
                    onChange={(e) => setFormData({ ...formData, request: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-gold/20 rounded-sm text-charcoal text-sm focus:border-gold/40 focus:outline-none focus:ring-1 focus:ring-gold/20 transition-all duration-300 placeholder:text-charcoal/30 resize-none"
                    placeholder="Share your prayer request..."
                    style={{ fontFamily: "var(--font-body)" }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-3.5 bg-gold text-charcoal font-semibold text-sm tracking-wide uppercase rounded-sm hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit Prayer
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Info section */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <h3
              className="text-xl font-bold text-charcoal mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              How It Works
            </h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gold/20">
                    <span className="text-gold font-bold" style={{ fontFamily: "var(--font-display)" }}>1</span>
                  </div>
                </div>
                <div>
                  <h4
                    className="font-semibold text-charcoal mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Share Your Request
                  </h4>
                  <p
                    className="text-charcoal/60 text-sm"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                  >
                    Submit your prayer request with your name and prayer details. Your email is optional.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gold/20">
                    <span className="text-gold font-bold" style={{ fontFamily: "var(--font-display)" }}>2</span>
                  </div>
                </div>
                <div>
                  <h4
                    className="font-semibold text-charcoal mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    We Receive & Pray
                  </h4>
                  <p
                    className="text-charcoal/60 text-sm"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                  >
                    Your prayer request is sent to our community leaders who intercede on your behalf.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gold/20">
                    <span className="text-gold font-bold" style={{ fontFamily: "var(--font-display)" }}>3</span>
                  </div>
                </div>
                <div>
                  <h4
                    className="font-semibold text-charcoal mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Trust God's Plan
                  </h4>
                  <p
                    className="text-charcoal/60 text-sm"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                  >
                    We trust in the power of prayer and God's faithfulness to answer according to His will.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-gold/10 rounded-sm border border-gold/20">
              <p
                className="text-charcoal/70 text-sm italic"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                "Therefore I tell you, whatever you ask for in prayer, believe that you have received it, and it will be yours." — Mark 11:24
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
