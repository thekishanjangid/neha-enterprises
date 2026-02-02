import HeroSection from "@/components/HeroSection";
import MaterialExperience from "@/components/MaterialExperience";
import ServiceCards from "@/components/ServiceCards";
import GalleryPreview from "@/components/GalleryPreview";
import FeaturedProject from "@/components/FeaturedProject";
import TrustSection from "@/components/TrustSection";
import CraftsmanshipFocus from "@/components/CraftsmanshipFocus";
import NumbersImpact from "@/components/NumbersImpact";
import ProcessTimeline from "@/components/ProcessTimeline";
import PartnerBrands from "@/components/PartnerBrands";
import Testimonial from "@/components/Testimonial";
import FAQAccordion from "@/components/FAQAccordion";
import CTABand from "@/components/CTABand";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MaterialExperience />
      <ServiceCards />
      <GalleryPreview />
      <FeaturedProject />
      <TrustSection />
      <CraftsmanshipFocus />
      <NumbersImpact />
      <ProcessTimeline />
      <PartnerBrands />
      <Testimonial />
      <FAQAccordion />
      <CTABand />
    </>
  );
}
