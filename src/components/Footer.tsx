import React from "react";
import { Heart, Stethoscope, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-medical-800 text-white py-8 mt-10" id="contact">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Stethoscope className="h-6 w-6" />
              <h3 className="text-xl font-bold">LungAI Diagnostics</h3>
            </div>
            <p className="text-medical-100/70 text-sm">
              Advanced AI-powered lung disease detection from chest X-rays, 
              helping healthcare providers make faster, more accurate diagnoses.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-medical-100/80">
              <li>
                <a href="#" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About the Technology</a>
              </li>
              <li>
                <a href="#diseases" className="hover:text-white transition-colors">Supported Diseases</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">For Healthcare Providers</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="not-italic text-medical-100/80">
              <div className="flex items-center gap-2 mb-2">
                <Mail className="h-4 w-4 text-medical-300" />
                <p>Email: ishika9557372726@gmail.com</p>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Phone className="h-4 w-4 text-medical-300" />
                <p>Phone: 9557372726</p>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-medical-300 mt-1" />
                <p>
                  Amity University Uttar Pradesh<br />
                  Amity Rd, Sector 125<br />
                  Noida, Uttar Pradesh 201301
                </p>
              </div>
            </address>
          </div>
        </div>
        
        <div className="border-t border-medical-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-medical-100/60">
            © {new Date().getFullYear()} LungAI Diagnostics. All rights reserved.
          </p>
          <div className="flex items-center mt-4 md:mt-0 text-sm text-medical-100/60">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-1 text-red-400" />
            <span>for better healthcare</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
