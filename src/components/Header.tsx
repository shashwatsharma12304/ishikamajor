
import React from "react";
import { Stethoscope } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-medical-600 to-medical-800 text-white py-4 px-6 md:px-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Stethoscope className="h-8 w-8" />
          <div>
            <h1 className="text-2xl font-bold">LungAI Diagnostics</h1>
            <p className="text-sm text-medical-100/80">Advanced Chest X-Ray Analysis</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-white hover:text-medical-200 transition-colors">Home</a>
          <a href="#about" className="text-white hover:text-medical-200 transition-colors">About</a>
          <a href="#diseases" className="text-white hover:text-medical-200 transition-colors">Diseases</a>
          <a href="#contact" className="text-white hover:text-medical-200 transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
