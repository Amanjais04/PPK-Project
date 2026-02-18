import { Play, Pause, User, Users, Mic, Volume2 } from "lucide-react";
import { useState, useRef } from "react";
import PoliticalAudio from "@/assets/audio/ElectionAudio.mp3"
interface SampleCard {
  title: string;
  description: string;
  duration: string;
  audioUrl: string;
}

const maleSamples: SampleCard[] = [
  { title: "Political Campaign", description: "Election rally and voting awareness prachar", duration: "0:32", audioUrl: "" },
  { title: "School Admission", description: "New session admission open announcement", duration: "0:28", audioUrl: "" },
  { title: "Shop Opening Offer", description: "Grand opening with special discounts", duration: "0:25", audioUrl: "" },
];

const femaleSamples: SampleCard[] = [
  { title: "Political Campaign", description: "Women empowerment rally prachar", duration: "0:59", audioUrl: PoliticalAudio },
  { title: "School Admission", description: "Coaching and tuition batch announcement", duration: "0:26", audioUrl: "" },
  { title: "Shop Opening Offer", description: "Festive season sale announcement", duration: "0:24", audioUrl: "" },
];

const AudioCard = ({ sample, accentClass }: { sample: SampleCard; accentClass: "male" | "female" }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (!sample.audioUrl) return;
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const isMale = accentClass === "male";

  return (
    <div className={`group relative rounded-xl border border-border bg-card p-3 sm:p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${isMale ? "hover:border-primary/40" : "hover:border-accent/60"}`}>
      <div className="flex items-center gap-3">
        {/* Play Button */}
        <button
          onClick={togglePlay}
          disabled={!sample.audioUrl}
          className={`relative flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${isMale
            ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
            : "bg-accent/15 text-accent-foreground group-hover:bg-accent group-hover:text-accent-foreground"
            } ${!sample.audioUrl ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
        >
          {isPlaying ? <Pause className="w-4 h-4 sm:w-5 sm:h-5" /> : <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5" />}
        </button>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h4 className="font-bold text-foreground text-sm leading-tight truncate">{sample.title}</h4>
            <span className={`flex-shrink-0 text-xs font-semibold px-2 py-0.5 rounded-full ${isMale ? "bg-primary/10 text-primary" : "bg-accent/15 text-accent-foreground"
              }`}>
              {sample.duration}
            </span>
          </div>
          <p className="text-muted-foreground text-xs mt-0.5 truncate">{sample.description}</p>
          {/* Fake waveform */}
          <div className="flex items-end gap-[2px] mt-2 h-4">
            {Array.from({ length: 20 }).map((_, i) => {
              const height = Math.random() * 100;
              return (
                <div
                  key={i}
                  className={`w-[3px] rounded-full transition-colors ${isMale ? "bg-primary/25 group-hover:bg-primary/50" : "bg-accent/30 group-hover:bg-accent/60"
                    }`}
                  style={{ height: `${Math.max(15, height)}%` }}
                />
              );
            })}
          </div>
        </div>
      </div>

      {sample.audioUrl && <audio ref={audioRef} src={sample.audioUrl} onEnded={() => setIsPlaying(false)} />}
    </div>
  );
};

const VoiceSamplesSection = () => {
  return (
    <section id="voice-samples" className="py-16 md:py-24 px-4 md:px-8 lg:px-16 relative overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="flex items-center justify-center gap-3 mb-3">
          <Volume2 className="w-6 h-6 text-accent" />
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Listen & Choose</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-4">
          Voice Samples
        </h2>
        <p className="text-muted-foreground text-center mb-14 max-w-xl mx-auto">
          Listen to our professional voice recordings for different categories
        </p>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-14 max-w-5xl mx-auto">
          {/* Male Voice */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                <User className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Male Voice</h3>
                <p className="text-xs text-muted-foreground">Professional male recordings</p>
              </div>
            </div>
            <div className="space-y-3">
              {maleSamples.map((s, i) => (
                <AudioCard key={i} sample={s} accentClass="male" />
              ))}
            </div>
          </div>

          {/* Female Voice */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center shadow-lg shadow-accent/20">
                <Users className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Female Voice</h3>
                <p className="text-xs text-muted-foreground">Professional female recordings</p>
              </div>
            </div>
            <div className="space-y-3">
              {femaleSamples.map((s, i) => (
                <AudioCard key={i} sample={s} accentClass="female" />
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-muted-foreground text-sm mt-10">
          <Mic className="inline w-4 h-4 mr-1 -mt-0.5" />
          Add your audio files to hear real samples. Contact us on WhatsApp for a free demo!
        </p>
      </div>
    </section>
  );
};

export default VoiceSamplesSection;