"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import FooterMedia from '@/components/sections/footer/FooterMedia';

export default function PricingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="medium"
        sizing="largeSmallSizeLargeTitles"
        background="blurBottom"
        cardStyle="outline"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
            <NavbarStyleApple
                navItems={[
                  { name: "Home", id: "/" },
                  { name: "Problemen", id: "/#problemen" },
                  { name: "Prijzen", id: "/pricing" },
                  { name: "FAQ", id: "/#faq" },
                ]}
                brandName="BriefBaas AI"
            />
        </div>

        <div id="prijzen" data-section="prijzen">
          <PricingCardEight
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            plans={[
              { id: "free", badge: "Gratis", price: "€0", subtitle: "Voorbeelden bekijken", features: ["Bekijk voorbeelden", "Beperkte uitleg", "Geen downloads"], buttons: [{ text: "Begin nu" }] },
              { id: "single", badge: "Populair", price: "€9,99", subtitle: "Eén brief", features: ["Volledige klachtbrief", "Toonkeuze", "Download PDF/Word"], buttons: [{ text: "Koop nu" }] },
              { id: "complete", badge: "Compleet", price: "€29,99", subtitle: "Compleet pakket", features: ["Klacht + Ingebrekestelling", "Stappenplan", "Bewijschecklist"], buttons: [{ text: "Koop nu" }] },
            ]}
            title="Kies je pakket"
            description="Betaal alleen voor wat je nodig hebt."
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterMedia
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DRLqekDrDgj7cwgtaTSZZ1Xtzm/modern-dutch-consumer-interface-clean-so-1778242138111-9a9309d0.png?_wi=2"
            logoText="BriefBaas AI"
            columns={[
              { title: "Platform", items: [{ label: "Home", href: "/" }, { label: "Prijzen", href: "/pricing" }] },
              { title: "Juridisch", items: [{ label: "Disclaimer", href: "#" }, { label: "Algemene voorwaarden", href: "#" }] },
            ]}
            copyrightText="© 2025 BriefBaas AI"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
