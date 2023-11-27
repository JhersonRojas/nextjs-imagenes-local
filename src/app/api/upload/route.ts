import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {

    const body = await request.formData();

    return NextResponse.json({ msg: "Se ha ingresado la imagen" });
}
