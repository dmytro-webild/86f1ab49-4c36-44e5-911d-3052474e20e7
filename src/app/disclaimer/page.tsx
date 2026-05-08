"use client";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import LegalSection from "@/components/legal/LegalSection";
import FooterMedia from "@/components/sections/footer/FooterMedia";

export default function DisclaimerPage() {
  return (
    <ThemeProvider defaultButtonVariant="text-stagger" defaultTextAnimation="entrance-slide" borderRadius="rounded" contentWidth="medium" sizing="medium" background="circleGradient" cardStyle="glass-elevated" primaryButtonStyle="gradient" secondaryButtonStyle="glass" headingFontWeight="normal">
      <NavbarStyleApple navItems={[{name: "Home", id: "/"}]} />
      <LegalSection
        layout="page"
        title="Disclaimer"
        sections={[
          { heading: "Juridisch", content: { text: "BriefBaas AI is geen juridisch adviseur. Raadpleeg bij complexe problemen altijd een advocaat." } }
        ]}
      />
      <FooterMedia logoText="BriefBaas AI" columns={[{title: "Links", items: [{label: "Home", href: "/"}]}]} videoSrc="https://assets.mixkit.co/videos/preview/mixkit-lawyer-office-desk-4395-large.mp4" />
    </ThemeProvider>
  );
}