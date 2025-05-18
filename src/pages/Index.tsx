import React, { useState } from "react";
import Header from "@/components/Header";
import UploadSection from "@/components/UploadSection";
import ResultsDisplay from "@/components/ResultsDisplay";
import DiseaseInfo from "@/components/DiseaseInfo";
import Footer from "@/components/Footer";
import { Stethoscope, CloudUpload, Search, Check } from "lucide-react";

// Mock disease results for demonstration
const mockResults = [
  {
    name: "Pneumonia",
    confidence: 0.92,
    description: "High probability of bacterial pneumonia in right lower lobe.",
    detected: true,
  },
  {
    name: "Pulmonary Fibrosis",
    confidence: 0.17,
    description: "No significant fibrotic changes detected.",
    detected: false,
  },
  {
    name: "Lung Consolidation",
    confidence: 0.89,
    description: "Significant consolidation present in right lower lung field.",
    detected: true,
  },
  {
    name: "Emphysema",
    confidence: 0.08,
    description: "No evidence of emphysematous changes.",
    detected: false,
  },
  {
    name: "Pleural Effusion",
    confidence: 0.12,
    description: "No significant pleural effusion detected.",
    detected: false,
  },
];

const Index = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [analysisResults, setAnalysisResults] = useState<any[] | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleImageUploaded = (imageData: string) => {
    setUploadedImage(imageData);
    setAnalysisResults(null);
    
    // If an image was uploaded, simulate analysis after a delay
    if (imageData) {
      setTimeout(() => {
        handleAnalyzeImage();
      }, 500);
    }
  };

  const handleAnalyzeImage = () => {
    // Simulate loading state
    setIsAnalyzing(true);
    
    // Simulate API call with a delay
    setTimeout(() => {
      setAnalysisResults(mockResults);
      setIsAnalyzing(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-medical-600 to-medical-800 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              AI-Powered Lung Disease Detection
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Advanced deep learning for accurate, rapid diagnosis of multiple lung conditions from chest X-rays.
            </p>
            <div className="flex justify-center">
              <a 
                href="#upload"
                className="bg-white text-medical-700 font-medium py-3 px-6 rounded-lg hover:bg-medical-50 transition-colors"
              >
                Try It Now
              </a>
            </div>
          </div>
          <div className="hidden md:block absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent"></div>
        </section>
        
        {/* About Section */}
        <section className="py-16 px-6" id="about">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Our deep learning framework analyzes chest X-rays to detect multiple lung conditions with high accuracy, 
                providing rapid diagnostic assistance to healthcare providers.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md text-center">
                <div className="bg-medical-100 dark:bg-medical-900/50 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CloudUpload className="h-8 w-8 text-medical-600 dark:text-medical-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Upload X-Ray</h3>
                <p className="text-muted-foreground">
                  Simply upload a digital chest X-ray image in standard formats like JPEG, PNG, or DICOM.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md text-center">
                <div className="bg-medical-100 dark:bg-medical-900/50 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-medical-600 dark:text-medical-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
                <p className="text-muted-foreground">
                  Our CNN model processes the image, enhancing quality and extracting key diagnostic features.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md text-center">
                <div className="bg-medical-100 dark:bg-medical-900/50 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-medical-600 dark:text-medical-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Results</h3>
                <p className="text-muted-foreground">
                  Receive detailed analysis with disease probabilities and highlighted regions of interest.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Upload Section */}
        <section id="upload" className="py-10 px-6 bg-medical-50 dark:bg-medical-900/20">
          <UploadSection onImageUploaded={handleImageUploaded} />
          <ResultsDisplay results={analysisResults} image={uploadedImage} loading={isAnalyzing} />
        </section>
        
        {/* Diseases Info Section */}
        <DiseaseInfo />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
