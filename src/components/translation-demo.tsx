"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TranslationService } from "@/lib/translation-service";
import { Languages, ArrowRight } from "lucide-react";

export function TranslationDemo() {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [isTranslating, setIsTranslating] = useState(false);

  const handleTranslate = async () => {
    if (!inputText.trim()) return;

    setIsTranslating(true);
    try {
      const result = await TranslationService.smartTranslate(
        inputText,
        "quote"
      );
      setTranslatedText(result);
    } catch (error) {
      console.error("Translation error:", error);
      setTranslatedText("Error en la traducción");
    } finally {
      setIsTranslating(false);
    }
  };

  const exampleTexts = [
    "Success is the sum of small efforts repeated day in and day out.",
    "The only way to do great work is to love what you do.",
    "Go for a walk in your neighborhood",
    "Meditate for 10 minutes",
  ];

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Languages className="h-5 w-5" />
          Demostración de Traducción
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="input-text">Texto en inglés:</Label>
          <Input
            id="input-text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Ingresa un texto en inglés para traducir..."
            className="w-full"
          />
        </div>

        <Button
          onClick={handleTranslate}
          disabled={!inputText.trim() || isTranslating}
          className="w-full gap-2"
        >
          {isTranslating ? (
            "Traduciendo..."
          ) : (
            <>
              Traducir al español
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </Button>

        {translatedText && (
          <div className="space-y-2">
            <Label>Traducción:</Label>
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-foreground">{translatedText}</p>
            </div>
          </div>
        )}

        <div className="space-y-3">
          <Label>Ejemplos rápidos:</Label>
          <div className="grid grid-cols-1 gap-2">
            {exampleTexts.map((text, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => setInputText(text)}
                className="text-left justify-start h-auto p-3 text-wrap"
              >
                {text}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
