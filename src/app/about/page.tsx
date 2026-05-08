"use client";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import AboutMetric from "@/components/sections/about/AboutMetric";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import { Scale, Users, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <ThemeProvider>
      <NavbarStyleApple navItems={[{name: "Home", id: "/"}, {name: "Over ons", id: "/about"}]} brandName="BriefBaas AI" />
      <AboutMetric
        title="Onze Missie"
        metrics={[
          { icon: Scale, label: "Juridische Kennis", value: "100%" },
          { icon: Users, label: "Gebruikers", value: "5000+" },
          { icon: ShieldCheck, label: "Veiligheid", value: "Gegarandeerd" }
        ]}
        metricsAnimation="slide-up"
        useInvertedBackground={false}
      />
      <FooterMedia logoText="BriefBaas AI" columns={[{title: "Links", items: [{label: "Home", href: "/"}]}]} />
    </ThemeProvider>
  );
}