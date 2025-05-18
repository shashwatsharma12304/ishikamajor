
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Stethoscope, ThermometerSnowflake, Heart, Hospital } from "lucide-react";

const DiseaseInfo = () => {
  return (
    <div className="py-10" id="diseases">
      <h2 className="text-3xl font-bold text-center mb-2">Lung Conditions Analysis</h2>
      <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
        Our AI system can detect multiple lung conditions from chest X-ray images with high accuracy.
        Learn more about these conditions below.
      </p>
      
      <Tabs defaultValue="pneumonia" className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2">
            <TabsTrigger value="pneumonia" className="flex items-center gap-2">
              <ThermometerSnowflake className="h-4 w-4" />
              <span className="hidden md:inline">Pneumonia</span>
            </TabsTrigger>
            <TabsTrigger value="fibrosis" className="flex items-center gap-2">
              <Stethoscope className="h-4 w-4" />
              <span className="hidden md:inline">Fibrosis</span>
            </TabsTrigger>
            <TabsTrigger value="consolidation" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              <span className="hidden md:inline">Consolidation</span>
            </TabsTrigger>
            <TabsTrigger value="emphysema" className="flex items-center gap-2">
              <Stethoscope className="h-4 w-4" />
              <span className="hidden md:inline">Emphysema</span>
            </TabsTrigger>
            <TabsTrigger value="effusion" className="flex items-center gap-2">
              <Hospital className="h-4 w-4" />
              <span className="hidden md:inline">Effusion</span>
            </TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="pneumonia">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ThermometerSnowflake className="h-5 w-5 text-medical-600" />
                Pneumonia
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-medical-800 dark:text-medical-300">Description</h4>
                  <p className="text-muted-foreground">
                    Pneumonia is an infection that inflames the air sacs in one or both lungs. 
                    The air sacs may fill with fluid or pus, causing cough with phlegm or pus, 
                    fever, chills, and difficulty breathing.
                  </p>
                  
                  <h4 className="font-semibold mt-4 mb-2 text-medical-800 dark:text-medical-300">X-ray Characteristics</h4>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>White opacities/consolidation in lung fields</li>
                    <li>May affect one lobe, one lung, or both lungs</li>
                    <li>Air bronchograms may be visible</li>
                    <li>Silhouette sign with effacement of heart border</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-medical-800 dark:text-medical-300">AI Detection Accuracy</h4>
                  <p className="text-muted-foreground mb-4">
                    Our AI model achieves 91% accuracy in detecting pneumonia from chest X-rays,
                    with high sensitivity for early-stage cases that might be challenging for visual inspection.
                  </p>
                  
                  <div className="bg-medical-50 dark:bg-medical-900/30 p-4 rounded-lg border border-medical-100 dark:border-medical-800">
                    <h4 className="font-semibold mb-2 text-medical-800 dark:text-medical-300">Clinical Significance</h4>
                    <p className="text-sm text-muted-foreground">
                      Early detection of pneumonia is critical for prompt treatment and prevention of complications.
                      The AI can help identify subtle cases and distinguish bacterial from viral pneumonia
                      based on pattern recognition from thousands of training examples.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="fibrosis">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Stethoscope className="h-5 w-5 text-medical-600" />
                Pulmonary Fibrosis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-medical-800 dark:text-medical-300">Description</h4>
                  <p className="text-muted-foreground">
                    Pulmonary fibrosis is a condition where lung tissue becomes scarred and thickened over time,
                    making it difficult for oxygen to pass into the bloodstream. It's typically caused by
                    repeated injury to the lung tissue from various factors.
                  </p>
                  
                  <h4 className="font-semibold mt-4 mb-2 text-medical-800 dark:text-medical-300">X-ray Characteristics</h4>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>Reticular (net-like) opacities, predominantly in lower zones</li>
                    <li>Reduced lung volumes</li>
                    <li>Honeycombing in advanced cases</li>
                    <li>Traction bronchiectasis</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-medical-800 dark:text-medical-300">AI Detection Accuracy</h4>
                  <p className="text-muted-foreground mb-4">
                    Our model achieves 89% accuracy in detecting pulmonary fibrosis patterns,
                    helping identify cases early when intervention may slow progression.
                  </p>
                  
                  <div className="bg-medical-50 dark:bg-medical-900/30 p-4 rounded-lg border border-medical-100 dark:border-medical-800">
                    <h4 className="font-semibold mb-2 text-medical-800 dark:text-medical-300">Clinical Significance</h4>
                    <p className="text-sm text-muted-foreground">
                      Early detection of fibrosis can guide appropriate interventions and treatment planning.
                      The AI helps identify subtle fibrotic changes that may be overlooked in routine examination,
                      potentially allowing for earlier intervention.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="consolidation">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-medical-600" />
                Lung Consolidation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-medical-800 dark:text-medical-300">Description</h4>
                  <p className="text-muted-foreground">
                    Lung consolidation occurs when the air in the lungs is replaced with fluid or solid material.
                    It can be caused by pneumonia, pulmonary edema, or other conditions that fill the alveoli with
                    something other than air.
                  </p>
                  
                  <h4 className="font-semibold mt-4 mb-2 text-medical-800 dark:text-medical-300">X-ray Characteristics</h4>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>Dense opacity in affected lung area</li>
                    <li>Air bronchograms often visible</li>
                    <li>Lobar or segmental distribution</li>
                    <li>May cause shift of fissures or mediastinum</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-medical-800 dark:text-medical-300">AI Detection Accuracy</h4>
                  <p className="text-muted-foreground mb-4">
                    Our model identifies consolidation patterns with 93% accuracy across various causes,
                    helping distinguish between infectious, inflammatory, and other etiologies.
                  </p>
                  
                  <div className="bg-medical-50 dark:bg-medical-900/30 p-4 rounded-lg border border-medical-100 dark:border-medical-800">
                    <h4 className="font-semibold mb-2 text-medical-800 dark:text-medical-300">Clinical Significance</h4>
                    <p className="text-sm text-muted-foreground">
                      The pattern and distribution of consolidation help determine the underlying cause.
                      AI detection assists in quantifying the extent and tracking changes over time,
                      which is crucial for monitoring treatment response.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="emphysema">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Stethoscope className="h-5 w-5 text-medical-600" />
                Emphysema
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-medical-800 dark:text-medical-300">Description</h4>
                  <p className="text-muted-foreground">
                    Emphysema is a lung condition that causes shortness of breath due to damage to the air sacs in the lungs.
                    Over time, the inner walls of the air sacs weaken and rupture, creating larger air spaces instead of many small ones.
                  </p>
                  
                  <h4 className="font-semibold mt-4 mb-2 text-medical-800 dark:text-medical-300">X-ray Characteristics</h4>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>Hyperinflation with flattened diaphragms</li>
                    <li>Increased retrosternal airspace</li>
                    <li>Reduced vascular markings (particularly in upper zones)</li>
                    <li>Bullae or blebs may be visible</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-medical-800 dark:text-medical-300">AI Detection Accuracy</h4>
                  <p className="text-muted-foreground mb-4">
                    Our model detects emphysematous changes with 87% accuracy on chest X-rays,
                    though CT scans remain the gold standard for detailed assessment.
                  </p>
                  
                  <div className="bg-medical-50 dark:bg-medical-900/30 p-4 rounded-lg border border-medical-100 dark:border-medical-800">
                    <h4 className="font-semibold mb-2 text-medical-800 dark:text-medical-300">Clinical Significance</h4>
                    <p className="text-sm text-muted-foreground">
                      Early detection of emphysema can lead to interventions that slow disease progression,
                      such as smoking cessation and medication. The AI helps identify subtle changes that
                      may be missed in routine interpretation, especially in areas with limited radiological expertise.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="effusion">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Hospital className="h-5 w-5 text-medical-600" />
                Pleural Effusion
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-medical-800 dark:text-medical-300">Description</h4>
                  <p className="text-muted-foreground">
                    Pleural effusion is an abnormal accumulation of fluid between the thin layers of tissue (pleura) 
                    that line the lungs and the chest cavity. The fluid can be transudative (caused by fluid leaking) 
                    or exudative (caused by inflammation).
                  </p>
                  
                  <h4 className="font-semibold mt-4 mb-2 text-medical-800 dark:text-medical-300">X-ray Characteristics</h4>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>Blunting of costophrenic angle on an upright film</li>
                    <li>Fluid level visible on lateral decubitus views</li>
                    <li>Meniscus sign - concave upward opacity at lung base</li>
                    <li>May cause mediastinal shift if large</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-medical-800 dark:text-medical-300">AI Detection Accuracy</h4>
                  <p className="text-muted-foreground mb-4">
                    Our AI detects pleural effusions with 94% accuracy, including small effusions that
                    might be missed in initial readings, especially on suboptimal images.
                  </p>
                  
                  <div className="bg-medical-50 dark:bg-medical-900/30 p-4 rounded-lg border border-medical-100 dark:border-medical-800">
                    <h4 className="font-semibold mb-2 text-medical-800 dark:text-medical-300">Clinical Significance</h4>
                    <p className="text-sm text-muted-foreground">
                      Detection of effusion prompts investigation into underlying causes, which range from heart failure
                      to malignancy or infection. The AI quantifies the approximate volume and can detect subtle effusions,
                      improving diagnostic sensitivity in regions with limited radiological expertise.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DiseaseInfo;
