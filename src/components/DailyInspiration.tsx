import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

const inspirations = [
  {
    title: "Trust in His Timing",
    message: "God's timing is perfect. Even when we don't understand His plan, we can trust that He is working all things together for our good. Rest in His faithfulness today.",
    author: "Romans 8:28"
  },
  {
    title: "You Are Loved",
    message: "You are deeply loved by your Creator. Not because of what you do or achieve, but simply because you exist. Embrace this truth and let it transform your day.",
    author: "Zephaniah 3:17"
  },
  {
    title: "Strength for Today",
    message: "You have been given everything you need for today. The strength, wisdom, and grace you require are already within reach. Ask, and it shall be given to you.",
    author: "Philippians 4:19"
  },
  {
    title: "Choose Joy",
    message: "Joy is not dependent on circumstances—it's a choice rooted in faith. Today, choose to rejoice in the Lord, for He is your strength and your song.",
    author: "Philippians 4:4"
  },
  {
    title: "Love Covers All",
    message: "Love is the greatest commandment. As you go through your day, let love guide your actions, words, and thoughts toward others. Love never fails.",
    author: "1 Corinthians 13:4-7"
  },
  {
    title: "Be Still and Know",
    message: "In the midst of life's chaos, take a moment to be still. God is with you. He is your refuge and strength. Find peace in His presence.",
    author: "Psalm 46:10"
  },
  {
    title: "Forgive and Be Free",
    message: "Forgiveness is not about the other person—it's about freeing yourself. Release bitterness and embrace the healing that comes through forgiveness in Christ.",
    author: "Colossians 3:13"
  },
  {
    title: "Purpose in Serving",
    message: "Your life has purpose. When you serve others with a heart of love, you serve Christ Himself. Find meaning in lifting others up today.",
    author: "Matthew 25:40"
  },
  {
    title: "Faith Over Fear",
    message: "Fear and faith cannot coexist. Choose faith today. Step out boldly, knowing that God has not given you a spirit of fear, but of power and love.",
    author: "2 Timothy 1:7"
  },
  {
    title: "Gratitude Transforms",
    message: "Gratitude shifts our perspective. When we thank God for what we have—big or small—our hearts transform and we see blessings we might have missed.",
    author: "1 Thessalonians 5:16-18"
  },
  {
    title: "You Are Not Alone",
    message: "Whatever you're facing today, remember: you are not alone. God walks with you through every valley and celebrates with you on every mountaintop.",
    author: "Deuteronomy 31:8"
  },
  {
    title: "Grace is Enough",
    message: "God's grace is sufficient for all your needs. When you feel weak, His grace is strongest. Lean on Him and experience His infinite mercy today.",
    author: "2 Corinthians 12:9"
  },
  {
    title: "Speak Life",
    message: "Your words have power. Today, speak life over yourself and others. Encourage, uplift, and speak truth. Let your words reflect God's love.",
    author: "Proverbs 18:21"
  },
  {
    title: "Hope in Christ",
    message: "Hope is not wishful thinking—it's an anchor for your soul. In Christ, you have a living hope that transcends circumstances. Hold fast to it.",
    author: "1 Peter 1:3"
  },
  {
    title: "Seek First His Kingdom",
    message: "When you prioritize your relationship with God above all else, everything else falls into place. Seek Him first, and watch how He provides.",
    author: "Matthew 6:33"
  }
];

export default function DailyInspiration() {
  const [inspiration, setInspiration] = useState(inspirations[0]);

  useEffect(() => {
    // Get today's date and use it to select a consistent inspiration for the day
    const today = new Date();
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
    const index = dayOfYear % inspirations.length;
    setInspiration(inspirations[index]);
  }, []);

  return (
    <div className="relative py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-50 via-amber-50 to-amber-100">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -ml-16 -mt-16"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -mr-16 -mb-16"></div>

      <div className="relative max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Sparkles className="w-5 h-5 text-amber-600" />
          <span className="text-sm font-semibold text-amber-700 uppercase tracking-wider">Inspiration of the Day</span>
          <Sparkles className="w-5 h-5 text-amber-600" />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 sm:p-10 border border-amber-200">
          <h3 className="text-2xl sm:text-3xl font-serif text-center text-amber-900 mb-4">
            {inspiration.title}
          </h3>
          
          <p className="text-lg text-center text-gray-700 mb-6 leading-relaxed italic">
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

        <p className="text-center text-sm text-gray-600 mt-6">
          A new inspiration awaits you each day. May these words strengthen your faith and guide your path.
        </p>
      </div>
    </div>
  );
}
