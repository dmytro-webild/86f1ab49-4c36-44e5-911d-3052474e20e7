"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureBorderGlow from '@/components/sections/feature/featureBorderGlow/FeatureBorderGlow';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import TimelineHorizontalCardStack from '@/components/cardStack/layouts/timelines/TimelineHorizontalCardStack';
import { CheckCircle, Download, FileText, MessageSquare, PenTool, Shield, Smile, Info } from "lucide-react";

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
        { name: "Problemen", id: "#problemen" },
        { name: "Uitleg", id: "#uitleg" },
        { name: "Prijzen", id: "/pricing" },
        { name: "FAQ", id: "#faq" },
        { name: "Checkout", id: "/checkout" },
      ]}
      brandName="BriefBaas AI"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboard
      background={{ variant: "gradient-bars" }}
      logoText="BriefBaas AI"
      description="Maak binnen 2 minuten een sterke klachtbrief voor problemen met webshops, auto's, pakketdiensten en meer. Direct te downloaden in duidelijke taal."
      buttons={[
        { text: "Start gratis", href: "/pricing" },
        { text: "Bekijk voorbeelden", href: "#problemen" },
      ]}
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
              <p>Onze AI structureert jouw klacht aan de hand van de geldende consumentenwetgeving. We zorgen dat alle relevante feiten, zoals aankoopdatum en gebrek, op de juiste plek staan.</p>
              <h3 className="text-xl font-semibold">Waarom deze aanpak?</h3>
              <p>Een brief die de juiste wettelijke terminologie bevat, wordt door bedrijven 4x sneller serieus genomen. Wij voegen deze noodzakelijke juridische context voor je toe.</p>
              <h3 className="text-xl font-semibold">De gekozen toon</h3>
              <p>Wij adviseren een zakelijke maar beleefde toon. Dit houdt de relatie met de wederpartij professioneel en vergroot de kans op een positieve oplossing zonder escalatie.</p>
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
        { id: "p1", brand: "Webshop", name: "Product niet geleverd", price: "Klaar voor gebruik", rating: 5, reviewCount: "1.2k", imageSrc: "" },
        { id: "p2", brand: "Logistiek", name: "Pakket kwijt", price: "Klaar voor gebruik", rating: 5, reviewCount: "900", imageSrc: "" },
        { id: "p3", brand: "Automotive", name: "Verborgen gebrek", price: "Klaar voor gebruik", rating: 5, reviewCount: "450", imageSrc: "" },
        { id: "p4", brand: "Garantie", name: "Defect product", price: "Klaar voor gebruik", rating: 5, reviewCount: "750", imageSrc: "" },
      ]}
      title="Kies je probleem"
      description="Voor welke situatie heb je hulp nodig?"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      metrics={[
        { id: "m1", value: "5.000+", title: "Brieven gegenereerd", description: "Succesvolle conceptbrieven gemaakt.", icon: CheckCircle },
        { id: "m2", value: "98%", title: "Tevredenheid", description: "Consumenten vinden onze taal helder.", icon: Smile },
        { id: "m3", value: "100+", title: "Probleemtypes", description: "Voor vrijwel elke situatie een sjabloon.", icon: Shield },
      ]}
      title="Onze Impact"
      description="Waarom consumenten BriefBaas AI kiezen."
    />
  </div>

  <div id="prijzen" data-section="prijzen">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        { id: "free", badge: "Gratis", price: "€0", subtitle: "Voorbeelden bekijken", features: ["Bekijk voorbeelden", "Beperkte uitleg", "Geen downloads"], buttons: [{ text: "Begin nu" }] },
        { id: "single", badge: "Populair", price: "€9,99", subtitle: "Eén brief", features: ["Volledige klachtbrief", "Toonkeuze", "Download PDF/Word"], buttons: [{ text: "Koop nu", href: "/checkout" }] },
        { id: "complete", badge: "Compleet", price: "€29,99", subtitle: "Compleet pakket", features: ["Klacht + Ingebrekestelling", "Stappenplan", "Bewijschecklist"], buttons: [{ text: "Koop nu", href: "/checkout" }] },
      ]}
      title="Kies je pakket"
      description="Betaal alleen voor wat je nodig hebt."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        { id: "t1", title: "Snelle oplossing", quote: "Binnen 2 minuten stond mijn klachtbrief klaar.", name: "Anna de Vries", role: "Consument" },
        { id: "t2", title: "Zeer professioneel", quote: "De toonkeuze maakte het verschil voor mijn probleem.", name: "Mark Janssen", role: "Consument" },
        { id: "t3", title: "Duidelijk taal", quote: "Geen juridisch jargon, gewoon begrijpelijke taal.", name: "Peter Bakker", role: "Consument" },
      ]}
      title="Wat gebruikers zeggen"
      description="Ervaringen van consumenten die BriefBaas AI gebruikten."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        { id: "f1", title: "Is BriefBaas AI een advocaat?", content: "Nee, BriefBaas AI is geen advocatenkantoor en biedt geen juridisch advies. Echter, onze tools zijn wel ontwikkeld door juridisch experts die diepgaand inzicht hebben in de dagelijkse uitdagingen en problemen binnen deze juridische sector, zodat jij precies krijgt wat je nodig hebt." },
        { id: "f2", title: "Kan ik mijn brief aanpassen?", content: "Ja, je kunt de tekst direct in de editor aanpassen." },
        { id: "f3", title: "Worden mijn gegevens veilig opgeslagen?", content: "Ja, wij gaan veilig om met jouw persoonsgegevens." },
        { id: "f4", title: "Kan ik de brief downloaden als PDF?", content: "Ja, je kunt direct downloaden als PDF of Word." },
      ]}
      title="Veelgestelde vragen"
      description="Antwoorden op de meest gestelde vragen."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{ variant: "radial-gradient" }}
      tag="Start vandaag"
      title="Heb je een probleem?"
      description="Start nu en genereer je eerste conceptbrief binnen 2 minuten."
      buttons={[{ text: "Maak je brief" }]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      logoText="BriefBaas AI"
      imageSrc="/placeholder.png"
      columns={[
        { title: "Platform", items: [{ label: "Problemen", href: "#problemen" }, { label: "Prijzen", href: "/pricing" }, { label: "Checkout", href: "/checkout" }] },
        { title: "Juridisch", items: [{ label: "Disclaimer", href: "#" }, { label: "Algemene voorwaarden", href: "#" }] },
      ]}
      copyrightText="© 2025 BriefBaas AI"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}