import doc from "./assets/docs/proyect.pdf"
import Header from "./components/Header";
function App() {
  return (
    <>
      <Header/>
      <main>
        <div className="w-full flex justify-center"><embed src={doc} type="application/pdf" width="90%" height="750px" /></div>
      </main>
    </>
  );
}

export default App;
