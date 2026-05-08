"use client";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import PricingCardFive from "@/components/sections/pricing/PricingCardFive";
import FooterMedia from "@/components/sections/footer/FooterMedia";

export default function PricingPage() {
  return (
    <ThemeProvider>
      <NavbarStyleApple navItems={[{name: "Home", id: "/"}, {name: "Prijzen", id: "/pricing"}]} brandName="BriefBaas AI" />
      <PricingCardFive
        title="Prijzen"
        description="Kies het pakket dat bij je past."
        textboxLayout="default"
        animationType="slide-up"
        plans={[
          { id: "1", tag: "Basis", price: "€9", period: "eenmalig", description: "Voor eenvoudige klachten", button: { text: "Kies" }, featuresTitle: "Inbegrepen", features: ["PDF download", "Toon keuze"] }
        ]}
      />
      <FooterMedia logoText="BriefBaas AI" columns={[{title: "Links", items: [{label: "Home", href: "/"}]}]} />
    </ThemeProvider>
  );
}