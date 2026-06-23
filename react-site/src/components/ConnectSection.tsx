import { useEffect, useRef, useState } from "react";
import { Mail, ExternalLink } from "lucide-react";
import { toast } from "sonner";

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

const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/christiansglobal",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://instagram.com/christiansglobal",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/christiansglobl",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    name: "Threads",
    url: "https://www.threads.com/@christiansglobal",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.187.408-2.26 1.33-3.017.88-.724 2.104-1.14 3.546-1.205 1.068-.048 2.063.043 2.973.267.02-.94-.09-1.79-.332-2.54-.39-1.21-1.13-1.85-2.2-1.9-.82-.04-1.58.2-2.15.67-.5.41-.82.97-.93 1.62l-2.04-.38c.17-.98.63-1.84 1.34-2.5.88-.82 2.08-1.26 3.46-1.26h.17c1.6.08 2.8.72 3.56 1.9.6.93.9 2.16.9 3.66v.3c1.07.58 1.9 1.39 2.43 2.39.78 1.49.88 4.01-1.15 6.03-1.75 1.74-3.96 2.54-7.17 2.57zm-1.65-7.7c-1.02.05-1.83.33-2.39.83-.5.44-.73 1-.7 1.66.06 1.04.95 1.86 2.37 1.86h.18c1.2-.07 2.07-.52 2.65-1.37.48-.7.78-1.67.89-2.87-.84-.2-1.78-.3-2.76-.25l-.24.04z"/>
      </svg>
    ),
  },
  {
    name: "Bluesky",
    url: "https://bsky.app/profile/christiansglobal.bsky.social",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.785 2.627 3.6 3.503 6.204 3.258-.043.012-.086.024-.13.036-3.397.965-7.04 2.95-3.91 8.396C5.85 26.066 11.03 20.569 12 17.5c.97 3.069 5.905 8.288 9.213 4.437 3.13-5.446-.513-7.43-3.91-8.396-.044-.012-.087-.024-.13-.036 2.604.245 5.42-.631 6.204-3.258.246-.828.624-5.788.624-6.479 0-.688-.139-1.86-.902-2.203-.659-.299-1.664-.621-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8z"/>
      </svg>
    ),
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@christians-global",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    name: "Spotify — Podcast",
    url: "https://open.spotify.com/show/6tRi4gH4nXfu8uMd5btnxX",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
      </svg>
    ),
  },
  {
    name: "Telegram — Join Live Chat",
    url: "https://t.me/+7r_3aGWryW8wOTRk",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    ),
  },
];

export default function ConnectSection() {
  const { ref, inView } = useInView(0.1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for reaching out! We'll be in touch soon.");
  };

  return (
    <section id="connect" className="relative py-24 lg:py-32 bg-charcoal overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/2 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="container relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p
            className="text-gold text-xs tracking-[0.3em] uppercase mb-4 font-semibold"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Get Connected
          </p>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-cream leading-tight mb-6 transition-all duration-1000 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ fontFamily: "var(--font-display)" }}
          >
            Join Our <span className="text-gold italic">Global Family</span>
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
          <p
            className="text-cream/60 text-base lg:text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Follow us on social media, reach out via email, or send us a message.
            We would love to hear from you and welcome you into our community.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Social links + email */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <h3
              className="text-xl font-bold text-cream mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Find Us Online
            </h3>

            <div className="space-y-3 mb-8">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-sm border border-cream/8 bg-cream/3 hover:bg-cream/6 hover:border-gold/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-sm bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold/20 transition-colors duration-300">
                    {link.icon}
                  </div>
                  <span
                    className="text-cream/80 text-sm font-medium flex-1"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {link.name}
                  </span>
                  <ExternalLink className="w-4 h-4 text-cream/30 group-hover:text-gold/60 transition-colors duration-300" />
                </a>
              ))}
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 p-4 rounded-sm border border-gold/20 bg-gold/5">
              <div className="w-10 h-10 rounded-sm bg-gold/15 flex items-center justify-center">
                <Mail className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="text-cream/50 text-xs tracking-wider uppercase mb-0.5" style={{ fontFamily: "var(--font-body)" }}>
                  Email Us
                </p>
                <a
                  href="mailto:christiansglobalcommunity@gmail.com"
                  className="text-gold text-sm font-medium hover:text-gold-light transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  christiansglobalcommunity@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div
            id="send-message"
            className={`transition-all duration-1000 delay-400 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <h3
              className="text-xl font-bold text-cream mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  className="block text-cream/50 text-xs tracking-wider uppercase mb-2"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-cream/5 border border-cream/10 rounded-sm text-cream text-sm focus:border-gold/40 focus:outline-none focus:ring-1 focus:ring-gold/20 transition-all duration-300 placeholder:text-cream/20"
                  placeholder="Enter your name"
                  style={{ fontFamily: "var(--font-body)" }}
                />
              </div>
              <div>
                <label
                  className="block text-cream/50 text-xs tracking-wider uppercase mb-2"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-cream/5 border border-cream/10 rounded-sm text-cream text-sm focus:border-gold/40 focus:outline-none focus:ring-1 focus:ring-gold/20 transition-all duration-300 placeholder:text-cream/20"
                  placeholder="your@email.com"
                  style={{ fontFamily: "var(--font-body)" }}
                />
              </div>
              <div>
                <label
                  className="block text-cream/50 text-xs tracking-wider uppercase mb-2"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-cream/5 border border-cream/10 rounded-sm text-cream text-sm focus:border-gold/40 focus:outline-none focus:ring-1 focus:ring-gold/20 transition-all duration-300 placeholder:text-cream/20 resize-none"
                  placeholder="Share your thoughts, prayer requests, or questions..."
                  style={{ fontFamily: "var(--font-body)" }}
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3.5 bg-gold text-charcoal font-semibold text-sm tracking-wide uppercase rounded-sm hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
