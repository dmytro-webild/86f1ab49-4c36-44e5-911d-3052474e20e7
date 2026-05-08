"use client";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import LegalSection from "@/components/legal/LegalSection";
import FooterMedia from "@/components/sections/footer/FooterMedia";

export default function PrivacyPage() {
  return (
    <ThemeProvider>
      <NavbarStyleApple navItems={[{name: "Home", id: "/"}]} brandName="BriefBaas AI" />
      <LegalSection
        layout="page"
        title="Privacybeleid"
        sections={[
          { heading: "1. Gegevensverwerking", content: { type: "paragraph", text: "Wij respecteren je privacy en verwerken gegevens enkel noodzakelijk voor onze dienstverlening." } }
        ]}
      />
      <FooterMedia logoText="BriefBaas AI" columns={[{title: "Links", items: [{label: "Home", href: "/"}]}]} />
    </ThemeProvider>
  );
}