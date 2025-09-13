// app/api/phrase/route.ts
import { NextResponse } from "next/server";
import phrases from "@/lib/data/phrases.json";

export async function GET() {
  try {
    // elegir una frase al azar
    const randomIndex = Math.floor(Math.random() * phrases.length);
    const randomPhrase = phrases[randomIndex];

    return NextResponse.json(randomPhrase);
  } catch (err) {
    return NextResponse.json(
      { error: "Error al leer frases", err },
      { status: 500 }
    );
  }
}