// app/api/phrase/route.ts
import { NextResponse } from "next/server";
import activity from "@/lib/data/activity.json";

export async function GET() {
  try {
    const randomIndex = Math.floor(Math.random() * activity.length);
    const randomPhrase = activity[randomIndex];

    return NextResponse.json(randomPhrase);
  } catch (err) {
    return NextResponse.json(
      { error: "Error al leer las actividades", err },
      { status: 500 }
    );
  }
}
