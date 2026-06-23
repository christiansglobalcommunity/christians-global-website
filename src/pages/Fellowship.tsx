import { Link } from "wouter";
import { Users, MessageCircle, Lightbulb, Smile } from "lucide-react";

export default function Fellowship() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-charcoal text-cream py-8 px-4">
        <div className="container max-w-4xl mx-auto">
          <Link href="/" className="text-gold hover:text-gold-light transition-colors mb-4 inline-flex items-center gap-2">
            <span>←</span> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Christian Fellowship Worldwide
          </h1>
          <p className="text-cream/70 text-lg">
            Growing together in faith across every nation and culture
          </p>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 py-16 lg:py-24 bg-cream">
        <div className="container max-w-4xl mx-auto px-4">
          {/* Introduction */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "var(--font-display)" }}>
              The Gift of Christian Fellowship
            </h2>
            <p className="text-charcoal-light text-lg leading-relaxed mb-6">
              Christian fellowship is more than just gathering together—it's about sharing life, faith, and encouragement with believers who understand your journey. At Christians Global, we create spaces where believers from every nation can experience genuine Christian fellowship, knowing they are part of a global family united in Christ.
            </p>
            <p className="text-charcoal-light text-lg leading-relaxed">
              Whether you're seeking encouragement, biblical truth, or meaningful connection with other believers, our Christian fellowship community welcomes you. We believe that when believers support one another, share their faith stories, and grow together, the body of Christ becomes stronger and more vibrant.
            </p>
          </section>

          {/* What We Offer */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal mb-8" style={{ fontFamily: "var(--font-display)" }}>
              What Christian Fellowship Looks Like Here
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-white rounded-sm border border-gold/10">
                <MessageCircle className="w-8 h-8 text-gold mb-4" />
                <h3 className="text-xl font-bold text-charcoal mb-3">Meaningful Connection</h3>
                <p className="text-charcoal-light">
                  Connect with believers worldwide who share your faith. Share your stories, ask questions, and experience the encouragement that comes from Christian fellowship.
                </p>
              </div>
              <div className="p-6 bg-white rounded-sm border border-gold/10">
                <Lightbulb className="w-8 h-8 text-gold mb-4" />
                <h3 className="text-xl font-bold text-charcoal mb-3">Daily Encouragement</h3>
                <p className="text-charcoal-light">
                  Receive daily devotionals, biblical reflections, and encouragement to strengthen your faith journey and keep you rooted in Scripture.
                </p>
              </div>
              <div className="p-6 bg-white rounded-sm border border-gold/10">
                <Users className="w-8 h-8 text-gold mb-4" />
                <h3 className="text-xl font-bold text-charcoal mb-3">Community Support</h3>
                <p className="text-charcoal-light">
                  Share your prayer requests and struggles with a community that cares. Receive genuine support and intercession from believers across nations.
                </p>
              </div>
              <div className="p-6 bg-white rounded-sm border border-gold/10">
                <Smile className="w-8 h-8 text-gold mb-4" />
                <h3 className="text-xl font-bold text-charcoal mb-3">Shared Joy</h3>
                <p className="text-charcoal-light">
                  Celebrate victories, share praise reports, and rejoice together in God's faithfulness. Christian fellowship includes celebrating what God is doing in our lives.
                </p>
              </div>
            </div>
          </section>

          {/* Why It Matters */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Why Christian Fellowship Matters
            </h2>
            <div className="space-y-6">
              <div className="p-6 bg-charcoal/5 rounded-sm border-l-4 border-gold">
                <h3 className="text-lg font-bold text-charcoal mb-2">We're Stronger Together</h3>
                <p className="text-charcoal-light">
                  The Bible teaches us that the body of Christ is made stronger when believers support one another. Christian fellowship across nations demonstrates this truth in action.
                </p>
              </div>
              <div className="p-6 bg-charcoal/5 rounded-sm border-l-4 border-gold">
                <h3 className="text-lg font-bold text-charcoal mb-2">Encouragement Sustains Faith</h3>
                <p className="text-charcoal-light">
                  When you're facing challenges, encouragement from fellow believers can strengthen your faith and help you stay the course in your relationship with Christ.
                </p>
              </div>
              <div className="p-6 bg-charcoal/5 rounded-sm border-l-4 border-gold">
                <h3 className="text-lg font-bold text-charcoal mb-2">Shared Faith Transcends Borders</h3>
                <p className="text-charcoal-light">
                  Christian fellowship reminds us that our faith in Jesus Christ unites us across languages, cultures, and nations. We are truly one body in Christ.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-charcoal text-cream p-8 rounded-sm mb-16">
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Join Our Global Christian Fellowship
            </h2>
            <p className="text-cream/80 mb-6">
              You don't have to walk your faith journey alone. Join believers from every nation who are seeking encouragement, connection, and meaningful Christian fellowship. We're here for you.
            </p>
            <Link href="/#connect" className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-charcoal font-semibold rounded-sm hover:bg-gold-light transition-colors">
              Get Connected Today
            </Link>
          </section>

          {/* Related Pages */}
          <section className="pt-16 border-t border-charcoal/10">
            <h3 className="text-xl font-bold text-charcoal mb-6">Explore More</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/about" className="p-6 bg-white rounded-sm border border-gold/10 hover:border-gold transition-colors">
                <h4 className="font-bold text-charcoal mb-2">About Christians Global</h4>
                <p className="text-charcoal-light text-sm">Learn about our mission and values as a global Christian community.</p>
              </Link>
              <Link href="/prayer-community" className="p-6 bg-white rounded-sm border border-gold/10 hover:border-gold transition-colors">
                <h4 className="font-bold text-charcoal mb-2">Global Prayer Community</h4>
                <p className="text-charcoal-light text-sm">Discover how we unite in prayer across nations and cultures.</p>
              </Link>
              <Link href="/resources" className="p-6 bg-white rounded-sm border border-gold/10 hover:border-gold transition-colors">
                <h4 className="font-bold text-charcoal mb-2">Faith Resources</h4>
                <p className="text-charcoal-light text-sm">Access biblical resources and tools to strengthen your faith journey.</p>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
