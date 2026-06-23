import { useState, useEffect } from "react";
import { Menu, X, LogIn, LogOut } from "lucide-react";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";

const LOGO_URL = "https://private-us-east-1.manuscdn.com/user_upload_by_module/session_file/310519663399093717/qxKUmcMelqkDzVbl.webp?Expires=1804070803&Signature=JE6vbxDMmS3b1xybzCtZQi6hvIJwhyKVhdhevcDfDuiGppzrEUZOYi4mHpO7WBY5n3SWULitzN6LRmCtahr9LPti7CDw2voJOwofdKiybUEFcVmkAnrjgiu9WwSiMK5J0-tSlWRx1ho4jHKR39PG68TWw1Ksfq10~pmPgbpQ1yMq6PfKLbtqZ~YVo12-vboWvkre9JGQ4MmxzQFMv1y6XbKlaRCET4CPAwTGWK-luy~QnwlFZEV3wlNYVG-1HzcfsBquIlmMetEQlaZye9CGnDuKjyAUq48fD7a47TAe4wYSKCBZTp1608G9OtZu80QX166t0MiiYKwOjDS2wFVBNw__&Key-Pair-Id=K2HSFNDJXOU9YS";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Mission", href: "#mission" },
  { label: "Community", href: "#community" },
  { label: "Resources", href: "/resources" },
  { label: "Connect", href: "#connect" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-charcoal/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-18 lg:h-20">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <img
            src={LOGO_URL}
            alt="Christians Global"
            className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-gold/40 group-hover:border-gold transition-colors duration-300 object-cover"
          />
          <div className="flex flex-col">
            <span
              className="text-lg lg:text-xl font-bold tracking-wide text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Christians Global
            </span>
            <span
              className="text-[10px] lg:text-xs tracking-[0.2em] uppercase text-gold-light/80 leading-tight"
              style={{ fontFamily: "var(--font-body)" }}
            >
              One Body, Many Nations,<br className="lg:hidden" /> Christ at the Centre
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-4 py-2 text-sm font-medium tracking-wide uppercase text-cream/80 hover:text-gold transition-colors duration-300"
                style={{ fontFamily: "var(--font-body)", letterSpacing: "0.1em" }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Auth & Contact Buttons */}
        <div className="hidden lg:flex items-center gap-3 ml-4">
          {isAuthenticated ? (
            <>
              {user?.role === "admin" && (
                <a
                  href="/admin/prayers"
                  className="px-4 py-2 text-sm font-medium text-cream/80 hover:text-gold transition-colors duration-300"
                >
                  Admin
                </a>
              )}
              <button
                onClick={logout}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-cream/80 hover:text-gold transition-colors duration-300"
              >
                <LogOut size={16} /> Logout
              </button>
            </>
          ) : (
            <a
              href={getLoginUrl()}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-cream/80 hover:text-gold transition-colors duration-300"
            >
              <LogIn size={16} /> Login
            </a>
          )}
          <a
            href="#send-message"
            className="px-6 py-2 bg-gold hover:bg-gold-dark text-charcoal font-semibold rounded-lg transition-colors duration-300"
          >
            Contact
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-charcoal/98 backdrop-blur-md border-t border-gold/10">
          <ul className="container py-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block px-4 py-3 text-sm font-medium tracking-wide uppercase text-cream/80 hover:text-gold hover:bg-gold/5 rounded-md transition-all duration-300"
                  style={{ fontFamily: "var(--font-body)", letterSpacing: "0.1em" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            {isAuthenticated ? (
              <>
                {user?.role === "admin" && (
                  <li>
                    <a
                      href="/admin/prayers"
                      className="block px-4 py-3 text-sm font-medium tracking-wide uppercase text-cream/80 hover:text-gold hover:bg-gold/5 rounded-md transition-all duration-300"
                      style={{ fontFamily: "var(--font-body)", letterSpacing: "0.1em" }}
                      onClick={() => setMobileOpen(false)}
                    >
                      Admin
                    </a>
                  </li>
                )}
                <li>
                  <button
                    onClick={() => {
                      logout();
                      setMobileOpen(false);
                    }}
                    className="block w-full text-left px-4 py-3 text-sm font-medium tracking-wide uppercase text-cream/80 hover:text-gold hover:bg-gold/5 rounded-md transition-all duration-300"
                    style={{ fontFamily: "var(--font-body)", letterSpacing: "0.1em" }}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <a
                  href={getLoginUrl()}
                  className="block px-4 py-3 text-sm font-medium tracking-wide uppercase text-cream/80 hover:text-gold hover:bg-gold/5 rounded-md transition-all duration-300"
                  style={{ fontFamily: "var(--font-body)", letterSpacing: "0.1em" }}
                  onClick={() => setMobileOpen(false)}
                >
                  Login
                </a>
              </li>
            )}
            <li>
              <a
                href="#send-message"
                className="block px-4 py-3 text-sm font-medium tracking-wide uppercase text-gold hover:bg-gold/5 rounded-md transition-all duration-300"
                style={{ fontFamily: "var(--font-body)", letterSpacing: "0.1em" }}
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
