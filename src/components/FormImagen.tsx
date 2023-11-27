"use client";

// Paquetes de Next y React
import { useState } from "react";

// Formulario para obtener la imagen del cliente
export default function FormImagen() {

  const [imagen, setImagen] = useState<File | undefined>(undefined);
  const [respuesta, setRespuesta] = useState<string | null>(null);

  const handleChange = (event: any) => {
    event.preventDefault();
    const files = event.target.files as FileList;
    setImagen(files[0]);
  };

  const handleUpload = async (event: any) => {
    try {
      event.preventDefault();
      if (!imagen) throw new Error("Es necesaria una imagen para guardar");

      const formdata = new FormData();
      formdata.append("imagen", imagen);

      const response = await fetch("http://localhost:3000/api/upload", {
        method: "POST",
        body: formdata
      });

      const data = await response.json();
      setRespuesta(data.msg)

    } catch (error) {
      console.error({
        error: "Error al ingresar la imagen",
        details: error
      });
      setRespuesta("A ocurrido un error al ingresar la imagen");

    } finally {
      setTimeout(() => {
        setRespuesta(null)
      }, 3000);
    }
  };

  return (
    <>
      <form id="form-imagen" className="w-full h-[15%] p-6 grid grid-cols-3 items-center">
        <input type="file" name="image" id="imagen" accept=".jpg, .jpeg, .png. svg, .webp" onChange={handleChange} className="col-span-2" />
        <button
          disabled={imagen ? false : true}
          onClick={handleUpload}
          className="bg-zinc-900 hover:bg-zinc-950 disabled:bg-zinc-700 text-white text-sm px-4 py-2 rounded-md col-span-1 transition-all"
        >
          Ingresar
        </button>
      </form>
      <figure className="w-full h-[70%] p-6 overflow-auto relative">
        {
          imagen
            // eslint-disable-next-line @next/next/no-img-element
            ? <img src={URL.createObjectURL(imagen)} alt="Imagen a ingresar" />
            : <div className="bg-zinc-900 text-white w-full h-full rounded-md grid justify-center items-center"> Sin imagen </div>
        }
        <span className={(!respuesta && "hidden") + " " + "bg-white text-black text-xs p-4 absolute bottom-5 right-5 border-zinc-950 border-[1px] rounded-md transition-all"}>
          {respuesta && respuesta}
        </span>
      </figure>
    </>
  );
}
