"use client";

// Paquetes de Next y React
import { FormEvent, useState } from "react";

// Formulario para obtener la imagen del cliente
export default function FormImagen() {

  const [imagen, setImagen] = useState(undefined);

  const handleUpload = (event: FormEvent) => {
    event.preventDefault();
    console.log(event.target)
  };

  return (
    <>
      <form onSubmit={handleUpload} id="form-imagen" className="w-full h-[15%] p-6 grid grid-cols-3 items-center">
        <input type="file" name="image" id="imagen" accept=".jpg, .jpeg, .png. svg, .webp" className="col-span-2" />
        <button type="submit" className="bg-zinc-950 text-white text-sm px-4 py-2 rounded-md col-span-1">
          Guardar
        </button>
      </form>
      <figure className="w-full h-[70%] p-6 overflow-auto">
        {
          !imagen
            ? <div className="bg-zinc-800 text-white w-full h-full rounded-md grid justify-center items-center"> Sin imagen </div>
            : <></>
        }
      </figure>
    </>
  );
}
