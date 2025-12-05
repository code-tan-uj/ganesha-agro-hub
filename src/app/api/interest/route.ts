import { NextRequest, NextResponse } from "next/server";

// In-memory storage for demo (works on Vercel serverless)
// For production, use Vercel KV, Supabase, or any database
const interests: Array<{
  timestamp: string;
  name: string;
  contact: string;
  interest: string;
  message: string;
}> = [];

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    const entry = {
      timestamp: new Date().toISOString(),
      name: data.name,
      contact: data.contact,
      interest: data.interest,
      message: data.message,
    };

    // Store in memory (for demo)
    interests.push(entry);

    // Log to console (visible in Vercel logs)
    console.log("New interest submission:", entry);

    return NextResponse.json({ success: true, message: "Interest recorded successfully" });
  } catch (error) {
    console.error("Error saving interest:", error);
    return NextResponse.json(
      { success: false, message: "Failed to record interest" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ interests });
}
