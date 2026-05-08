"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureBorderGlow from '@/components/sections/feature/featureBorderGlow/FeatureBorderGlow';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TimelineHorizontalCardStack from '@/components/cardStack/layouts/timelines/TimelineHorizontalCardStack';
import { CheckCircle, Download, FileText, MessageSquare, PenTool, Mail, AlertCircle, Info, Search, BookOpen, Clock } from "lucide-react";

export default function LandingPage() {
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
        { name: "Problemen", id: "/#problemen" },
        { name: "Uitleg", id: "/#uitleg" },
        { name: "Voorbeelden", id: "/#voorbeelden" },
        { name: "Prijzen", id: "/pricing" },
        { name: "FAQ", id: "/#faq" },
      ]}
      brandName="BriefBaas AI"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboard
      logoText="BriefBaas AI"
      description="Maak binnen 2 minuten een sterke klachtbrief voor problemen met webshops, auto's, pakketdiensten en meer. Direct te downloaden in duidelijke taal."
      buttons={[
        { text: "Start direct", href: "/pricing" },
        { text: "Bekijk voorbeelden", href: "/#voorbeelden" },
      ]}
      background={{ variant: "gradient-bars" }}
      buttonAnimation="slide-up"
      mediaAnimation="opacity"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureBorderGlow
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        { icon: CheckCircle, title: "Kies je probleem", description: "Selecteer de categorie die past bij jouw situatie." },
        { icon: MessageSquare, title: "Beantwoord vragen", description: "Vul de details in over wat er misging." },
        { icon: PenTool, title: "Bepaal de toon", description: "Kies of je vriendelijk of zakelijk wilt klinken." },
        { icon: FileText, title: "Ontvang conceptbrief", description: "Genereer direct een concept met onze AI." },
        { icon: Download, title: "Download je document", description: "Download als PDF of Word en verstuur direct." },
      ]}
      title="Hoe het werkt"
      description="In 5 simpele stappen naar een professionele brief."
    />
  </div>

  <div id="voorbeelden" data-section="voorbeelden">
      <FeatureBorderGlow
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        { icon: Mail, title: "Product niet geleverd", description: "Direct geformuleerd volgens consumentenrecht om de leverplicht te benadrukken." },
        { icon: AlertCircle, title: "Beschadigd product", description: "Met verwijzing naar de conformiteitseis, essentieel voor een succesvolle claim." },
        { icon: Clock, title: "Retourbetaling uitblijft", description: "Juridisch onderbouwde sommatie om de terugbetalingstermijn te handhaven." },
        { icon: Search, title: "Verborgen gebrek", description: "Focus op de onderzoeksplicht en mededelingsplicht bij koopovereenkomsten." },
        { icon: BookOpen, title: "Abonnement opzeggen", description: "Duidelijk opzegbericht met inachtneming van de wettelijke opzegtermijnen." },
      ]}
      title="Voorbeelden van brieven"
      description="Bekijk onze meest gebruikte briefmodellen en de juridische focus per voorbeeld."
    />
  </div>

  <div id="uitleg" data-section="uitleg">
      <TimelineHorizontalCardStack
        title="Waarom BriefBaas AI?"
        description="Elke gegenereerde brief is opgebouwd op basis van juridische kaders en jouw specifieke situatie."
        textboxLayout="split-description"
        useInvertedBackground={false}
        tag="Transparantie"
        tagIcon={Info}
        ariaLabel="Uitleg sectie"
      >
          <div className="space-y-6">
              <h3 className="text-xl font-semibold">Wat we voor je doen</h3>
              <p>Onze AI structureert jouw klacht aan de hand van de geldende consumentenwetgeving.</p>
              <h3 className="text-xl font-semibold">Waarom deze aanpak?</h3>
              <p>Een brief met juridische terminologie wordt sneller serieus genomen.</p>
          </div>
      </TimelineHorizontalCardStack>
  </div>

  <div id="problemen" data-section="problemen">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        { id: "p1", brand: "Webshop", name: "Product niet geleverd", price: "Klaar voor gebruik", rating: 5, reviewCount: "1.2k", imageSrc: "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=800" },
        { id: "p2", brand: "Logistiek", name: "Pakket kwijt", price: "Klaar voor gebruik", rating: 5, reviewCount: "900", imageSrc: "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=800" },
        { id: "p3", brand: "Automotive", name: "Verborgen gebrek", price: "Klaar voor gebruik", rating: 5, reviewCount: "450", imageSrc: "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=800" },
        { id: "p4", brand: "Garantie", name: "Defect product", price: "Klaar voor gebruik", rating: 5, reviewCount: "750", imageSrc: "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=800" },
      ]}
      title="Kies je probleem"
      description="Voor welke situatie heb je hulp nodig?"
    />
  </div>

  <div id="prijzen" data-section="prijzen">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        { id: "single", badge: "Basis", price: "€9,99", subtitle: "Eén brief", features: ["Volledige klachtbrief", "Toonkeuze", "Download PDF/Word"], buttons: [{ text: "Koop nu", href: "https://buy.stripe.com/test_3cI9AS7qC69Q9HueQwa3u00" }] },
        { id: "complete", badge: "Compleet", price: "€29,99", subtitle: "Compleet pakket", features: ["Klacht + Ingebrekestelling", "Stappenplan", "Bewijschecklist"], buttons: [{ text: "Koop nu", href: "https://buy.stripe.com/test_bJe00i6myeGmf1OfUAa3u01" }] },
      ]}
      title="Kies je pakket"
      description="Betaal alleen voor wat je nodig hebt."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      logoText="BriefBaas AI"
      imageSrc="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=800"
      columns={[
        { title: "Platform", items: [{ label: "Problemen", href: "/#problemen" }, { label: "Prijzen", href: "/pricing" }] },
        { title: "Juridisch", items: [{ label: "Disclaimer", href: "#" }, { label: "Algemene voorwaarden", href: "#" }] },
      ]}
      copyrightText="© 2025 BriefBaas AI"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
