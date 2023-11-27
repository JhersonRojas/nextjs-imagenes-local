// Componentes
import FormImagen from "@/components/FormImagen";

// Página principal del App
export default function PageRoot() {
  return (
    <main className="bg-stone-50 w-screen h-screen overflow-hidden">
      <article className="w-full h-full grid">
        <section className="bg-white w-[35vw] h-[75vh] m-auto shadow-lg rounded-lg border-zinc-950 border-2">
          <header className="bg-zinc-950 h-[15%] p-6">
            <h2 className="text-white text-xl font-semibold">
              Imagen a guardar
            </h2>
          </header>

          {/* formulario de ingreso */}
          <FormImagen />
        </section>
      </article>
    </main>
  )
}
