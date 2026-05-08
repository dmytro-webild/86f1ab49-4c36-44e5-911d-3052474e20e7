"use client";

import { useState } from "react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import { Download, FileText, Printer, AlertTriangle } from "lucide-react";

export default function ResultPage() {
  const [letterContent, setLetterContent] = useState("Geachte heer/mevrouw,\n\nHierbij wil ik formeel mijn ontevredenheid uiten over de recente aankoop. Het product voldoet niet aan de verwachtingen...\n\nMet vriendelijke groet,");

  return (
    <ThemeProvider defaultButtonVariant="expand-hover" defaultTextAnimation="background-highlight" borderRadius="pill" contentWidth="medium" sizing="medium" background="none" cardStyle="glass-elevated" primaryButtonStyle="gradient" secondaryButtonStyle="glass" headingFontWeight="normal">
      <ReactLenis root>
        <NavbarStyleApple 
          navItems={[{ name: "Home", id: "/" }, { name: "Voorbeelden", id: "/#voorbeelden" }, { name: "Prijzen", id: "/pricing" }]} 
          brandName="BriefBaas AI" 
        />
        <main className="container mx-auto px-6 py-20">
          <h1 className="text-4xl font-bold mb-8">Je conceptbrief</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <textarea 
                className="w-full h-96 p-6 border rounded-xl shadow-sm focus:ring-2 focus:ring-primary"
                value={letterContent}
                onChange={(e) => setLetterContent(e.target.value)}
              />
            </div>
            <div className="space-y-4">
              <button className="w-full flex items-center justify-center gap-2 p-4 bg-primary text-white rounded-lg">
                <Download /> Download PDF
              </button>
              <button className="w-full flex items-center justify-center gap-2 p-4 border rounded-lg">
                <FileText /> Opslaan als Word
              </button>
              <button className="w-full flex items-center justify-center gap-2 p-4 border rounded-lg">
                <Printer /> Printen
              </button>
            </div>
          </div>
          <div className="mt-12 p-6 bg-muted rounded-lg flex items-start gap-4">
            <AlertTriangle className="text-yellow-600 flex-shrink-0 mt-1" />
            <p className="text-sm text-muted-foreground">
              <strong>Juridische disclaimer:</strong> Deze gegenereerde brief is een concept en dient als hulpmiddel. BriefBaas AI biedt geen juridisch advies. Controleer altijd zelf of de gegevens en wetgeving in de brief correct zijn voor jouw specifieke situatie voordat je deze verstuurt.
            </p>
          </div>
        </main>
      </ReactLenis>
    </ThemeProvider>
  );
}