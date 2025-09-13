// Simulated translation service (replacing LibreTranslate API as requested)
// This service provides pre-translated content for the wellness app

interface TranslationMap {
  [key: string]: string;
}

// English to Spanish translations for quotes and activities
const englishToSpanishQuotes: TranslationMap = {
  "Success is the sum of small efforts repeated day in and day out.":
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
  "Don't wait for the perfect moment, take the moment and make it perfect.":
    "No esperes por el momento perfecto, toma el momento y hazlo perfecto.",
  "The only way to do great work is to love what you do.":
    "La única forma de hacer un gran trabajo es amar lo que haces.",
  "The future belongs to those who believe in the beauty of their dreams.":
    "El futuro pertenece a quienes creen en la belleza de sus sueños.",
  "It's not about being perfect, it's about being better than yesterday.":
    "No se trata de ser perfecto, se trata de ser mejor que ayer.",
  "Every day is a new opportunity to change your life.":
    "Cada día es una nueva oportunidad para cambiar tu vida.",
  "Motivation gets you started, habit keeps you going.":
    "La motivación te pone en marcha, el hábito te mantiene en movimiento.",
  "Believe in yourself and all that you are.":
    "Cree en ti mismo y todo lo que eres.",
};

const englishToSpanishActivities: TranslationMap = {
  "Go for a walk in your neighborhood": "Sal a caminar por tu barrio",
  "Meditate for 10 minutes": "Medita durante 10 minutos",
  "Write in a journal": "Escribe en un diario",
  "Call a friend you haven't talked to in a while":
    "Llama a un amigo con quien no has hablado en un tiempo",
  "Organize a space in your home": "Organiza un espacio de tu casa",
  "Cook a healthy meal": "Prepara una comida saludable",
  "Read a chapter of an inspiring book":
    "Lee un capítulo de un libro inspirador",
  "Practice deep breathing exercises":
    "Practica ejercicios de respiración profunda",
  "Listen to relaxing music while stretching":
    "Escucha música relajante mientras te estiras",
  "Plan a fun weekend activity":
    "Planifica una actividad divertida para el fin de semana",
};

export class TranslationService {
  /**
   * Simulates translation from English to Spanish
   * In a real implementation, this would call LibreTranslate API
   */
  static async translateToSpanish(
    text: string,
    type: "quote" | "activity" = "quote"
  ): Promise<string> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 300));

    const translationMap =
      type === "quote" ? englishToSpanishQuotes : englishToSpanishActivities;

    // Look for exact match first
    if (translationMap[text]) {
      return translationMap[text];
    }

    // Look for partial matches (for flexibility)
    for (const [english, spanish] of Object.entries(translationMap)) {
      if (
        text.toLowerCase().includes(english.toLowerCase()) ||
        english.toLowerCase().includes(text.toLowerCase())
      ) {
        return spanish;
      }
    }

    // If no translation found, return original text with a note
    console.warn(`Translation not found for: ${text}`);
    return text;
  }

  /**
   * Simulates batch translation for multiple texts
   */
  static async translateBatch(
    texts: string[],
    type: "quote" | "activity" = "quote"
  ): Promise<string[]> {
    const translations = await Promise.all(
      texts.map((text) => this.translateToSpanish(text, type))
    );
    return translations;
  }

  /**
   * Detects if text is already in Spanish (basic detection)
   */
  static isSpanish(text: string): boolean {
    const spanishIndicators = [
      "ñ",
      "á",
      "é",
      "í",
      "ó",
      "ú",
      "ü",
      "el ",
      "la ",
      "los ",
      "las ",
      "un ",
      "una ",
      "que ",
      "de ",
      "en ",
      "con ",
      "por ",
      "para ",
      "es ",
      "son ",
      "está ",
      "están ",
    ];

    const lowerText = text.toLowerCase();
    return spanishIndicators.some((indicator) => lowerText.includes(indicator));
  }

  /**
   * Smart translate - only translates if text is not already in Spanish
   */
  static async smartTranslate(
    text: string,
    type: "quote" | "activity" = "quote"
  ): Promise<string> {
    if (this.isSpanish(text)) {
      return text;
    }
    return this.translateToSpanish(text, type);
  }
}

// Export utility functions for easy use
export const translateQuote = (text: string) =>
  TranslationService.translateToSpanish(text, "quote");
export const translateActivity = (text: string) =>
  TranslationService.translateToSpanish(text, "activity");
export const smartTranslate = (
  text: string,
  type: "quote" | "activity" = "quote"
) => TranslationService.smartTranslate(text, type);
