import { useEffect, useState } from 'react';
import { Sparkles, BookOpen } from 'lucide-react';

const verses = [
  { text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.", reference: "Psalm 34:18" },
  { text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.", reference: "John 3:16" },
  { text: "I can do all this through him who gives me strength.", reference: "Philippians 4:13" },
  { text: "Trust in the Lord with all your heart and lean not on your own understanding.", reference: "Proverbs 3:5" },
  { text: "The Lord is my light and my salvation—whom shall I fear?", reference: "Psalm 27:1" },
  { text: "For we walk by faith, not by sight.", reference: "2 Corinthians 5:7" },
  { text: "Let the peace of Christ rule in your hearts, since as members of one body you were called to peace.", reference: "Colossians 3:15" },
  { text: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!", reference: "2 Corinthians 5:17" },
];

const inspirations = [
  { title: "Trust in His Timing", message: "God's timing is perfect. Even when we don't understand His plan, we can trust that He is working all things together for our good. Rest in His faithfulness today.", author: "Romans 8:28" },
  { title: "You Are Loved", message: "You are deeply loved by your Creator. Not because of what you do or achieve, but simply because you exist. Embrace this truth and let it transform your day.", author: "Zephaniah 3:17" },
  { title: "Strength for Today", message: "You have been given everything you need for today. The strength, wisdom, and grace you require are already within reach. Ask, and it shall be given to you.", author: "Philippians 4:19" },
  { title: "Choose Joy", message: "Joy is not dependent on circumstances—it's a choice rooted in faith. Today, choose to rejoice in the Lord, for He is your strength and your song.", author: "Philippians 4:4" },
  { title: "Love Covers All", message: "Love is the greatest commandment. As you go through your day, let love guide your actions, words, and thoughts toward others. Love never fails.", author: "1 Corinthians 13:4-7" },
  { title: "Be Still and Know", message: "In the midst of life's chaos, take a moment to be still. God is with you. He is your refuge and strength. Find peace in His presence.", author: "Psalm 46:10" },
  { title: "Forgive and Be Free", message: "Forgiveness is not about the other person—it's about freeing yourself. Release bitterness and embrace the healing that comes through forgiveness in Christ.", author: "Colossians 3:13" },
  { title: "Purpose in Serving", message: "Your life has purpose. When you serve others with a heart of love, you serve Christ Himself. Find meaning in lifting others up today.", author: "Matthew 25:40" },
];

export default function DailyBars() {
  const [verse, setVerse] = useState(verses[0]);
  const [inspiration, setInspiration] = useState(inspirations[0]);

  useEffect(() => {
    // Get today's date and use it to select consistent content for the day
    const today = new Date();
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
    
    setVerse(verses[dayOfYear % verses.length]);
    setInspiration(inspirations[dayOfYear % inspirations.length]);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cream to-amber-50">
      <div className="max-w-4xl mx-auto w-full">
        {/* Verse of the Week */}
        <div className="relative">
          <div className="absolute top-0 left-0 w-20 h-20 bg-amber-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 -ml-8 -mt-8"></div>
          
          <div className="relative bg-white rounded-lg shadow-lg p-8 border border-amber-200 h-full">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-amber-700" />
              <span className="text-sm font-semibold text-amber-700 uppercase tracking-wider">Verse of the Week</span>
            </div>

            <p className="text-lg text-center text-gray-700 mb-6 leading-relaxed italic">
              "{verse.text}"
            </p>

            <div className="flex items-center justify-center">
              <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent flex-grow"></div>
              <span className="px-4 text-sm font-semibold text-amber-700">
                {verse.reference}
              </span>
              <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent flex-grow"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto w-full">
        {/* Inspiration of the Day */}
        <div className="relative">
          <div className="absolute top-0 right-0 w-20 h-20 bg-amber-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 -mr-8 -mt-8"></div>
          
          <div className="relative bg-white rounded-lg shadow-lg p-8 border border-amber-200 h-full">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-amber-600" />
              <span className="text-sm font-semibold text-amber-700 uppercase tracking-wider">Inspiration of the Day</span>
            </div>

            <h3 className="text-xl font-serif text-center text-amber-900 mb-3">
              {inspiration.title}
            </h3>

            <p className="text-center text-gray-700 mb-4 leading-relaxed text-sm italic">
              "{inspiration.message}"
            </p>

            <div className="flex items-center justify-center">
              <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent flex-grow"></div>
              <span className="px-4 text-sm font-semibold text-amber-700">
                {inspiration.author}
              </span>
              <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent flex-grow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
