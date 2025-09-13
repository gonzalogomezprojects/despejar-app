import { Card, CardContent } from "@/components/ui/card";
import QuoteContent from "./QuoteContent";
import { Quote } from "lucide-react";
import QuoteServer from "./QuoteServer";

export function QuoteCard() {
  return (
    <Card className="w-full max-w-2xl mx-auto bg-card/50 backdrop-blur-sm border-border/50 shadow-lg">
      <CardContent className="p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 rounded-full bg-primary/10">
            <Quote className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-foreground mb-2 font-sans">
              Frase Motivacional
            </h2>
            <p className="text-sm text-muted-foreground">
              Inspírate con sabiduría diaria
            </p>
          </div>
        </div>
        <QuoteServer/>
      </CardContent>
    </Card>
  );
}
