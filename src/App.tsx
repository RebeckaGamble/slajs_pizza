import { Route, Routes } from "react-router-dom";
import "./App.css";
import ShowMenu from "./components/menu/ShowMenu";
import Checkout from "./pages/checkout";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
    <Navbar />
      <main className="bg-slate-50 flex flex-col min-h-[100vh] h-auto">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/favorites" element={<Checkout />} />
        </Routes>
        <section className="max-w-[90rem] mx-auto px-4 2xl:px-0">
          <h1 className="font-semibold text-xl">Slajs Pizza</h1>
        </section>
        <section className="max-w-[90rem] mx-auto px-4 2xl:px-0">
          <ShowMenu />
        </section>
      </main>
    </>
  );
}

export default App;
