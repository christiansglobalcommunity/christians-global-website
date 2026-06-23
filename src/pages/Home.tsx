/*
 * Christians Global — Home Page
 * Design: "Sacred Warmth" — Liturgical Modernism
 * Palette: Charcoal (#1a1a2e), Gold (#d4a853), Cream (#faf5e8), Terracotta (#c17a4a)
 * Typography: Playfair Display (display), Source Sans 3 (body), Caveat (accent)
 */

import { useAuth } from "@/_core/hooks/useAuth";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DailyBars from "@/components/DailyBars";
import AboutSection from "@/components/AboutSection";
import MissionSection from "@/components/MissionSection";
import CommunitySection from "@/components/CommunitySection";
import ResourcesPreview from "@/components/ResourcesPreview";
import PagesHub from "@/components/PagesHub";
import PrayerWallPreview from "@/components/PrayerWallPreview";
import PrayerWall from "@/components/PrayerWall";
import WeeklyBibleChapter from "@/components/WeeklyBibleChapter";
import ConnectSection from "@/components/ConnectSection";
import Footer from "@/components/Footer";

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <DailyBars />
        <AboutSection />
        <MissionSection />
        <CommunitySection />
        <WeeklyBibleChapter />
        <PagesHub />
        <ResourcesPreview />
        <PrayerWall />
        <PrayerWallPreview />
        <ConnectSection />
      </main>
      <Footer />
    </div>
  );
}
