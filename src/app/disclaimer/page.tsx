"use client";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import LegalSection from "@/components/legal/LegalSection";
import FooterMedia from "@/components/sections/footer/FooterMedia";

export default function DisclaimerPage() {
  return (
    <ThemeProvider>
      <NavbarStyleApple navItems={[{name: "Home", id: "/"}]} brandName="BriefBaas AI" />
      <LegalSection
        layout="page"
        title="Disclaimer"
        sections={[
          { heading: "Juridisch", content: { type: "paragraph", text: "BriefBaas AI is geen juridisch adviseur. Raadpleeg bij complexe problemen altijd een advocaat." } }
        ]}
      />
      <FooterMedia logoText="BriefBaas AI" columns={[{title: "Links", items: [{label: "Home", href: "/"}]}]} />
    </ThemeProvider>
  );
}