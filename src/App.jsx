
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Loader from "./components/Loader";
import Header from "./components/layout/Header";
import TopHader from "./components/layout/TopHader";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen">
      <TopHader />
      <Header />

      <main>
        <Home />
      </main>

      <Footer />
      <AnimatePresence>
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
    </div>
  );
}
