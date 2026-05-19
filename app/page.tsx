import HeroSection from "@/components/invitation/HeroSection";
import CountdownSection from "@/components/invitation/CountdownSection";
import PhotosSection from "@/components/invitation/PhotosSection";
import VenueSection from "@/components/invitation/VenueSection";
import RSVPSection from "@/components/invitation/RSVPSection";
import DressCodeSection from "@/components/invitation/DressCodeSection";
import GiftSection from "@/components/invitation/GiftSection";
import Footer from "@/components/invitation/Footer";
import HashtagSection from "@/components/invitation/HashtagSection";

export default function InvitationPage() {
  return (
    <main>
      <HeroSection />
      <CountdownSection />
      <PhotosSection />
      <VenueSection />
      <RSVPSection />
      <DressCodeSection />
      <GiftSection />
      <HashtagSection />
      <Footer />
    </main>
  );
}
