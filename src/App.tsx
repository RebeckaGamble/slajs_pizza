import { Route, Routes } from "react-router-dom";
import "./App.css";
import Checkout from "./pages/Checkout";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <>
      <Navbar />
      <main className="bg-slate-50 flex flex-col min-h-[100vh] h-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
