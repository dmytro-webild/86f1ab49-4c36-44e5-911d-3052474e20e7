"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FooterMedia from '@/components/sections/footer/FooterMedia';

export default function SuccessPage() {
  return (
    <ThemeProvider>
      <ReactLenis root>
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "/" },
            { name: "Prijzen", id: "/pricing" }
          ]}
          brandName="BriefBaas AI"
        />
        <HeroLogoBillboard
          background={{ variant: "gradient-bars" }}
          logoText="Betaling Gelukt!"
          description="Bedankt voor je betaling. Je kunt nu direct aan de slag met het genereren van je professionele brief."
          buttons={[{ text: "Start met schrijven", href: "/" }]}
        />
        <FooterMedia
          logoText="BriefBaas AI"
          columns={[
            { title: "Platform", items: [{ label: "Home", href: "/" }, { label: "Prijzen", href: "/pricing" }] }
          ]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}