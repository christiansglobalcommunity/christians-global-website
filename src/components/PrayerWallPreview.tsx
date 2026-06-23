import { Link } from "wouter";
import { Heart, ArrowRight } from "lucide-react";
import { trpc } from "@/lib/trpc";

export default function PrayerWallPreview() {
  const prayersList = trpc.prayerWall.list.useQuery({ limit: 6 });

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-gold" />
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal" style={{ fontFamily: "var(--font-display)" }}>
              Community Prayer Wall
            </h2>
          </div>
          <p className="text-charcoal-light text-lg max-w-2xl mx-auto">
            Join our global community in prayer. Below are recent prayer requests from believers around the world. Lift these needs to God and experience the power of collective intercession.
          </p>
        </div>

        {/* Prayers Grid */}
        {prayersList.isLoading ? (
          <div className="text-center text-charcoal-light py-12">Loading prayers...</div>
        ) : prayersList.data && prayersList.data.length > 0 ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {prayersList.data.map((prayer) => (
                <div
                  key={prayer.id}
                  className="p-6 bg-cream rounded-sm border border-gold/10 hover:border-gold transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <Heart className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-charcoal truncate">{prayer.name}</h3>
                      <p className="text-xs text-charcoal-light/60">
                        {new Date(prayer.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <p className="text-charcoal-light text-sm leading-relaxed line-clamp-3">
                    {prayer.request}
                  </p>
                </div>
              ))}
            </div>

            {/* View All Link */}
            <div className="text-center">
              <Link
                href="/prayer-community"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gold text-charcoal font-semibold rounded-sm hover:bg-gold-light transition-colors duration-300"
              >
                View All Prayers
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center text-charcoal-light py-12 bg-cream rounded-sm border border-gold/10">
            <p className="mb-4">No prayers on the wall yet.</p>
            <p className="text-sm">
              Share your prayer request by visiting the{" "}
              <Link href="/prayer-community" className="text-gold hover:text-gold-light font-semibold">
                Prayer Community page
              </Link>
              .
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
