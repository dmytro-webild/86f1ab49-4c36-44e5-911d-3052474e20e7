"use client";

import { useState } from "react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import { ChevronRight, FileCheck, Info, User, CheckCircle } from "lucide-react";

export default function WizardPage() {
  const [step, setStep] = useState(1);
  const steps = [
    "Categorie kiezen",    "Gegevens invullen",    "Juridische check",    "Brief genereren"];

  return (
    <ThemeProvider>
      <NavbarStyleApple
        navItems={[
          { name: "Terug naar home", id: "/" },
        ]}
        brandName="BriefBaas AI"
      />
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="mb-12">
          <div className="flex justify-between mb-4">
            {steps.map((s, i) => (
              <div key={i} className={`flex items-center ${i + 1 <= step ? "text-primary" : "text-gray-400"}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${i + 1 <= step ? "border-primary bg-primary text-white" : "border-gray-300"}`}>
                  {i + 1}
                </div>
                <span className="ml-2 text-sm font-medium hidden sm:block">{s}</span>
              </div>
            ))}
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-primary transition-all" style={{ width: `${(step / steps.length) * 100}%` }}></div>
          </div>
        </div>

        <div className="bg-card border rounded-2xl p-8 shadow-sm">
          <h1 className="text-3xl font-bold mb-2">Stap {step}: {steps[step - 1]}</h1>
          <p className="text-muted-foreground mb-8">Vul de details in voor je juridische brief.</p>
          
          <div className="space-y-6">
            <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg flex gap-4">
              <Info className="text-blue-600 flex-shrink-0" />
              <div className="text-sm text-blue-900">
                <strong>Juridisch inzicht:</strong> Zorg dat je de aankoopdatum bij de hand hebt. Dit is cruciaal voor de wettelijke garantieperiode in Nederland.
              </div>
            </div>

            <div className="space-y-4">
              <label className="block font-medium">Wat is je klacht?</label>
              <textarea className="w-full p-3 border rounded-lg min-h-[150px]" placeholder="Beschrijf kort wat er misging..." />
            </div>

            <div className="flex justify-end pt-4">
              {step < steps.length ? (
                <button 
                  onClick={() => setStep(step + 1)}
                  className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2 rounded-full font-medium hover:opacity-90"
                >
                  Volgende stap <ChevronRight size={18} />
                </button>
              ) : (
                <button className="flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-full font-medium">
                  Brief genereren <FileCheck size={18} />
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}