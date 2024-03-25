import { NextRequest, NextResponse } from "next/server";

import { AzureKeyCredential, OpenAIClient } from "@azure/openai";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get("audio") as File;
  console.log(">>", file);

  if (
    process.env.AZURE_API_KEY === undefined ||
    process.env.AZURE_ENDPOINT === undefined ||
    process.env.AZURE_DEPLOYMENT_NAME === undefined ||
    process.env.AZURE_DEPLOYMENT_COMPLETIONS_NAME === undefined
  ) {
    console.error("Azure credentials not set");
    return {
      sender: "",
      response: "Azure credentials not set",
    };
  }

  if (file.size === 0) {
    return {
      sender: "",
      response: "No audio file provided",
    };
  }

  console.log(">>", file);
}
