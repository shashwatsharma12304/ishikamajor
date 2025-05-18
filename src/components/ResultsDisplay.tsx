
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Check } from "lucide-react";

// Define the result data structure
interface DiseaseResult {
  name: string;
  confidence: number;
  description: string;
  detected: boolean;
}

interface ResultsDisplayProps {
  results: DiseaseResult[] | null;
  image: string | null;
  loading: boolean;
}

const ResultsDisplay = ({ results, image, loading }: ResultsDisplayProps) => {
  if (!image) return null;

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
              {results ? (
                <div className="space-y-4">
                  {results.map((result) => (
                    <div key={result.name} className="animate-fade-in">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{result.name}</span>
                          {result.detected && (
                            <span className="bg-medical-100 text-medical-800 text-xs px-2 py-0.5 rounded-full flex items-center">
                              <Check className="h-3 w-3 mr-1" />Detected
                            </span>
                          )}
                        </div>
                        <span className="text-sm font-medium">{Math.round(result.confidence * 100)}%</span>
                      </div>
                      <Progress 
                        value={result.confidence * 100} 
                        className={`h-2 ${result.detected ? 'bg-gray-200 dark:bg-gray-700' : ''}`}
                        indicatorClassName={result.detected ? 'bg-medical-500' : 'bg-gray-400'}
                      />
                      <p className="text-sm text-muted-foreground mt-1">{result.description}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <p>Click "Analyze Image" to process the X-Ray</p>
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
