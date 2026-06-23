import { BookOpen, Heart, Bookmark, Lightbulb, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

const featuredResources = [
  {
    id: 1,
    title: "Daily Bible Study Guide",
    description: "Comprehensive Scripture exploration with reflection questions",
    icon: BookOpen,
    color: "bg-blue-50 border-blue-200",
    link: "https://www.thebibleunpacked.net/free-bible-studies-pdfs/"
  },
  {
    id: 2,
    title: "Prayer Journal Template",
    description: "Organize your prayers and track God's answers",
    icon: Heart,
    color: "bg-rose-50 border-rose-200",
    link: "https://www.compassionuk.org/blogs/prayer-journal/"
  },
  {
    id: 3,
    title: "Scripture Memory Cards",
    description: "60 key Bible verses organized by topic for memorization",
    icon: Bookmark,
    color: "bg-indigo-50 border-indigo-200",
    link: "https://www.navigators.org/resource/topical-memory-system/"
  },
  {
    id: 4,
    title: "Devotional Reflections",
    description: "Weekly devotionals to encourage your faith journey",
    icon: Lightbulb,
    color: "bg-amber-50 border-amber-200",
    link: "/resources"
  },
];

export default function ResourcesPreview() {
  return (
    <section id="resources-preview" className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-cream">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-serif text-charcoal mb-4">
            Free Christian Resources
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Deepen your faith with our curated collection of Bible studies, prayer journals, and spiritual growth materials.
            Explore our full <Link href="/resources" className="text-amber-600 hover:text-amber-700 font-semibold">faith resources library</Link> for more tools to strengthen your faith journey.
          </p>
        </div>

        {/* Featured Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {featuredResources.map((resource) => {
            const IconComponent = resource.icon;
            return (
              <a
                key={resource.id}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${resource.color} rounded-lg border-2 p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer block`}
              >
                <div className="flex items-center justify-center mb-4">
                  <IconComponent className="w-10 h-10 text-amber-700" />
                </div>

                <h3 className="text-xl font-serif text-charcoal mb-2 text-center">
                  {resource.title}
                </h3>

                <p className="text-gray-600 text-sm text-center leading-relaxed">
                  {resource.description}
                </p>
                
                <div className="flex items-center justify-center mt-4 text-amber-700 font-semibold">
                  Download <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </a>
            );
          })}
        </div>

        {/* View All Resources Button */}
        <div className="text-center">
          <Link href="/resources" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
            View All Resources
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Divider */}
        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
      </div>
    </section>
  );
}
