"use client";

// Paquetes de Next y React
import { useState } from "react";

// Formulario para obtener la imagen del cliente
export default function FormImagen() {

  const [imagen, setImagen] = useState<File | undefined>(undefined);

  const handleChange = (event: any) => {
    event.preventDefault();
    const files = event.target.files as FileList;
    setImagen(files[0]);
  };

  return (
    <>
      <form id="form-imagen" className="w-full h-[15%] p-6 grid grid-cols-3 items-center">
        <input type="file" name="image" id="imagen" accept=".jpg, .jpeg, .png. svg, .webp" onChange={handleChange} className="col-span-2" />
        <button type="submit" className="bg-zinc-900 text-white text-sm px-4 py-2 rounded-md col-span-1">
          Guardar
        </button>
      </form>
      <figure className="w-full h-[70%] p-6 overflow-auto">
        {
          imagen
            // eslint-disable-next-line @next/next/no-img-element
            ? <img src={URL.createObjectURL(imagen)} alt="Imagen a ingresar" />
            : <div className="bg-zinc-900 text-white w-full h-full rounded-md grid justify-center items-center"> Sin imagen </div>
        }
      </figure>
    </>
  );
}
