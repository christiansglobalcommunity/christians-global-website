import { Link } from "wouter";
import { Heart, Users, Globe, Lock } from "lucide-react";
import { useState, useEffect } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";

export default function PrayerCommunity() {
  const { user } = useAuth();
  const prayersList = trpc.prayerWall.list.useQuery({ limit: 50 });

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-charcoal text-cream py-8 px-4">
        <div className="container max-w-4xl mx-auto">
          <Link href="/" className="text-gold hover:text-gold-light transition-colors mb-4 inline-flex items-center gap-2">
            <span>←</span> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Global Prayer Community
          </h1>
          <p className="text-cream/70 text-lg">
            United in prayer across every nation and culture
          </p>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 py-16 lg:py-24 bg-cream">
        <div className="container max-w-4xl mx-auto px-4">
          {/* Introduction */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "var(--font-display)" }}>
              The Power of Collective Prayer
            </h2>
            <p className="text-charcoal-light text-lg leading-relaxed mb-6">
              At Christians Global, we believe in the transformative power of prayer. Our global prayer community connects believers from every nation, culture, and background in a shared commitment to lift one another up in intercession and faith.
            </p>
            <p className="text-charcoal-light text-lg leading-relaxed">
              When you share a prayer request with our community, you're not alone. Believers worldwide join together to pray for your needs, your family, and your faith journey. This is the essence of Christian fellowship—standing together in prayer, knowing that Christ hears every petition and cares deeply for each of us.
            </p>
          </section>

          {/* Why Prayer Matters */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal mb-8" style={{ fontFamily: "var(--font-display)" }}>
              Why Prayer Matters
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-sm border border-gold/10">
                <Heart className="w-8 h-8 text-gold mb-4" />
                <h3 className="text-xl font-bold text-charcoal mb-3">Connection</h3>
                <p className="text-charcoal-light">
                  Prayer connects us to God and to one another. Through prayer, believers across nations become one body in Christ.
                </p>
              </div>
              <div className="p-6 bg-white rounded-sm border border-gold/10">
                <Globe className="w-8 h-8 text-gold mb-4" />
                <h3 className="text-xl font-bold text-charcoal mb-3">Global Impact</h3>
                <p className="text-charcoal-light">
                  Our global prayer community demonstrates that faith transcends borders. Together, we intercede for needs around the world.
                </p>
              </div>
              <div className="p-6 bg-white rounded-sm border border-gold/10">
                <Users className="w-8 h-8 text-gold mb-4" />
                <h3 className="text-xl font-bold text-charcoal mb-3">Support</h3>
                <p className="text-charcoal-light">
                  When you share your prayer requests, you receive genuine support and encouragement from believers who care about your faith journey.
                </p>
              </div>
            </div>
          </section>

          {/* How to Participate */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "var(--font-display)" }}>
              How to Participate in Our Prayer Community
            </h2>
            <div className="space-y-6">
              <div className="p-6 bg-white rounded-sm border-l-4 border-gold">
                <h3 className="text-xl font-bold text-charcoal mb-2">Share Your Prayer Request</h3>
                <p className="text-charcoal-light">
                  Visit our prayer wall and share what's on your heart. Whether it's a personal struggle, a family need, or a praise report, our community is here to pray with you.
                </p>
              </div>
              <div className="p-6 bg-white rounded-sm border-l-4 border-gold">
                <h3 className="text-xl font-bold text-charcoal mb-2">Pray for Others</h3>
                <p className="text-charcoal-light">
                  Join our global prayer community by interceding for the requests of believers worldwide. Your prayers matter and make a real difference in people's lives.
                </p>
              </div>
              <div className="p-6 bg-white rounded-sm border-l-4 border-gold">
                <h3 className="text-xl font-bold text-charcoal mb-2">Receive Daily Prayer Encouragement</h3>
                <p className="text-charcoal-light">
                  Throughout the week, we share devotional content and prayer reflections to encourage your faith journey and deepen your prayer life.
                </p>
              </div>
            </div>
          </section>

          {/* Prayer Wall Display */}
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-charcoal" style={{ fontFamily: "var(--font-display)" }}>
                Community Prayer Wall
              </h2>
              {user?.role === "admin" && (
                <Link href="/admin/prayers" className="inline-flex items-center gap-2 px-4 py-2 bg-gold text-charcoal font-semibold rounded-sm hover:bg-gold-light transition-colors text-sm">
                  <Lock className="w-4 h-4" /> Manage Prayers
                </Link>
              )}
            </div>
            <p className="text-charcoal-light text-lg leading-relaxed mb-8">
              Below are prayer requests from our global community. Join us in lifting these needs to God.
            </p>
            {prayersList.isLoading ? (
              <div className="text-center text-charcoal-light py-12">Loading prayers...</div>
            ) : prayersList.data && prayersList.data.length > 0 ? (
              <div className="space-y-4">
                {prayersList.data.map((prayer) => (
                  <div key={prayer.id} className="p-6 bg-white rounded-sm border border-gold/10 hover:border-gold transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-bold text-charcoal mb-1">{prayer.name}</h4>
                        <p className="text-xs text-charcoal-light/60">
                          {new Date(prayer.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <p className="text-charcoal-light leading-relaxed">{prayer.request}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-charcoal-light py-12 bg-white rounded-sm border border-gold/10">
                <p>No active prayer requests yet. Share your prayer request by scrolling down to the form below.</p>
              </div>
            )}
          </section>

          {/* Scripture */}
          <section className="bg-charcoal text-cream p-8 rounded-sm mb-16">
            <blockquote className="text-center">
              <p className="text-xl italic mb-4" style={{ fontFamily: "var(--font-display)" }}>
                "Therefore I tell you, whatever you ask for in prayer, believe that you have received it, and it will be yours."
              </p>
              <cite className="text-cream/70">— Mark 11:24</cite>
            </blockquote>
          </section>

          {/* Related Pages */}
          <section className="pt-16 border-t border-charcoal/10">
            <h3 className="text-xl font-bold text-charcoal mb-6">Explore More About Our Community</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/about" className="p-6 bg-white rounded-sm border border-gold/10 hover:border-gold transition-colors">
                <h4 className="font-bold text-charcoal mb-2">About Christians Global</h4>
                <p className="text-charcoal-light text-sm">Learn more about our mission, values, and global Christian community.</p>
              </Link>
              <Link href="/fellowship" className="p-6 bg-white rounded-sm border border-gold/10 hover:border-gold transition-colors">
                <h4 className="font-bold text-charcoal mb-2">Christian Fellowship Worldwide</h4>
                <p className="text-charcoal-light text-sm">Discover how we build meaningful connections and encouragement across nations.</p>
              </Link>
              <Link href="/resources" className="p-6 bg-white rounded-sm border border-gold/10 hover:border-gold transition-colors">
                <h4 className="font-bold text-charcoal mb-2">Faith Resources</h4>
                <p className="text-charcoal-light text-sm">Access biblical resources and tools to deepen your faith and prayer life.</p>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
