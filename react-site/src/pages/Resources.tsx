import { Link } from "wouter";
import { BookOpen, Download, Heart, Lightbulb } from "lucide-react";

export default function Resources() {
  const resources = [
    {
      title: "Daily Bible Study Guide",
      description: "Comprehensive Scripture exploration with reflection questions to deepen your understanding of God's Word.",
      icon: BookOpen,
    },
    {
      title: "Prayer Journal Template",
      description: "Organize your prayers and track God's answers. A practical tool for deepening your prayer life.",
      icon: Heart,
    },
    {
      title: "Scripture Memory Cards",
      description: "60 key Bible verses organized by topic for memorization and daily encouragement.",
      icon: Lightbulb,
    },
    {
      title: "Devotional Reflections",
      description: "Weekly devotionals to encourage your faith journey and help you stay rooted in biblical truth.",
      icon: BookOpen,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-charcoal text-cream py-8 px-4">
        <div className="container max-w-4xl mx-auto">
          <Link href="/" className="text-gold hover:text-gold-light transition-colors mb-4 inline-flex items-center gap-2">
            <span>←</span> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Faith Resources
          </h1>
          <p className="text-cream/70 text-lg">
            Tools and materials to deepen your faith and biblical understanding
          </p>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 py-16 lg:py-24 bg-cream">
        <div className="container max-w-4xl mx-auto px-4">
          {/* Introduction */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Resources for Your Faith Journey
            </h2>
            <p className="text-charcoal-light text-lg leading-relaxed mb-6">
              At Christians Global, we believe that deepening your understanding of Scripture and strengthening your prayer life are essential to your faith journey. That is why we have curated a collection of faith resources designed to help believers grow in their relationship with Christ.
            </p>
            <p className="text-charcoal-light text-lg leading-relaxed">
              Whether you are new to your faith or have been following Christ for years, these resources are designed to encourage you, challenge you, and help you stay rooted in biblical truth. Use them as tools for personal devotion, Christian fellowship discussions, or to share with other believers in your community.
            </p>
          </section>

          {/* Featured Resources */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal mb-8" style={{ fontFamily: "var(--font-display)" }}>
              Featured Faith Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {resources.map((resource) => {
                const Icon = resource.icon;
                return (
                  <div key={resource.title} className="p-6 bg-white rounded-sm border border-gold/10 hover:border-gold transition-colors">
                    <Icon className="w-8 h-8 text-gold mb-4" />
                    <h3 className="text-xl font-bold text-charcoal mb-3">{resource.title}</h3>
                    <p className="text-charcoal-light mb-4">{resource.description}</p>
                    <button className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-semibold">
                      <Download className="w-4 h-4" /> Download
                    </button>
                  </div>
                );
              })}
            </div>
          </section>

          {/* How to Use Resources */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "var(--font-display)" }}>
              How to Use These Faith Resources
            </h2>
            <div className="space-y-6">
              <div className="p-6 bg-charcoal/5 rounded-sm border-l-4 border-gold">
                <h3 className="text-lg font-bold text-charcoal mb-2">Personal Devotion</h3>
                <p className="text-charcoal-light">
                  Use these resources for your daily quiet time with God. Let Scripture guide your prayers and reflections as you grow closer to Christ.
                </p>
              </div>
              <div className="p-6 bg-charcoal/5 rounded-sm border-l-4 border-gold">
                <h3 className="text-lg font-bold text-charcoal mb-2">Christian Fellowship and Discussion</h3>
                <p className="text-charcoal-light">
                  Share these resources with your Christian fellowship group or community. Use them as starting points for meaningful discussions about faith and Scripture.
                </p>
              </div>
              <div className="p-6 bg-charcoal/5 rounded-sm border-l-4 border-gold">
                <h3 className="text-lg font-bold text-charcoal mb-2">Encouragement for Others</h3>
                <p className="text-charcoal-light">
                  Share these faith resources with believers who are seeking encouragement or deeper biblical understanding. Help others in their faith journey.
                </p>
              </div>
              <div className="p-6 bg-charcoal/5 rounded-sm border-l-4 border-gold">
                <h3 className="text-lg font-bold text-charcoal mb-2">Spiritual Growth</h3>
                <p className="text-charcoal-light">
                  Commit to using these resources consistently. Whether it is daily Bible study, prayer journaling, or Scripture memorization, consistency deepens your faith.
                </p>
              </div>
            </div>
          </section>

          {/* Scripture */}
          <section className="bg-charcoal text-cream p-8 rounded-sm mb-16">
            <blockquote className="text-center">
              <p className="text-xl italic mb-4" style={{ fontFamily: "var(--font-display)" }}>
                "All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness, so that the servant of God may be thoroughly equipped for every good work."
              </p>
              <cite className="text-cream/70">— 2 Timothy 3:16-17</cite>
            </blockquote>
          </section>

          {/* Call to Action */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-charcoal mb-4" style={{ fontFamily: "var(--font-display)" }}>
              More Ways to Grow in Your Faith
            </h2>
            <p className="text-charcoal-light text-lg leading-relaxed mb-6">
              Beyond these resources, our global Christian community offers daily devotionals, prayer support, and encouragement to help you stay rooted in your faith. Connect with believers worldwide who are on the same faith journey.
            </p>
            <a href="/#pages-hub" className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-charcoal font-semibold rounded-sm hover:bg-gold-light transition-colors">
              Explore Our Community
            </a>
          </section>

          {/* Related Pages */}
          <section className="pt-16 border-t border-charcoal/10">
            <h3 className="text-xl font-bold text-charcoal mb-6">Explore More About Our Community</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/about" className="p-6 bg-white rounded-sm border border-gold/10 hover:border-gold transition-colors">
                <h4 className="font-bold text-charcoal mb-2">About Christians Global</h4>
                <p className="text-charcoal-light text-sm">Learn about our mission and values as a global Christian community.</p>
              </Link>
              <Link href="/prayer-community" className="p-6 bg-white rounded-sm border border-gold/10 hover:border-gold transition-colors">
                <h4 className="font-bold text-charcoal mb-2">Global Prayer Community</h4>
                <p className="text-charcoal-light text-sm">Discover how we unite in prayer across nations and cultures.</p>
              </Link>
              <Link href="/fellowship" className="p-6 bg-white rounded-sm border border-gold/10 hover:border-gold transition-colors">
                <h4 className="font-bold text-charcoal mb-2">Christian Fellowship Worldwide</h4>
                <p className="text-charcoal-light text-sm">Experience meaningful connection with believers everywhere.</p>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
