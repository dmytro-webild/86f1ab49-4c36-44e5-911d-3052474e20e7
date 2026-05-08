"use client";

import { useState } from "react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import FooterMedia from '@/components/sections/footer/FooterMedia';

export default function PricingPage() {
  const [showModal, setShowModal] = useState<null | string>(null);

  const handlePurchase = (id: string) => {
    setShowModal(id);
  };

  const confirmPurchase = (id: string) => {
    const urls: Record<string, string> = {
      single: "https://buy.stripe.com/test_3cI9AS7qC69Q9HueQwa3u00",      pro: "https://buy.stripe.com/test_bJe00i6myeGmf1OfUAa3u01"};
    window.location.href = urls[id];
  };

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
            { name: "Voorbeelden", id: "/#voorbeelden" },
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
                  features: ["Volledige klachtbrief", "Toonkeuze voor je brief", "Direct downloaden als PDF/Word", "Standaard ondersteuning"],
                  buttons: [{ text: "Koop nu", onClick: () => handlePurchase("single") }] 
                },
                { 
                  id: "pro", 
                  badge: "Professioneel", 
                  price: "€29,99", 
                  subtitle: "Compleet pakket", 
                  features: ["Alle functies van het basispakket", "Inclusief formele ingebrekestelling", "Stap-voor-stap juridisch plan", "Bewijschecklist voor sterke dossiervorming", "Prioriteit ondersteuning"],
                  buttons: [{ text: "Koop nu", onClick: () => handlePurchase("pro") }] 
                }
              ]}
            />
        </div>

        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <div className="bg-white p-8 rounded-2xl max-w-sm w-full shadow-xl">
              <h2 className="text-xl font-bold mb-4">Bevestig je betaling</h2>
              <p className="text-gray-600 mb-6">Je staat op het punt om doorverwezen te worden naar Stripe om je betaling van {showModal === 'single' ? '€9,99' : '€29,99'} veilig te voltooien. Klik op doorgaan om verder te gaan.</p>
              <div className="flex gap-4">
                <button onClick={() => setShowModal(null)} className="flex-1 px-4 py-2 border rounded-full">Annuleren</button>
                <button onClick={() => confirmPurchase(showModal)} className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-full">Doorgaan</button>
              </div>
            </div>
          </div>
        )}

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