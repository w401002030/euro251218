import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { PerformanceChart } from "@/components/sections/PerformanceChart";
import { Features } from "@/components/sections/Features";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { Toaster } from "@/components/ui/sonner";
import { StatsTicker } from "@/components/sections/StatsTicker";
import { Testimonials } from "@/components/sections/Testimonials";
import { CheckoutDialog } from "@/components/CheckoutDialog";
import { OperationGuide } from "@/components/sections/OperationGuide";
import { ContactFAB } from "@/components/ContactFAB";
export function HomePage() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <PerformanceChart />
        <StatsTicker />
        <Features />
        <Pricing />
        <OperationGuide />
        <FAQ />
        <Testimonials />
      </main>
      <ContactFAB />
      <Footer />
      <CheckoutDialog />
      <Toaster richColors closeButton />
    </div>
  );
}