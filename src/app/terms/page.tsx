"use client";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import LegalSection from "@/components/legal/LegalSection";
import FooterMedia from "@/components/sections/footer/FooterMedia";

export default function TermsPage() {
  return (
    <ThemeProvider>
      <NavbarStyleApple navItems={[{name: "Home", id: "/"}]} brandName="BriefBaas AI" />
      <LegalSection
        layout="page"
        title="Algemene Voorwaarden"
        sections={[
          { heading: "1. Gebruik", content: { type: "paragraph", text: "Door BriefBaas AI te gebruiken ga je akkoord met deze voorwaarden." } }
        ]}
      />
      <FooterMedia logoText="BriefBaas AI" columns={[{title: "Links", items: [{label: "Home", href: "/"}]}]} />
    </ThemeProvider>
  );
}