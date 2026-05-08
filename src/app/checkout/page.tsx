"use client";

import { useState } from "react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import { useSearchParams } from "next/navigation";

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const priceId = searchParams.get('priceId') || 'price_123'; // Default fallback

  const handleCheckout = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId }),
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error('Geen checkout URL ontvangen');
      }
    } catch (err) {
      setError("Er ging iets mis bij het starten van de betaling. Probeer het opnieuw.");
      setLoading(false);
    }
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
      <NavbarStyleApple
        navItems={[
          { name: "Terug naar home", id: "/" },
        ]}
        brandName="BriefBaas AI"
      />
      <main className="min-h-screen pt-32 px-4 md:px-8">
        <div className="max-w-xl mx-auto border p-8 rounded-2xl">
          <h1 className="text-3xl font-bold mb-6">Checkout</h1>
          <div className="space-y-4 mb-8">
             <div className="flex justify-between py-2 border-b">
               <span>Brief Service</span>
               <span className="font-semibold">€9,99</span>
             </div>
             <div className="flex justify-between py-2">
               <span className="text-xl font-bold">Totaal</span>
               <span className="text-xl font-bold">€9,99</span>
             </div>
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            onClick={handleCheckout}
            disabled={loading}
            className="w-full py-4 bg-black text-white rounded-full font-semibold hover:opacity-90 disabled:opacity-50 transition-all"
          >
            {loading ? "Bezig met laden..." : "Betalen met Stripe"}
          </button>
        </div>
      </main>
    </ThemeProvider>
  );
}