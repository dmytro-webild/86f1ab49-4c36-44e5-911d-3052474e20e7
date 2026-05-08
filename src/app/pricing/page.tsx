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
            { name: "Prijzen", id: "/pricing" },
          ]}
          brandName="BriefBaas AI"
        />
        
        <div className="pt-32 pb-20">
            <PricingCardEight
              animationType="slide-up"
              textboxLayout="default"
              useInvertedBackground={false}
              title="Kies je pakket"
              description="Direct aan de slag met jouw juridische documenten."
              plans={[
                { 
                  id: "single", 
                  badge: "Basis", 
                  price: "€9,99", 
                  subtitle: "Eén brief", 
                  features: [
                    "Volledige klachtbrief", 
                    "Toonkeuze voor je brief", 
                    "Direct downloaden als PDF/Word", 
                    "Standaard ondersteuning"
                  ], 
                  buttons: [{ text: "Koop nu", href: "https://buy.stripe.com/test_3cI9AS7qC69Q9HueQwa3u00" }] 
                },
                { 
                  id: "pro", 
                  badge: "Professioneel", 
                  price: "€29,99", 
                  subtitle: "Compleet pakket", 
                  features: [
                    "Alle functies van het basispakket",                    "Inclusief formele ingebrekestelling", 
                    "Stap-voor-stap juridisch plan", 
                    "Bewijschecklist voor sterke dossiervorming",                    "Prioriteit ondersteuning"
                  ], 
                  buttons: [{ text: "Koop nu", href: "https://buy.stripe.com/test_bJe00i6myeGmf1OfUAa3u01" }] 
                }
              ]}
            />
        </div>

        <div className="py-10 text-center text-sm opacity-60 px-4">
            <p>© 2025 BriefBaas AI. Disclaimer: BriefBaas AI is een hulpmiddel voor het genereren van teksten en biedt geen juridisch advies. Gebruik van deze service is voor eigen risico. Controleer altijd zelf de inhoud van de gegenereerde brieven en of deze van toepassing zijn op jouw specifieke situatie en vigerende wetgeving.</p>
        </div>

        <FooterMedia
          logoText="BriefBaas AI"
          imageSrc="/placeholder.png"
          columns={[
            { title: "Platform", items: [{ label: "Home", href: "/" }, { label: "Prijzen", href: "/pricing" }] },
            { title: "Juridisch", items: [{ label: "Disclaimer", href: "#" }, { label: "Algemene voorwaarden", href: "#" }] },
          ]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}