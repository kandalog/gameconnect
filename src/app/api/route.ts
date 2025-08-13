import { NextResponse } from "next/server";

import { adminDb } from "@/lib/firebase";

export async function GET(request: Request) {
  return NextResponse.json({ message: "hello" });
}
