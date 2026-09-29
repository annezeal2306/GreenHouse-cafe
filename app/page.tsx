import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DayNight from "@/components/DayNight";
import MenuPreview from "@/components/MenuPreview";
import EventsPreview from "@/components/EventsPreview";
import Journal from "@/components/Journal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Main hero */}
      <Hero />

      {/* Day / Night experience */}
      <DayNight />

      {/* Menu */}
      <MenuPreview />

      {/* Events */}
      <EventsPreview />

      {/* Journal */}
      <Journal />

      {/* Footer */}
      <Footer />
    </main>
  );
}