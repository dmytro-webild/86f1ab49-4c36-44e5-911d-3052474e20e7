"use client";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import FeatureCardThree from "@/components/sections/feature/featureCardThree/FeatureCardThree";
import FooterMedia from "@/components/sections/footer/FooterMedia";

export default function HowItWorksPage() {
  return (
    <ThemeProvider>
      <NavbarStyleApple navItems={[{name: "Home", id: "/"}, {name: "Hoe het werkt", id: "/how-it-works"}]} brandName="BriefBaas AI" />
      <FeatureCardThree
        title="Stapsgewijs proces"
        description="Zo werkt BriefBaas AI."
        gridVariant="uniform-all-items-equal"
        animationType="slide-up"
        textboxLayout="default"
        features={[
          { title: "Selectie", description: "Kies jouw probleemtype.", imageSrc: "/placeholder.png" },
          { title: "Data", description: "Vul details aan.", imageSrc: "/placeholder.png" },
          { title: "Generatie", description: "Ontvang je brief.", imageSrc: "/placeholder.png" }
        ]}
      />
      <FooterMedia logoText="BriefBaas AI" columns={[{title: "Links", items: [{label: "Home", href: "/"}]}]} />
    </ThemeProvider>
  );
}