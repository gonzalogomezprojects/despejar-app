import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";
import ActivityServer from "./ActivityServer";

export function ActivityCard() {
  return (
    <Card className="w-full max-w-2xl mx-auto bg-card/50 backdrop-blur-sm border-border/50 shadow-lg">
      <CardContent className="p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 rounded-full bg-secondary/20">
            <Lightbulb className="h-6 w-6 text-secondary-foreground" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-foreground mb-2 font-sans">
              Actividad Sugerida
            </h2>
            <p className="text-sm text-muted-foreground">
              Encuentra algo interesante que hacer
            </p>
          </div>
        </div>

        <ActivityServer />
      </CardContent>
    </Card>
  );
}
