"use client";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import PricingCardFive from "@/components/sections/pricing/PricingCardFive";
import FooterMedia from "@/components/sections/footer/FooterMedia";

export default function PricingPage() {
  return (
    <ThemeProvider defaultButtonVariant="text-stagger" defaultTextAnimation="entrance-slide" borderRadius="rounded" contentWidth="medium" sizing="medium" background="circleGradient" cardStyle="glass-elevated" primaryButtonStyle="gradient" secondaryButtonStyle="glass" headingFontWeight="normal">
      <NavbarStyleApple navItems={[{name: "Home", id: "/"}, {name: "Prijzen", id: "/pricing"}]} />
      <PricingCardFive
        title="Prijzen"
        description="Kies het pakket dat bij je past."
        textboxLayout="default"
        animationType="slide-up"
        useInvertedBackground={false}
        plans={[
          { id: "1", tag: "Basis", price: "€9", period: "eenmalig", description: "Voor eenvoudige klachten", button: { text: "Kies" }, featuresTitle: "Inbegrepen", features: ["PDF download", "Toon keuze"] }
        ]}
      />
      <FooterMedia logoText="BriefBaas AI" columns={[{title: "Links", items: [{label: "Home", href: "/"}]}]} videoSrc="https://assets.mixkit.co/videos/preview/mixkit-lawyer-office-desk-4395-large.mp4" />
    </ThemeProvider>
  );
}