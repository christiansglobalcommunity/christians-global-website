const LOGO_URL = "https://private-us-east-1.manuscdn.com/user_upload_by_module/session_file/310519663399093717/qxKUmcMelqkDzVbl.webp?Expires=1804070803&Signature=JE6vbxDMmS3b1xybzCtZQi6hvIJwhyKVhdhevcDfDuiGppzrEUZOYi4mHpO7WBY5n3SWULitzN6LRmCtahr9LPti7CDw2voJOwofdKiybUEFcVmkAnrjgiu9WwSiMK5J0-tSlWRx1ho4jHKR39PG68TWw1Ksfq10~pmPgbpQ1yMq6PfKLbtqZ~YVo12-vboWvkre9JGQ4MmxzQFMv1y6XbKlaRCET4CPAwTGWK-luy~QnwlFZEV3wlNYVG-1HzcfsBquIlmMetEQlaZye9CGnDuKjyAUq48fD7a47TAe4wYSKCBZTp1608G9OtZu80QX166t0MiiYKwOjDS2wFVBNw__&Key-Pair-Id=K2HSFNDJXOU9YS";

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-gold/10">
      {/* Gold rule */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="container py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={LOGO_URL}
                alt="Christians Global"
                className="w-10 h-10 rounded-full border border-gold/30 object-cover"
              />
              <span
                className="text-lg font-bold text-cream"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Christians Global
              </span>
            </div>
            <p
              className="text-cream/40 text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: "var(--font-body)" }}
            >
              One Body, Many Nations, Christ at the Centre. Uniting believers
              across the globe through faith, love, and community.
            </p>
          </div>

          {/* Legal Links */}
          <div>
            <h4
              className="text-cream text-sm font-bold tracking-wider uppercase mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Legal
            </h4>
            <ul className="space-y-2">
              {[
                { name: "Privacy Policy", url: "/privacy" },
                { name: "Terms of Service", url: "/terms" },
                { name: "Contact & Support", url: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="text-cream/40 text-sm hover:text-gold transition-colors duration-300"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4
              className="text-cream text-sm font-bold tracking-wider uppercase mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Follow Us
            </h4>
            <ul className="space-y-2">
              {[
                { name: "Facebook", url: "https://www.facebook.com/christiansglobal" },
                { name: "Instagram", url: "https://instagram.com/christiansglobal" },
                { name: "X (Twitter)", url: "https://x.com/christiansglobl" },
                { name: "Threads", url: "https://www.threads.com/@christiansglobal" },
                { name: "Bluesky", url: "https://bsky.app/profile/christiansglobal.bsky.social" },
                { name: "YouTube", url: "https://www.youtube.com/@christians-global" },
                { name: "Spotify", url: "https://open.spotify.com/show/6tRi4gH4nXfu8uMd5btnxX" },
                { name: "Telegram", url: "https://t.me/+7r_3aGWryW8wOTRk" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/40 text-sm hover:text-gold transition-colors duration-300"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-cream text-sm font-bold tracking-wider uppercase mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Contact
            </h4>
            <a
              href="mailto:christiansglobalcommunity@gmail.com"
              className="text-gold/80 text-sm hover:text-gold transition-colors duration-300 break-all"
              style={{ fontFamily: "var(--font-body)" }}
            >
              christiansglobalcommunity@gmail.com
            </a>
            <p
              className="text-cream/30 text-sm mt-3"
              style={{ fontFamily: "var(--font-body)" }}
            >
              One Body, Many Nations,<br />Christ at the Centre.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-cream/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-cream/25 text-xs"
            style={{ fontFamily: "var(--font-body)" }}
          >
            &copy; 2026 Ian Ridpath trading as Christians Global. All rights reserved.
          </p>
          <p
            className="text-cream/25 text-xs italic"
            style={{ fontFamily: "var(--font-display)" }}
          >
            "For where two or three gather in my name, there am I with them." — Matthew 18:20
          </p>
        </div>
      </div>
    </footer>
  );
}
