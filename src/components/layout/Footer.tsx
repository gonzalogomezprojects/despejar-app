import { Cloud } from 'lucide-react';
import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Cloud className="h-5 w-5 text-primary" />
          <span className="font-semibold text-foreground">DespejarApp</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Creado con Next.js and love for open source code • Hub de bienestar y hábitos
        </p>
        <div className="flex items-center justify-center gap-4 mt-4 text-xs text-muted-foreground">
          <span>Frases motivacionales</span>
          <span>•</span>
          <span>Actividades sugeridas</span>
          <span>•</span>
          <span>Un lugar para despejarte</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer