"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FooterMedia from '@/components/sections/footer/FooterMedia';

export default function CancelledPage() {
  return (
    <ThemeProvider 
      defaultButtonVariant="hover-magnetic" 
      defaultTextAnimation="entrance-slide" 
      borderRadius="rounded" 
      contentWidth="medium" 
      sizing="medium" 
      background="circleGradient" 
      cardStyle="glass-elevated" 
      primaryButtonStyle="gradient" 
      secondaryButtonStyle="glass" 
      headingFontWeight="normal"
    >
      <ReactLenis root>
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "/" },
            { name: "Prijzen", id: "/pricing" }
          ]}
          brandName="BriefBaas AI"
        />
        <HeroLogoBillboard
          logoText="Betaling geannuleerd"
          description="Je betaling is geannuleerd. Geen zorgen, je kunt het op elk gewenst moment opnieuw proberen."
          buttons={[{ text: "Probeer opnieuw", href: "/pricing" }, { text: "Terug naar home", href: "/" }]}
          background={{ variant: "plain" }}
        />
        <FooterMedia
          logoText="BriefBaas AI"
          imageSrc="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=800"
          columns={[
            { title: "Platform", items: [{ label: "Home", href: "/" }, { label: "Prijzen", href: "/pricing" }] }
          ]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}