import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { keyword, content } = await request.json();

    if (!keyword || !content) {
      return NextResponse.json(
        { error: "Keyword y contenido son requeridos" },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "OPENAI_API_KEY no configurada" },
        { status: 500 }
      );
    }

    const prompt = `Eres un experto en SEO. Analiza el siguiente contenido de una landing page y devuelve SOLO un JSON con las siguientes evaluaciones (puntuación de 1 a 100):

KEYWORD TARGET: ${keyword}

CONTENIDO DE LA PÁGINA:
${content}

Evalúa:
1. "estructura": Qué tan bien está la estructura semántica (uso de H1, H2, párrafos, listas, FAQs). Considera jerarquía, organización y legibilidad.

2. "eeat": Evalúa Experience, Expertise, Authoritativeness, Trustworthiness. Considera si muestra credenciales, experiencia, información de contacto, y genera confianza.

3. "intencion": Qué tan bien coincide el contenido con la intención de búsqueda de alguien que busca "${keyword}". Considera si responde las preguntas del usuario y satisface su necesidad.

Responde SOLO con un JSON válido en este formato exacto, sin texto adicional:
{
  "estructura": <número>,
  "estructura_comentario": "<breve comentario de mejora>",
  "eeat": <número>,
  "eeat_comentario": "<breve comentario de mejora>",
  "intencion": <número>,
  "intencion_comentario": "<breve comentario de mejora>"
}`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.3,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("OpenAI API error:", error);
      return NextResponse.json(
        { error: "Error en la API de OpenAI" },
        { status: 500 }
      );
    }

    const data = await response.json();
    const messageContent = data.choices[0]?.message?.content;

    if (!messageContent) {
      return NextResponse.json(
        { error: "Respuesta vacía de OpenAI" },
        { status: 500 }
      );
    }

    // Parsear el JSON de la respuesta
    try {
      const evaluation = JSON.parse(messageContent);
      return NextResponse.json(evaluation);
    } catch {
      // Si no es JSON válido, intentar extraerlo
      const jsonMatch = messageContent.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const evaluation = JSON.parse(jsonMatch[0]);
        return NextResponse.json(evaluation);
      }
      return NextResponse.json(
        { error: "Respuesta no válida de OpenAI", raw: messageContent },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}




