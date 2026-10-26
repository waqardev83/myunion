
import { Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import TopHader from "./components/layout/TopHader.jsx";
import Home from "./pages/Home.jsx";

export default function App() {
  return (
    <div className="min-h-screen">
      <TopHader />
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}