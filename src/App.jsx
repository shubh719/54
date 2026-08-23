import { lazy, Suspense } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const Services = lazy(() => import("./components/Services"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Process = lazy(() => import("./components/Process"));
const WhyChooseUs = lazy(() => import("./components/WhyChooseUs"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Pricing = lazy(() => import("./components/Pricing"));
const Faq = lazy(() => import("./components/Faq"));
const Contact = lazy(() => import("./components/Contact"));
const FinalCta = lazy(() => import("./components/FinalCta"));

function SectionFallback() {
  return <div className="section-pad" aria-hidden="true" />;
}

export default function App() {
  return (
    <div id="top" className="bg-white font-sans text-black-700">
      <div aria-hidden="true" className="grain" />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-black-950 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <Services />
          <Portfolio />
          <Process />
          <WhyChooseUs />
          <Testimonials />
          <Pricing />
          <Faq />
          <Contact />
          <FinalCta />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
