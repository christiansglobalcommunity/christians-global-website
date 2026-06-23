import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with back link */}
      <div className="bg-charcoal text-cream py-8 px-4">
        <div className="container max-w-4xl mx-auto">
          <Link href="/" className="text-gold hover:text-gold-light transition-colors mb-4 inline-flex items-center gap-2">
            <span>←</span> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
            About Christians Global
          </h1>
          <p className="text-cream/70 text-lg">
            Uniting believers across every nation in faith, prayer, and fellowship
          </p>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 py-16 lg:py-24 bg-cream">
        <div className="container max-w-4xl mx-auto px-4">
          {/* Who We Are Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Who We Are
            </h2>
            <p className="text-charcoal-light text-lg leading-relaxed mb-6">
              Christians Global is a Christian media publisher creating original educational, discipleship, and encouragement content for a global audience across social media platforms.
            </p>
            <p className="text-charcoal-light text-lg leading-relaxed">
              Our aim is to encourage faith, provoke thoughtful discussion, and help people engage with Christ at the centre. We publish Christian reflections, Scripture-led encouragement, questions, short teaching, visual content, and video designed to reach believers wherever they are.
            </p>
          </section>

          {/* Our Values Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-white rounded-sm border border-gold/10">
                <h3 className="text-xl font-bold text-charcoal mb-3">Biblical Integrity</h3>
                <p className="text-charcoal-light">
                  We are committed to biblical integrity, thoughtful conversation, and fostering a respectful community around our content.
                </p>
              </div>
              <div className="p-6 bg-white rounded-sm border border-gold/10">
                <h3 className="text-xl font-bold text-charcoal mb-3">Original Content</h3>
                <p className="text-charcoal-light">
                  We publish original, uplifting content directly to our owned social accounts to serve the worldwide Church.
                </p>
              </div>
            </div>
          </section>

          {/* Legal Statements */}
          <section className="mb-16">
            <div className="p-6 bg-charcoal text-cream rounded-sm mb-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">⚠️ Important Disclaimer</h3>
              <p className="text-cream/80">
                While our content is designed to encourage and edify, it is <strong>not</strong> personal pastoral counselling, medical advice, legal advice, or crisis support.
              </p>
            </div>
            <div className="p-6 border border-charcoal/10 rounded-sm">
              <h3 className="text-xl font-bold text-charcoal mb-3">Independence Statement</h3>
              <p className="text-charcoal-light">
                Christians Global is completely independent. We are not affiliated with, endorsed by, or partnered with social media platforms (such as TikTok, Google, YouTube, X, Meta, Bluesky, etc.) unless formally confirmed.
              </p>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-charcoal text-cream p-8 rounded-sm">
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Join Our Global Christian Community
            </h2>
            <p className="text-cream/80 mb-6">
              Whether you're seeking Christian fellowship, prayer support, daily encouragement, or deeper biblical understanding, you belong here. Connect with believers worldwide who share your faith in Christ.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/#find-us-online" className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-charcoal font-semibold rounded-sm hover:bg-gold-light transition-colors">
                Get Connected <ArrowRight className="w-4 h-4" />
              </a>
              <Link href="/prayer-community" className="inline-flex items-center gap-2 px-6 py-3 border border-cream text-cream font-semibold rounded-sm hover:border-gold hover:text-gold transition-colors">
                Learn About Prayer <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          {/* Related Pages */}
          <section className="mt-16 pt-16 border-t border-charcoal/10">
            <h3 className="text-xl font-bold text-charcoal mb-6">Explore More</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/prayer-community" className="p-6 bg-white rounded-sm border border-gold/10 hover:border-gold transition-colors">
                <h4 className="font-bold text-charcoal mb-2">Global Prayer Community</h4>
                <p className="text-charcoal-light text-sm">Discover how we unite in prayer and intercession across nations.</p>
              </Link>
              <Link href="/fellowship" className="p-6 bg-white rounded-sm border border-gold/10 hover:border-gold transition-colors">
                <h4 className="font-bold text-charcoal mb-2">Christian Fellowship Worldwide</h4>
                <p className="text-charcoal-light text-sm">Experience Christian fellowship and encouragement with believers everywhere.</p>
              </Link>
              <Link href="/resources" className="p-6 bg-white rounded-sm border border-gold/10 hover:border-gold transition-colors">
                <h4 className="font-bold text-charcoal mb-2">Faith Resources</h4>
                <p className="text-charcoal-light text-sm">Access biblical resources to deepen your faith and understanding.</p>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
