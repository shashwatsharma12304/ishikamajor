import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Check, X, AlertCircle } from "lucide-react";
import { DiseaseResult } from "@/lib/api";
import { cn } from "@/lib/utils";

interface ResultsDisplayProps {
  results: DiseaseResult[] | null;
  image: string | null;
  loading: boolean;
}

const getDescriptionForDisease = (diseaseName: string, confidence: number): string => {
  const confidencePercent = Math.round(confidence * 100);
  
  if (confidence > 0.7) {
    return `High probability (${confidencePercent}%) of ${diseaseName.toLowerCase()}.`;
  } else if (confidence > 0.5) {
    return `Moderate indication (${confidencePercent}%) of ${diseaseName.toLowerCase()}.`;
  } else if (confidence > 0.3) {
    return `Low indication (${confidencePercent}%) of ${diseaseName.toLowerCase()}.`;
  } else {
    return `No significant evidence (${confidencePercent}%) of ${diseaseName.toLowerCase()}.`;
  }
};

const ResultsDisplay = ({ results, image, loading }: ResultsDisplayProps) => {
  if (!image) return null;

  // For debugging - log the results structure
  console.log("Results data:", results);

  return (
    <Card className="glass-card mt-8 overflow-hidden">
      <CardHeader className="pb-3 bg-gradient-to-r from-medical-600 to-medical-700 text-white">
        <CardTitle className="text-xl">Analysis Results</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-8">
            <div className="w-16 h-16 border-4 border-medical-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-lg">Analyzing X-Ray image...</p>
            <p className="text-sm text-muted-foreground animate-pulse-slow">
              Our AI is processing your image. This may take a few moments.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black/5 dark:bg-white/5 rounded-lg p-3">
              <img 
                src={image} 
                alt="Analyzed X-Ray" 
                className="w-full h-auto rounded border border-gray-200 dark:border-gray-700"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Detected Conditions:</h3>
              {results && results.length > 0 ? (
                <div className="space-y-4">
                  {results.map((result) => {
                    const isDetected = result.confidence > 0.5;
                    const displayName = result.class_name.replace('_', ' ');
                    return (
                      <div key={result.class_name} className="animate-fade-in">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{displayName}</span>
                            {isDetected ? (
                              <span className="bg-medical-100 text-medical-800 text-xs px-2 py-0.5 rounded-full flex items-center">
                                <Check className="h-3 w-3 mr-1" />Detected
                              </span>
                            ) : (
                              <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full flex items-center dark:bg-gray-800 dark:text-gray-400">
                                <X className="h-3 w-3 mr-1" />Not Detected
                              </span>
                            )}
                          </div>
                          <span className="text-sm font-medium">{Math.round(result.confidence * 100)}%</span>
                        </div>
                        <Progress 
                          value={result.confidence * 100} 
                          className={cn(
                            "h-2",
                            isDetected ? "bg-gray-200 [&>div]:bg-medical-500" : "bg-gray-200 [&>div]:bg-gray-400",
                            "dark:bg-gray-700"
                          )}
                        />
                        <p className="text-sm text-muted-foreground mt-1">
                          {getDescriptionForDisease(displayName, result.confidence)}
                        </p>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-8">
                  {image && !loading && !results && (
                    <div className="flex flex-col items-center">
                      <p className="text-blue-600 font-medium mb-2">X-Ray image ready for analysis</p>
                      <p className="text-sm text-muted-foreground">
                        Click the "Analyze Image" button to start processing
                      </p>
                    </div>
                  )}
                  
                  {image && !loading && results && results.length === 0 && (
                    <div className="flex flex-col items-center">
                      <AlertCircle className="h-12 w-12 text-yellow-500 mb-2" />
                      <p className="text-lg font-medium mb-1">No conditions detected</p>
                      <p className="text-sm text-muted-foreground">
                        The analysis did not find any notable conditions in this X-ray.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ResultsDisplay;
