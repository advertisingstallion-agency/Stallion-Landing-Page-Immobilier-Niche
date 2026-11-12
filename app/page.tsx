import { CaseStudies } from "@/components/landing/case-studies";
import { Testimonials } from "@/components/landing/testimonials";
import { Background } from "@/components/landing/background";
import { Hero } from "@/components/landing/hero";
import { DevelopmentService } from "@/components/landing/development-service";
import { Process } from "@/components/landing/process";
import { Faq } from "@/components/landing/faq";
import { Closing } from "@/components/landing/closing";
import { Team } from "@/components/landing/team";
import { Header } from "@/layout/header";
import { Footer } from "@/layout/footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#0a0c0d] text-[#f9faf9] selection:bg-[#bafc0c] selection:text-[#0a0c0d]">
      <Background />
      <Header />
      <main>
        <Hero />
        <div className="relative z-1 flex flex-nowrap items-center gap-6 overflow-x-auto whitespace-nowrap border-y border-white/10 bg-white/[.025] px-5 py-6 text-xs font-bold text-[#bafc0c] sm:justify-center sm:gap-10 sm:text-base [&>span]:shrink-0"><span>Sites web immobiliers</span><span>CRM & suivi des prospects</span><span>Portails et outils sur mesure</span></div>
        <DevelopmentService />
        <Process />
        <CaseStudies />
        <Testimonials />
        <Team />
        <Faq />
        <Closing />
      </main>
      <Footer />
    </div>
  );
}
