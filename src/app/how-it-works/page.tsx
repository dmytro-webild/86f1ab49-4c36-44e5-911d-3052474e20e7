"use client";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import FeatureCardThree from "@/components/sections/feature/featureCardThree/FeatureCardThree";
import FooterMedia from "@/components/sections/footer/FooterMedia";

export default function HowItWorksPage() {
  return (
    <ThemeProvider defaultButtonVariant="text-stagger" defaultTextAnimation="entrance-slide" borderRadius="rounded" contentWidth="medium" sizing="medium" background="circleGradient" cardStyle="glass-elevated" primaryButtonStyle="gradient" secondaryButtonStyle="glass" headingFontWeight="normal">
      <NavbarStyleApple navItems={[{name: "Home", id: "/"}, {name: "Hoe het werkt", id: "/how-it-works"}]} />
      <FeatureCardThree
        title="Stapsgewijs proces"
        description="Zo werkt BriefBaas AI."
        gridVariant="uniform-all-items-equal"
        animationType="slide-up"
        textboxLayout="default"
        useInvertedBackground={false}
        features={[
          { title: "Selectie", description: "Kies jouw probleemtype.", imageSrc: "/placeholder.png" },
          { title: "Data", description: "Vul details aan.", imageSrc: "/placeholder.png" },
          { title: "Generatie", description: "Ontvang je brief.", imageSrc: "/placeholder.png" }
        ]}
      />
      <FooterMedia logoText="BriefBaas AI" columns={[{title: "Links", items: [{label: "Home", href: "/"}]}]} videoSrc="https://assets.mixkit.co/videos/preview/mixkit-lawyer-office-desk-4395-large.mp4" />
    </ThemeProvider>
  );
}