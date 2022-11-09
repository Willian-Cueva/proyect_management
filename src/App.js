import doc from "./assets/docs/proyect.pdf"
function App() {
  return (
    <>
      <header><h1 className="text-3xl font-bold text-blue-500 text-center">Desarrollo de una aplicación móvil que permita mostrar la ubicación en tiempo real y la intercomunicación a través de comando de voz</h1>
        <div className="w-full text-center text-2xl font-semibold mt-4">Integrantes</div>
        <div className="flex justify-around mb-4"><p>Willian Cueva</p><p>Jean Agreda</p></div>
      </header>
      <main>
        <div className="w-full flex justify-center"><embed src={doc} type="application/pdf" width="90%" height="750px" /></div>
      </main>
    </>
  );
}

export default App;
