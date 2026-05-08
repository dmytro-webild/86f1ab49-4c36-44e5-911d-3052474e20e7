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
import { CheckCircle, Download, FileText, MessageSquare, PenTool, Shield, Smile } from "lucide-react";

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
        {
          name: "Problemen",
          id: "#problemen",
        },
        {
          name: "Voorbeelden",
          id: "#voorbeelden",
        },
        {
          name: "Prijzen",
          id: "#prijzen",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
      ]}
      brandName="BriefBaas AI"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboard
      background={{
        variant: "gradient-bars",
      }}
      logoText="BriefBaas AI"
      description="Maak binnen 2 minuten een sterke klachtbrief voor problemen met webshops, auto's, pakketdiensten en meer. Direct te downloaden in duidelijke taal."
      buttons={[
        {
          text: "Start gratis",
          href: "#prijzen",
        },
        {
          text: "Bekijk voorbeelden",
          href: "#voorbeelden",
        },
      ]}
      buttonAnimation="slide-up"
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DRLqekDrDgj7cwgtaTSZZ1Xtzm/modern-dutch-consumer-interface-clean-so-1778242008423-9af5a9d1.png"
      mediaAnimation="opacity"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureBorderGlow
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          icon: CheckCircle,
          title: "Kies je probleem",
          description: "Selecteer de categorie die past bij jouw situatie.",
        },
        {
          icon: MessageSquare,
          title: "Beantwoord vragen",
          description: "Vul de details in over wat er misging.",
        },
        {
          icon: PenTool,
          title: "Bepaal de toon",
          description: "Kies of je vriendelijk of zakelijk wilt klinken.",
        },
        {
          icon: FileText,
          title: "Ontvang conceptbrief",
          description: "Genereer direct een concept met onze AI.",
        },
        {
          icon: Download,
          title: "Download je document",
          description: "Download als PDF of Word en verstuur direct.",
        },
      ]}
      title="Hoe het werkt"
      description="In 5 simpele stappen naar een professionele brief."
    />
  </div>

  <div id="problemen" data-section="problemen">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          brand: "Webshop",
          name: "Product wordt niet geleverd",
          price: "Geselecteerd",
          rating: 5,
          reviewCount: "1.2k",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DRLqekDrDgj7cwgtaTSZZ1Xtzm/a-neatly-arranged-digital-document-page--1778242039615-d54260cf.png",
        },
        {
          id: "p2",
          brand: "Logistiek",
          name: "Pakket kwijt of schade",
          price: "Geselecteerd",
          rating: 5,
          reviewCount: "900",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DRLqekDrDgj7cwgtaTSZZ1Xtzm/a-set-of-official-legal-documents-stacke-1778242049106-ca90fe22.png",
        },
        {
          id: "p3",
          brand: "Automotive",
          name: "Auto met verborgen gebrek",
          price: "Geselecteerd",
          rating: 5,
          reviewCount: "450",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DRLqekDrDgj7cwgtaTSZZ1Xtzm/a-professional-checklist-on-a-clipboard--1778242057350-48f41b5b.png",
        },
        {
          id: "p4",
          brand: "Garantie",
          name: "Defect product garantie",
          price: "Geselecteerd",
          rating: 5,
          reviewCount: "750",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DRLqekDrDgj7cwgtaTSZZ1Xtzm/pdf-file-icon-representing-digital-downl-1778242066220-7eae62d5.png",
        },
        {
          id: "p5",
          brand: "Wonen",
          name: "Verhuurder problemen",
          price: "Geselecteerd",
          rating: 5,
          reviewCount: "300",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DRLqekDrDgj7cwgtaTSZZ1Xtzm/word-document-file-icon-1778242073012-a91dbeaf.png",
        },
        {
          id: "p6",
          brand: "Service",
          name: "Algemene klacht",
          price: "Geselecteerd",
          rating: 5,
          reviewCount: "200",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DRLqekDrDgj7cwgtaTSZZ1Xtzm/envelope-icon-with-a-seal-for-profession-1778242082935-8bbaca2b.png",
        },
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
        {
          id: "m1",
          value: "5.000+",
          title: "Brieven gegenereerd",
          description: "Succesvolle conceptbrieven gemaakt.",
          icon: CheckCircle,
        },
        {
          id: "m2",
          value: "98%",
          title: "Te redenheid",
          description: "Consumenten vinden onze taal helder.",
          icon: Smile,
        },
        {
          id: "m3",
          value: "100+",
          title: "Probleemtypes",
          description: "Voor vrijwel elke situatie een sjabloon.",
          icon: Shield,
        },
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
        {
          id: "free",
          badge: "Gratis",
          price: "€0",
          subtitle: "Voorbeelden bekijken",
          features: [
            "Bekijk voorbeelden",
            "Beperkte uitleg",
            "Geen downloads",
          ],
          buttons: [
            {
              text: "Begin nu",
            },
          ],
        },
        {
          id: "single",
          badge: "Populair",
          price: "€9,99",
          subtitle: "Eén brief",
          features: [
            "Volledige klachtbrief",
            "Toonkeuze",
            "Download PDF/Word",
          ],
          buttons: [
            {
              text: "Koop nu",
            },
          ],
        },
        {
          id: "complete",
          badge: "Compleet",
          price: "€29,99",
          subtitle: "Compleet pakket",
          features: [
            "Klacht + Ingebrekestelling",
            "Stappenplan",
            "Bewijschecklist",
          ],
          buttons: [
            {
              text: "Koop nu",
            },
          ],
        },
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
        {
          id: "t1",
          title: "Snelle oplossing",
          quote: "Binnen 2 minuten stond mijn klachtbrief klaar.",
          name: "Anna de Vries",
          role: "Consument",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DRLqekDrDgj7cwgtaTSZZ1Xtzm/friendly-portrait-of-a-middle-aged-dutch-1778242091339-d9e6a48d.png",
        },
        {
          id: "t2",
          title: "Zeer professioneel",
          quote: "De toonkeuze maakte het verschil voor mijn probleem.",
          name: "Mark Janssen",
          role: "Consument",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DRLqekDrDgj7cwgtaTSZZ1Xtzm/friendly-portrait-of-a-young-professiona-1778242099371-e8230de9.png",
        },
        {
          id: "t3",
          title: "Duidelijk taal",
          quote: "Geen juridisch jargon, gewoon begrijpelijke taal.",
          name: "Peter Bakker",
          role: "Consument",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DRLqekDrDgj7cwgtaTSZZ1Xtzm/portrait-of-a-mature-consumer-1778242109499-71f126d7.png",
        },
        {
          id: "t4",
          title: "Werkt perfect",
          quote: "Eindelijk een webshop die wel reageerde.",
          name: "Sophie Willems",
          role: "Consument",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DRLqekDrDgj7cwgtaTSZZ1Xtzm/portrait-of-a-confident-young-woman-cons-1778242119711-45dd8687.png",
        },
        {
          id: "t5",
          title: "Bespaart tijd",
          quote: "Een brief opstellen duurde altijd uren, nu niet meer.",
          name: "Linda Jacobs",
          role: "Consument",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DRLqekDrDgj7cwgtaTSZZ1Xtzm/portrait-of-an-elderly-dutch-woman-consu-1778242128544-6f0d4cad.png",
        },
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
        {
          id: "f1",
          title: "Is BriefBaas AI een advocaat?",
          content: "Nee. BriefBaas AI geeft geen juridisch advies.",
        },
        {
          id: "f2",
          title: "Kan ik mijn brief aanpassen?",
          content: "Ja, je kunt de tekst direct in de editor aanpassen.",
        },
        {
          id: "f3",
          title: "Worden mijn gegevens veilig opgeslagen?",
          content: "Ja, wij gaan veilig om met jouw persoonsgegevens.",
        },
        {
          id: "f4",
          title: "Kan ik de brief downloaden als PDF?",
          content: "Ja, je kunt direct downloaden als PDF of Word.",
        },
      ]}
      title="Veelgestelde vragen"
      description="Antwoorden op de meest gestelde vragen."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "radial-gradient",
      }}
      tag="Start vandaag"
      title="Heb je een probleem?"
      description="Start nu en genereer je eerste conceptbrief binnen 2 minuten."
      buttons={[
        {
          text: "Maak je brief",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DRLqekDrDgj7cwgtaTSZZ1Xtzm/modern-dutch-consumer-interface-clean-so-1778242138111-9a9309d0.png"
      logoText="BriefBaas AI"
      columns={[
        {
          title: "Platform",
          items: [
            {
              label: "Problemen",
              href: "#problemen",
            },
            {
              label: "Prijzen",
              href: "#prijzen",
            },
          ],
        },
        {
          title: "Juridisch",
          items: [
            {
              label: "Disclaimer",
              href: "#",
            },
            {
              label: "Algemene voorwaarden",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2025 BriefBaas AI"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
