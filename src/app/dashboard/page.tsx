"use client";

import { useState } from "react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { FileText, User, LogOut, PlusCircle } from "lucide-react";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("history");

  const menuItems = [
    { id: "history", label: "Mijn Brieven", icon: FileText },
    { id: "profile", label: "Gebruikersbeheer", icon: User },
  ];

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
      <div className="min-h-screen flex bg-gray-50">
        <aside className="w-64 bg-white border-r border-gray-200 p-6">
          <h1 className="text-2xl font-bold mb-8">BriefBaas Dashboard</h1>
          <nav className="space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center space-x-3 w-full p-3 rounded-lg ${activeTab === item.id ? "bg-blue-50 text-blue-700" : "text-gray-600 hover:bg-gray-100"}`}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
          <div className="mt-auto pt-10">
            <button className="flex items-center space-x-3 text-red-600 hover:text-red-700 font-medium">
                <LogOut size={20} />
                <span>Uitloggen</span>
            </button>
          </div>
        </aside>

        <main className="flex-1 p-8">
          <header className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold capitalize">{activeTab === "history" ? "Mijn Brieven" : activeTab}</h2>
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
                <PlusCircle size={20} />
                <span>Nieuwe brief maken</span>
            </button>
          </header>

          <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-gray-600">Welkom terug in je persoonlijke omgeving. Hier beheer je al je gegenereerde brieven en accountinstellingen.</p>
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
}