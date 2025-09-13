'use client'

import { Home, Lightbulb, RefreshCw, Users, Zap } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Activity } from "../interfaces/activity";
import { useState } from "react";

async function getActivity() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/activity`);
  return res.json();
}

const getTypeIcon = (type: string) => {
  switch (type) {
    case "social":
      return <Users className="h-4 w-4" />;
    case "relajación":
    case "bienestar":
      return <Zap className="h-4 w-4" />;
    case "productividad":
    case "planificación":
      return <Home className="h-4 w-4" />;
    default:
      return <Lightbulb className="h-4 w-4" />;
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case "social":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    case "relajación":
    case "bienestar":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
    case "ejercicio":
      return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
    case "productividad":
    case "planificación":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
  }
};

const ActivityContent = ({ activity }: { activity: Activity }) => {
  const [currentActivity, setCurrentActivity] = useState<Activity>(activity);

    const [isLoading, setIsLoading] = useState(false);
    
     async function getRandomActivity() {
         setIsLoading(true);
        try {
            const res = await getActivity();
            setCurrentActivity(res);
        } finally {
            setIsLoading(false)
        }
    }

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center py-12">
          <RefreshCw className="h-8 w-8 text-secondary-foreground animate-spin" />
        </div>
      ) : currentActivity ? (
        <div className="space-y-6">
          <div className="text-lg leading-relaxed text-foreground font-medium text-balance">
            {currentActivity.activity}
          </div>

          <div className="flex flex-wrap gap-3">
            <Badge
              variant="secondary"
              className={`gap-1 ${getTypeColor(currentActivity.type)}`}
            >
              {getTypeIcon(currentActivity.type)}
              {currentActivity.type}
            </Badge>

            {currentActivity.participants > 1 && (
              <Badge variant="outline" className="gap-1">
                <Users className="h-3 w-3" />
                {currentActivity.participants} personas
              </Badge>
            )}

            {currentActivity.price === 0 && (
              <Badge
                variant="outline"
                className="text-green-600 border-green-200"
              >
                Gratis
              </Badge>
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Dificultad:{" "}
              {currentActivity.accessibility < 0.3
                ? "Fácil"
                : currentActivity.accessibility < 0.7
                ? "Moderada"
                : "Alta"}
            </div>
            <Button
              onClick={getRandomActivity}
              disabled={isLoading}
              variant="outline"
              size="sm"
              className="gap-2 hover:bg-secondary/20 hover:text-secondary-foreground hover:border-secondary/50 bg-transparent"
            >
              <RefreshCw className="h-4 w-4" />
              Nueva actividad
            </Button>
          </div>
        </div>
      ) : (
        <div className="text-center py-8 text-muted-foreground">
          Error al cargar la actividad. Intenta de nuevo.
        </div>
      )}
    </>
  );
};

export default ActivityContent;
