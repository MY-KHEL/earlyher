import { NextResponse } from "next/server";

async function callGemini(prompt: string, retries = 5) {
  let delay = 1000;

  for (let attempt = 1; attempt <= retries; attempt++) {
    const res = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": process.env.GEMINI_API_KEY!,
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.1,
          },
        }),
      }
    );

    const rawText = await res.text();

    console.log(`🟡 Attempt ${attempt}`);
    console.log("📦 Status:", res.status);
    console.log("🧾 Raw Gemini Response:", rawText);

    let result: any = {};

    try {
      result = JSON.parse(rawText);
    } catch {
      throw new Error("Invalid JSON returned from Gemini");
    }

    // Success
    if (res.ok && !result.error) {
      return result;
    }

    // Retry for temporary failures
    if (
      (res.status === 429 || res.status === 503) &&
      attempt < retries
    ) {
      console.log(
        `⏳ Retrying in ${delay / 1000}s...`
      );

      await new Promise((resolve) =>
        setTimeout(resolve, delay)
      );

      // exponential backoff + jitter
      delay = delay * 2 + Math.random() * 500;

      continue;
    }

    throw new Error(
      result.error?.message ||
        `Gemini request failed with status ${res.status}`
    );
  }

  throw new Error("Maximum retry attempts reached");
}

export async function POST(req: Request) {
  try {
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "Missing Gemini API key" },
        { status: 500 }
      );
    }

    const body = await req.json();

    if (!body || Object.keys(body).length === 0) {
      return NextResponse.json(
        { error: "No patient data provided" },
        { status: 400 }
      );
    }

    console.log(
      "📥 Received patient data:",
      JSON.stringify(body, null, 2)
    );

    const prompt = `
You are a highly accurate medical AI model trained in statistical cancer risk assessments using validated models (Gail, Tyrer-Cuzick, BWHS, BOADICEA).

Based on the structured patient data below, estimate the patient's lifetime breast cancer risk as a single integer percentage (0 - 100).

Rules:
- Return ONLY a single integer number (e.g. 23). No text, no %, no explanation, no formatting.
- Use population averages for any missing fields.
- Apply logic consistent with Gail/Tyrer-Cuzick models, adjusted for African ancestry where relevant.
- You must always return a number — never refuse or say you cannot estimate.

Patient Data:
${JSON.stringify(body, null, 2)}
`;

    const result = await callGemini(prompt);

    console.log(
      "✅ Full Gemini response:",
      JSON.stringify(result, null, 2)
    );

    const rawMessage =
      result?.candidates?.[0]?.content?.parts
        ?.map((part: any) => part.text || "")
        .join(" ")
        .trim() || "";

    console.log("📝 Extracted text:", rawMessage);

    const match = rawMessage.match(/\d+/);

    if (!match) {
      return NextResponse.json(
        {
          error: "Model did not return a numeric estimate",
          raw: rawMessage,
        },
        { status: 500 }
      );
    }

    const riskScore = Math.min(
      100,
      Math.max(0, parseInt(match[0], 10))
    );

    console.log("✅ Risk Score:", riskScore);

    return NextResponse.json({ riskScore });
  } catch (error: any) {
    console.error(
      "❌ Server error:",
      error.message || error
    );

    return NextResponse.json(
      {
        error:
          error.message || "Unexpected server error",
      },
      { status: 500 }
    );
  }
}