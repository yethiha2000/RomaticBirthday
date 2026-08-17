import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio("/music/romantic.mp3");
    audio.loop = true;
    audio.volume = .35;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }

    try {
      await audio.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  };

  return (
    <button
      onClick={toggleMusic}
      aria-label={playing ? "Pause music" : "Play music"}
      className="glass fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full transition hover:bg-white/10"
    >
      {playing ? (
        <Volume2 size={18} className="text-pink-200" />
      ) : (
        <VolumeX size={18} className="text-white/60" />
      )}
    </button>
  );
}

export default MusicPlayer;