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
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "/" },
            { name: "Problemen", id: "/#problemen" },
            { name: "Prijzen", id: "/pricing" },
            { name: "FAQ", id: "/#faq" },
          ]}
          brandName="BriefBaas AI"
        />
        
        <div className="pt-32 pb-20">
            <PricingCardEight
              animationType="slide-up"
              textboxLayout="default"
              useInvertedBackground={false}
              title="Kies je pakket"
              description="Stripe-powered beveiligde betalingen voor jouw juridische documenten."
              plans={[
                { id: "single", badge: "Populair", price: "€9,99", subtitle: "Eén brief", features: ["Volledige klachtbrief", "Toonkeuze", "Direct downloaden"], buttons: [{ text: "Koop nu" }] },
                { id: "pro", badge: "Professioneel", price: "€29,99", subtitle: "Compleet pakket", features: ["Klacht + Ingebrekestelling", "Juridische checklist", "Prioriteit support"], buttons: [{ text: "Koop nu" }] }
              ]}
            />
        </div>

        <div className="py-10 text-center text-sm opacity-60">
            <p>© 2025 BriefBaas AI. Disclaimer: Dit platform is geen juridisch adviesbureau. Door betaling ga je akkoord met onze voorwaarden.</p>
        </div>

        <FooterMedia
          logoText="BriefBaas AI"
          columns={[
            { title: "Platform", items: [{ label: "Home", href: "/" }, { label: "Prijzen", href: "/pricing" }] },
            { title: "Juridisch", items: [{ label: "Disclaimer", href: "#" }, { label: "Algemene voorwaarden", href: "#" }] },
          ]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}
