// Componentes
import FormImagen from "@/components/FormImagen";

// Página principal del App
export default function PageRoot() {
  return (
    <main className="bg-stone-50 w-screen h-screen overflow-hidden">
      <article className="w-full h-full grid">
        <section className="bg-white w-[40vw] h-[80vh] m-auto shadow-lg rounded-lg border-zinc-950 border-2">
          <header className="bg-zinc-900 h-[15%] p-6">
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
