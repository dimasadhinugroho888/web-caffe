import Hero from "@/components/Hero";
import About from "@/components/About";
import SignatureMenu from "@/components/SignatureMenu";
import Promo from "@/components/Promo";
import Gallery from "@/components/Gallery";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SignatureMenu />
      <Promo />
      <Gallery />
      <WhyChooseUs />
      <Testimonials />
      <Location />
      <CTA />
    </>
  );
}
