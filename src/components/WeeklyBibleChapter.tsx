import { BookOpen, ExternalLink } from "lucide-react";
import { trpc } from "@/lib/trpc";

const PLAYLIST_URL = "https://www.youtube.com/playlist?list=PL0AYbEE5UeW5hwDTNI_DJLriH0Vea73iG";

export default function WeeklyBibleChapter() {
  const { data, isLoading } = trpc.weeklyBible.current.useQuery(undefined, {
    staleTime: 1000 * 60 * 60, // Cache for 1 hour
    refetchOnWindowFocus: false,
  });

  return (
    <section className="py-16 lg:py-24 bg-charcoal">
      <div className="container max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-7 h-7 text-gold" />
            <h2
              className="text-3xl md:text-4xl font-bold text-cream"
              style={{ fontFamily: "var(--font-display)" }}
            >
              This Week's Bible Chapter
            </h2>
          </div>
          <p className="text-cream/70 text-lg max-w-2xl mx-auto">
            Listen to a new chapter of the Bible each week. Follow along as we journey through
            God's Word together, from Genesis to Revelation.
          </p>
        </div>

        {/* Video Embed */}
        {isLoading ? (
          <div className="aspect-video max-w-3xl mx-auto bg-charcoal-light/20 rounded-lg flex items-center justify-center">
            <div className="text-cream/50 flex items-center gap-2">
              <BookOpen className="w-5 h-5 animate-pulse" />
              Loading this week's chapter...
            </div>
          </div>
        ) : data?.videoId ? (
          <div className="max-w-3xl mx-auto">
            {/* Video Title */}
            <h3
              className="text-xl md:text-2xl font-semibold text-gold text-center mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {data.title}
            </h3>

            {/* YouTube Embed */}
            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl border border-gold/20">
              <iframe
                src={`https://www.youtube.com/embed/${data.videoId}?rel=0`}
                title={data.title || "Weekly Bible Chapter"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>

            {/* Playlist Link */}
            <div className="text-center mt-6">
              <a
                href={PLAYLIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors duration-300 text-sm font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                View Full Audio Bible Playlist on YouTube
              </a>
            </div>
          </div>
        ) : (
          <div className="text-center text-cream/50 py-12">
            <BookOpen className="w-10 h-10 mx-auto mb-3 opacity-50" />
            <p>This week's chapter will be available soon.</p>
          </div>
        )}
      </div>
    </section>
  );
}
