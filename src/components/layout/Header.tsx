import { Cloud, Heart, Sun } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <header className="relative overflow-hidden bg-gradient-to-r from-primary/5 via-secondary/5 to-muted/10 border-b border-border/50">
      <div className="absolute inset-0 bg-[url('/soft-abstract-wellness-pattern.png')] opacity-5 [background-position:0_0] animate-[bg-move_40s_linear_infinite]"></div>
      <div className="relative container mx-auto px-4 py-16 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="p-3 rounded-full bg-primary/10 backdrop-blur-sm">
            <Cloud className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground font-sans">
            DespejarApp
          </h1>
          <div className="p-3 rounded-full bg-secondary/10 backdrop-blur-sm">
            <Sun className="h-8 w-8 text-secondary-foreground" />
          </div>
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance">
          Despeja tu mente, encuentra inspiración y descubre actividades que
          nutran tu bienestar
        </p>
        <div className="flex items-center justify-center gap-2 mt-6">
          <Heart className="h-5 w-5 text-accent" />
          <span className="text-sm text-muted-foreground">
            Hub de bienestar y hábitos
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
