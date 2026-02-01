import { Header, StickyNav, Footer } from "@/components/layout";
import {
  HeroSection,
  ClientExperienceSection,
  ProjectManagementSection,
  ClientManagementSection,
  PaymentsSection,
  DevelopersSection,
  WhatsMoreSection,
  WhatsNextSection,
} from "@/components/sections";

export default function Assembly2Edition() {
  return (
    <div className="min-h-screen bg-[#101010]">
      <Header />

      <main>
        <HeroSection />
        <div className="relative">
          <StickyNav />
          <ClientExperienceSection />
          <ProjectManagementSection />
          <ClientManagementSection />
          <PaymentsSection />
          <DevelopersSection />
          <WhatsMoreSection />
          <WhatsNextSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
