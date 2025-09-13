import { QuoteCard } from "@/components/quotes/QuoteCard";
import { ActivityCard } from "@/components/activity/ActivityCard";
import { Cloud, Sun, Heart } from "lucide-react";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="space-y-12">
          <section className="text-center space-y-4">
            <h2 className="text-2xl font-semibold text-foreground font-sans">
              Bienvenido a tu espacio de tranquilidad
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-balance">
              Cada día es una nueva oportunidad para cuidar tu mente y encontrar
              momentos de paz. Comienza con una frase inspiradora y una
              actividad que te motive.
            </p>
          </section>

          <section className="space-y-6">
            <QuoteCard />
          </section>

          <section className="space-y-6">
            <ActivityCard />
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50">
              <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                <Cloud className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                Mente Clara
              </h3>
              <p className="text-sm text-muted-foreground text-balance">
                Frases inspiradoras para comenzar cada día con propósito
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50">
              <div className="p-3 rounded-full bg-secondary/20 w-fit mx-auto mb-4">
                <Sun className="h-6 w-6 text-secondary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                Actividad Positiva
              </h3>
              <p className="text-sm text-muted-foreground text-balance">
                Sugerencias personalizadas para mejorar tu bienestar
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50">
              <div className="p-3 rounded-full bg-accent/10 w-fit mx-auto mb-4">
                <Heart className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                Crecimiento Personal
              </h3>
              <p className="text-sm text-muted-foreground text-balance">
                Pequeños pasos hacia una vida más plena y equilibrada
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
