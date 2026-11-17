


"use client";

import { useState, useEffect } from "react";

const MEMORIES = [
  {
    src: "/images/mamur1.jpeg",
    title: "Our Little Snowflake",
    caption: "From your earliest days, your sparkling eyes brought pure Frozen magic into our world.",
  },
  {
    src: "/images/mamur2.jpeg",
    title: "Sweetest Smile in Arendelle",
    caption: "A smile brighter than a thousand ice crystals shining in the winter sun.",
  },
  {
    src: "/images/mamur3.jpeg",
    title: "Princess of Joy",
    caption: "Every little moment with you turns into a fairytale memory we cherish forever.",
  },
  {
    src: "/images/mamur4.jpeg",
    title: "Playful & Bright",
    caption: "Full of laughter, wonder, and endless adventures—just like a true Frozen princess!",
  },
  {
    src: "/images/mamur5.jpeg",
    title: "Stay True To Who You Are",
    caption: "Kind, graceful, and magical in every single way as you turn FIVE today!",
  },
  {
    src: "/images/mamur6.jpeg",
    title: "Little Star of Wonder",
    caption: "Dream big, shine bright, and never stop believing in your own special magic.",
  },
  {
    src: "/images/mamur7.jpeg",
    title: "Queen of Our Hearts",
    caption: "Happy 5th Birthday, Mamur! Today all of Arendelle celebrates YOU!",
  },
];

export default function FrozenBirthdayPage() {
  const [snowflakes, setSnowflakes] = useState([]);
  const [elsaPopup, setElsaPopup] = useState(false);
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [elsaImgSrc, setElsaImgSrc] = useState("/images/elsa.png");

  useEffect(() => {
    const flakes = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: `${(i * 2) % 100}%`,
      animationDuration: `${5 + (i % 6)}s`,
      animationDelay: `${(i % 4) * 0.7}s`,
      fontSize: `${12 + (i % 18)}px`,
      symbol: i % 3 === 0 ? "❄️" : i % 3 === 1 ? "❅" : "✨",
    }));
    setSnowflakes(flakes);
  }, []);

  const handleElsaError = () => {
    if (elsaImgSrc === "/images/elsa.png") {
      setElsaImgSrc("/images/elsa.jpg");
    }
  };

  return (
    <main className="relative min-h-screen pb-24 overflow-x-hidden text-white">
      {/* Falling Snowflakes */}
      {snowflakes.map((flake) => (
        <span
          key={flake.id}
          className="snowflake"
          style={{
            left: flake.left,
            animationDuration: flake.animationDuration,
            animationDelay: flake.animationDelay,
            fontSize: flake.fontSize,
          }}
        >
          {flake.symbol}
        </span>
      ))}

      

      {/* MAGICAL QUEEN ELSA POP-UP SURPRISE WHEN BUTTON CLICKED */}
      {elsaPopup && (
        <div
          onClick={() => setElsaPopup(false)}
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="animate-elsa-pop ice-card max-w-md w-full rounded-[2rem] p-6 text-center border-2 border-sky-300 shadow-[0_0_60px_rgba(56,189,248,0.9)] relative overflow-hidden bg-slate-900/90"
          >
            <div className="text-2xl mb-2">❄️✨👑✨❄️</div>
            <div className="w-48 h-56 mx-auto rounded-2xl overflow-hidden border-2 border-sky-200 shadow-[0_0_30px_rgba(125,211,252,0.8)] bg-sky-950">
              <img
                src={elsaImgSrc}
                onError={handleElsaError}
                alt="Queen Elsa Surprise"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <h3 className="text-2xl font-black text-sky-200 mt-4 royal-font ice-glow">
              Happy 5th Birthday, Mamur!
            </h3>
            <p className="text-sky-50 text-sm sm:text-base mt-2 leading-relaxed font-medium">
              &ldquo;I came all the way from my Ice Palace in Arendelle just to wish the sweetest 5-year-old princess a magical birthday! Keep shining bright, Mamur!&rdquo; ❄️💙
            </p>
            <span className="block text-xs font-bold text-sky-300 mt-2">
              — With Love, Queen Elsa 👑
            </span>

            <button
              type="button"
              onClick={() => setElsaPopup(false)}
              className="mt-5 px-8 py-2.5 rounded-full bg-gradient-to-r from-cyan-300 to-sky-400 text-slate-950 font-black text-sm cursor-pointer shadow-lg hover:scale-105 transition"
            >
              Thank You Queen Elsa! ❄️
            </button>
          </div>
        </div>
      )}

      

      {/* Top Royal Banner */}
      <div className="relative z-10 w-full flex justify-center pt-6 px-4">
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full ice-card text-sky-200 text-xs sm:text-sm font-bold tracking-widest uppercase shadow-2xl">
          <span>🏰</span>
          <span>Arendelle Royal Ice Celebration • 18 Nov</span>
          <span>❄️</span>
        </div>
      </div>

      {/* HERO SECTION WITH DIRECT QUEEN ELSA PICTURE */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 pt-8 pb-12">
        <div className="ice-card rounded-[2.5rem] p-6 sm:p-10 md:p-12 relative overflow-hidden border-2 border-sky-300/60 shadow-[0_0_50px_rgba(56,189,248,0.35)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Side: DIRECT Queen Elsa Picture Card */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-64 sm:w-80 rounded-3xl p-3 bg-gradient-to-b from-sky-300/50 via-cyan-500/20 to-indigo-600/50 border-2 border-sky-200 shadow-[0_0_40px_rgba(56,189,248,0.75)] animate-float">
                <div className="rounded-2xl overflow-hidden bg-sky-950 aspect-[3/4] relative">
                  <img
                    src={elsaImgSrc}
                    onError={handleElsaError}
                    alt="Queen Elsa of Arendelle"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent flex items-end justify-center p-4">
                    <span className="text-sky-200 font-bold text-sm tracking-wider drop-shadow-md">
                      ❄️ Queen Elsa of Arendelle ❄️
                    </span>
                  </div>
                </div>

                <div className="mt-3 bg-white/95 text-slate-950 rounded-2xl p-3 text-center shadow-lg">
                  <p className="text-xs sm:text-sm font-black text-sky-950">
                    &ldquo;The cold never bothered me anyway! Happy 5th Birthday, Princess Mamur!&rdquo; ❄️✨
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side: Grand Birthday Message */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-block px-4 py-1.5 rounded-full bg-sky-400/20 border border-sky-300/50 text-sky-200 text-xs sm:text-sm font-bold mb-4 shadow-md">
                👑 Disney Frozen Magical Celebration 👑
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-white via-sky-100 to-sky-400 ice-glow leading-tight">
                HAPPY 5TH BIRTHDAY
                <span className="block mt-2 text-4xl sm:text-6xl text-sky-200 drop-shadow-lg">
                  PRINCESS MAMUR! ❄️
                </span>
              </h1>

              <p className="mt-5 text-base sm:text-lg text-sky-100/95 leading-relaxed font-medium">
                &ldquo;Some people are worth melting for...&rdquo; Today, Queen Elsa and her magical ice palace open their doors to celebrate your grand 5th birthday with endless snowflakes and royal joy! ⛄✨
              </p>

              <div className="mt-8 flex justify-center lg:justify-start">
                <button
                  type="button"
                  onClick={() => setElsaPopup(true)}
                  className="w-full sm:w-auto px-9 py-4 rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 text-slate-950 font-black text-base sm:text-lg shadow-[0_0_35px_rgba(56,189,248,0.95)] hover:scale-105 active:scale-95 transition-all cursor-pointer border-2 border-white"
                >
                  ❄️ Tap to Summon Queen Elsa&apos;s Magic! ❄️
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE 5TH BIRTHDAY CAKE SECTION */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 my-10">
        <div className="ice-card rounded-[2rem] p-6 sm:p-10 text-center border border-sky-300/50 shadow-2xl">
          <div className="text-4xl mb-2">⛄🎂❄️</div>
          <h2 className="text-2xl sm:text-3xl font-black text-sky-200 ice-glow">
            Make a Magical 5th Birthday Wish!
          </h2>
          <p className="text-sky-100/90 text-sm sm:text-base mt-2 max-w-xl mx-auto font-medium">
            {candlesBlown
              ? "🎉 WOOHOO!! All 5 candles blown! Your magical wish is flying up to the Northern Lights! 🎉"
              : "Make a royal wish and tap the button below to blow out your 5 ice candles!"}
          </p>

          <div className="flex justify-center items-end gap-5 sm:gap-8 mt-8 mb-4">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="flex flex-col items-center">
                <div className="h-10 flex items-center justify-center">
                  {!candlesBlown ? (
                    <span className="text-3xl animate-bounce">🔥</span>
                  ) : (
                    <span className="text-2xl animate-pulse">❄️</span>
                  )}
                </div>
                <div className="w-5 sm:w-6 h-16 rounded-t-lg bg-gradient-to-b from-white via-sky-300 to-indigo-500 border-2 border-white flex items-center justify-center text-xs sm:text-sm font-black text-slate-950 shadow-lg">
                  {num}
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-[260px] sm:max-w-xs mx-auto">
            <div className="h-10 bg-gradient-to-r from-sky-200 via-white to-sky-200 rounded-t-2xl border-b-4 border-sky-400 flex items-center justify-center text-xs font-bold text-sky-900 tracking-widest">
              ❄️ 👑 ❄️ 👑 ❄️
            </div>
            <div className="h-20 bg-gradient-to-r from-indigo-600 via-sky-500 to-indigo-600 rounded-b-2xl flex items-center justify-center shadow-xl border border-white/40">
              <span className="royal-font font-black text-white tracking-widest text-lg sm:text-xl drop-shadow-md">
                MAMUR IS 5! 👑
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setCandlesBlown((prev) => !prev)}
            className="mt-8 w-full sm:w-auto px-9 py-4 rounded-full bg-gradient-to-r from-sky-300 to-cyan-300 hover:from-white hover:to-sky-200 text-slate-950 font-black text-base shadow-[0_0_30px_rgba(125,211,252,0.9)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            {candlesBlown ? "✨ Relight the 5 Candles" : "🌬️ Blow Out the 5 Candles!"}
          </button>
        </div>
      </section>

      {/* MAMUR'S 7 MEMORIES GALLERY */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 mt-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-black text-sky-200 ice-glow royal-font">
            ❄️ Princess Mamur&apos;s Royal Memories ❄️
          </h2>
          <p className="text-sky-100/90 text-sm sm:text-base mt-2 font-medium">
            5 years of sweetness, giggles & royal charm (Tap any picture to enlarge)
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {MEMORIES.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedPhoto(item)}
              className="ice-card rounded-3xl overflow-hidden group cursor-pointer hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(56,189,248,0.6)] transition-all duration-300 flex flex-col border border-sky-300/40"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-sky-950">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-slate-900/70 backdrop-blur-md flex items-center justify-center text-base border border-sky-200/60 shadow-md">
                  ❄️
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between text-center bg-sky-950/60">
                <h3 className="text-lg font-bold text-sky-200 royal-font">{item.title}</h3>
                <p className="text-xs sm:text-sm text-sky-100/90 mt-2 leading-relaxed font-medium">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER BLESSING */}
      <footer className="relative z-10 max-w-3xl mx-auto px-4 mt-16 text-center">
        <div className="ice-card rounded-3xl p-6 sm:p-8 border border-sky-300/40 shadow-2xl backdrop-blur-xl">
          <p className="text-3xl mb-2">❄️ 👑 ⛄ 🎂 ❄️</p>
          <h3 className="text-xl sm:text-2xl font-bold text-white royal-font">
            We Love You So Much, Princess Mamur!
          </h3>
          <p className="text-sky-100/90 text-sm sm:text-base mt-3 leading-relaxed font-medium">
            May Allah bless you with endless happiness, good health, and a lifetime of magical moments. Have the most wonderful 5th birthday on 18th November! ❤️
          </p>
        </div>
      </footer>

      {/* LIGHTBOX MODAL */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="ice-card max-w-md w-full rounded-3xl overflow-hidden p-6 text-center shadow-2xl border-2 border-sky-300/60"
          >
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.title}
              className="w-full max-h-[60vh] object-contain rounded-2xl mx-auto border border-white/20"
            />
            <h3 className="text-xl font-bold text-sky-200 mt-4 royal-font">
              {selectedPhoto.title}
            </h3>
            <p className="text-sky-100/90 text-sm mt-2 font-medium">
              {selectedPhoto.caption}
            </p>
            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              className="mt-6 px-8 py-2.5 rounded-full bg-gradient-to-r from-sky-300 to-cyan-300 text-slate-950 font-bold text-sm cursor-pointer shadow-lg hover:scale-105 transition"
            >
              Close ❄️
            </button>
          </div>
        </div>
      )}
    </main>
  );
}