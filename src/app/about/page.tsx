"use client";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import AboutMetric from "@/components/sections/about/TextSplitAbout";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import { Scale, Users, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <ThemeProvider defaultButtonVariant="text-stagger" defaultTextAnimation="entrance-slide" borderRadius="rounded" contentWidth="medium" sizing="medium" background="circleGradient" cardStyle="glass-elevated" primaryButtonStyle="gradient" secondaryButtonStyle="glass" headingFontWeight="normal">
      <NavbarStyleApple navItems={[{name: "Home", id: "/"}, {name: "Over ons", id: "/about"}]} />
      <AboutMetric
        title="Onze Missie"
        description={["Juridische kennis gegarandeerd", "Veilig en betrouwbaar voor al onze gebruikers"]
        }
        useInvertedBackground={false}
      />
      <FooterMedia logoText="BriefBaas AI" columns={[{title: "Links", items: [{label: "Home", href: "/"}]}]} videoSrc="https://assets.mixkit.co/videos/preview/mixkit-lawyer-office-desk-4395-large.mp4" />
    </ThemeProvider>
  );
}