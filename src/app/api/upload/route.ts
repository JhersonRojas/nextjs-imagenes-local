// Paquetes de Node.js a sistema
import { writeFile } from "fs/promises";
import { join } from "path";
import { cwd } from "process";

// Paquetes de Next y React
import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const body = await request.formData();
        const imagen = body.get("imagen");

        if (!imagen)
            return NextResponse.json({ msg: "Debe llegar una imagen desde el cliente para procesar" }, { status: 400 });

        if (!(imagen instanceof Blob))
            throw new Error("No fue posible procesar la imagen");

        const bytes: ArrayBuffer = await imagen.arrayBuffer();
        const buffer: Buffer = Buffer.from(bytes);

        const path_img: string = join(cwd(), "public", "assets", imagen.name);

        const uploaded = await writeFile(path_img, buffer).then(() => true).catch(() => false);

        if (!uploaded)
            throw new Error("No fue posible almacenar la imagen");

        return NextResponse.json({ msg: "Se ha ingresado la imagen" }, { status: 200 });

    } catch (error) {
        console.error({
            error: "Error al ingresar una imagen",
            details: error,
        });
        return NextResponse.json({ msg: "Error al ingresar una imagen" }, { status: 500 });

    }
}
