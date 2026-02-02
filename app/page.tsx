import HeroSection from "@/components/HeroSection";
import ServiceCards from "@/components/ServiceCards";
import GalleryPreview from "@/components/GalleryPreview";
import TrustSection from "@/components/TrustSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import Testimonial from "@/components/Testimonial";
import CTABand from "@/components/CTABand";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceCards />
      <GalleryPreview />
      <TrustSection />
      <ProcessTimeline />
      <Testimonial />
      <CTABand />
    </>
  );
}
