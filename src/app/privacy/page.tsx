"use client";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import LegalSection from "@/components/legal/LegalSection";
import FooterMedia from "@/components/sections/footer/FooterMedia";

export default function PrivacyPage() {
  return (
    <ThemeProvider defaultButtonVariant="text-stagger" defaultTextAnimation="entrance-slide" borderRadius="rounded" contentWidth="medium" sizing="medium" background="circleGradient" cardStyle="glass-elevated" primaryButtonStyle="gradient" secondaryButtonStyle="glass" headingFontWeight="normal">
      <div id="nav" data-section="nav">
        <NavbarStyleApple navItems={[{name: "Home", id: "/"}]} />
      </div>
      <div id="legal" data-section="legal">
        <LegalSection
          layout="page"
          title="Privacybeleid"
          sections={[
            { heading: "1. Gegevensverwerking", content: { type: "paragraph", text: "Wij respecteren je privacy en verwerken gegevens enkel noodzakelijk voor onze dienstverlening." } }
          ]}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterMedia logoText="BriefBaas AI" columns={[{title: "Links", items: [{label: "Home", href: "/"}]}]} videoSrc="https://assets.mixkit.co/videos/preview/mixkit-lawyer-office-desk-4395-large.mp4" />
      </div>
    </ThemeProvider>
  );
}