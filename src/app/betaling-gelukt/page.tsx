"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FooterMedia from '@/components/sections/footer/FooterMedia';

export default function SuccessPage() {
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
            { name: "Voorbeelden", id: "/#voorbeelden" },
            { name: "Prijzen", id: "/pricing" }
          ]}
          brandName="BriefBaas AI"
        />
        <HeroLogoBillboard
          logoText="Betaling Gelukt!"
          description="Bedankt voor je betaling. Je kunt nu direct aan de slag met het genereren van je professionele brief."
          buttons={[{ text: "Start met schrijven", href: "/" }]}
          background={{ variant: "plain" }}
        />
        <FooterMedia
          logoText="BriefBaas AI"
          imageSrc="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=800&_wi=1"
          columns={[
            { title: "Platform", items: [{ label: "Home", href: "/" }, { label: "Prijzen", href: "/pricing" }] }
          ]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}