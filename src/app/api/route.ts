import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({ create_by: "Jherson A Rojas" });
}
