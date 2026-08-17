import { useState } from "react";
import RomanticBackground from "./components/RomanticBackground";
import FloatingHearts from "./components/FloatingHearts";
import OpeningScreen from "./components/OpeningScreen";
import ScrollProgress from "./components/ScrollProgress";
import MusicPlayer from "./components/MusicPlayer";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import LoveMessage from "./components/LoveMessage";
import Surprise from "./components/Surprise";

function App() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      {!entered ? (
        <OpeningScreen onEnter={() => setEntered(true)} />
      ) : (
        <main className="relative min-h-screen overflow-hidden romantic-gradient">
          <ScrollProgress />
          <RomanticBackground />
          <FloatingHearts />
          <MusicPlayer />

          <div className="relative z-10">
            <Hero />
            <Gallery />
            <LoveMessage />
            <Surprise />

            <footer className="px-6 py-20 text-center">
              <p className="font-romantic text-3xl text-pink-100">
                Forever & Always
              </p>
              <p className="mt-4 text-sm text-white/30">
                Made with love ❤️
              </p>
            </footer>
          </div>
        </main>
      )}
    </>
  );
}

export default App;