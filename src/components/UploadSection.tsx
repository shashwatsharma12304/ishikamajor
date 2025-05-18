import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CloudUpload, Image, Search } from "lucide-react";

interface UploadSectionProps {
  onImageUploaded: (imageData: string, file: File | null) => void;
  onAnalyzeRequest: () => void;
  hasImageUploaded: boolean;
}

const UploadSection = ({ onImageUploaded, onAnalyzeRequest, hasImageUploaded }: UploadSectionProps) => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Handle drag events
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // Handle drop event
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  // Handle file input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  // Process the files
  const handleFiles = (files: FileList) => {
    const file = files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setSelectedImage(result);
        onImageUploaded(result, file);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <Card className="glass-card">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold text-center mb-6 text-medical-800 dark:text-medical-200">
            Upload Chest X-Ray Image
          </h2>
          
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-all ${
              dragActive 
                ? "border-medical-500 bg-medical-100/30 dark:bg-medical-900/30" 
                : "border-gray-300 hover:border-medical-400 dark:border-gray-700"
            }`}
            onDragEnter={handleDrag}
            onDragOver={handleDrag}
            onDragLeave={handleDrag}
            onDrop={handleDrop}
          >
            {!selectedImage ? (
              <>
                <div className="flex justify-center mb-4">
                  <CloudUpload className="h-16 w-16 text-medical-500 dark:text-medical-400" />
                </div>
                <p className="text-lg mb-4 text-gray-600 dark:text-gray-300">
                  Drag and drop your X-Ray image here, or
                </p>
                <div className="relative">
                  <Button 
                    className="bg-medical-500 hover:bg-medical-600 text-white"
                    onClick={() => document.getElementById('fileInput')?.click()}
                  >
                    Browse Files
                  </Button>
                  <input
                    id="fileInput"
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                    className="hidden"
                  />
                </div>
                <p className="mt-4 text-sm text-gray-500">
                  Supports: JPEG, PNG, DICOM
                </p>
              </>
            ) : (
              <div className="relative">
                <img 
                  src={selectedImage} 
                  alt="Uploaded X-Ray" 
                  className="max-h-72 mx-auto rounded-lg"
                />
                <div className="mt-4 flex justify-center gap-4">
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSelectedImage(null);
                      setSelectedFile(null);
                      onImageUploaded("", null);
                    }}
                  >
                    Remove
                  </Button>
                  <Button 
                    className="bg-medical-500 hover:bg-medical-600 text-white gap-2"
                    onClick={onAnalyzeRequest}
                  >
                    <Search className="h-4 w-4" />
                    Analyze Image
                  </Button>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UploadSection;
