'use client'

import React, { useState } from "react";
import { Quotes } from "../interfaces/quotes";
import { RefreshCw } from "lucide-react";
import { Button } from "../ui/button";

async function  getQuote(): Promise<Quotes>{
  const res = await fetch("http://localhost:3000/api/phrase");
  return res.json();
}

export default function QuoteContent({
  initialQuote,
}: {
  initialQuote: Quotes;
}) {
  const [currentQuote, setCurrentQuote] = useState<Quotes>(initialQuote);
  const [isLoading, setIsLoading] = useState(false);

  const getRandomQuote = async () => {
    setIsLoading(true);
    try {
      const quote = await getQuote();
      setCurrentQuote(quote);
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center py-12">
          <RefreshCw className="h-8 w-8 text-primary animate-spin" />
        </div>
      ) : currentQuote ? (
        <div className="space-y-6">
          <blockquote className="text-lg leading-relaxed text-foreground font-medium text-balance">
            &quot;{currentQuote.phrase}&quot;
          </blockquote>
          <div className="flex items-center justify-between">
            <cite className="text-sm text-muted-foreground font-medium">
              — {currentQuote.author}
            </cite>
            <Button
              onClick={getRandomQuote}
              disabled={isLoading}
              variant="outline"
              size="sm"
              className="gap-2 hover:bg-primary/10 hover:text-primary hover:border-primary/50 bg-transparent"
            >
              <RefreshCw className="h-4 w-4" />
              Nueva frase
            </Button>
          </div>
        </div>
      ) : (
        <div className="text-center py-8 text-muted-foreground">
          Error al cargar la frase. Intenta de nuevo.
        </div>
      )}
    </>
  );
};