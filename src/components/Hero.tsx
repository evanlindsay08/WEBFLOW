import { useState, useEffect } from 'react';

const Hero = () => {
  const [time, setTime] = useState({
    hours: 4,
    minutes: 0,
    seconds: 0
  });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => {
        if (prevTime.hours === 0 && prevTime.minutes === 0 && prevTime.seconds === 0) {
          clearInterval(timer);
          return prevTime;
        }

        let newSeconds = prevTime.seconds - 1;
        let newMinutes = prevTime.minutes;
        let newHours = prevTime.hours;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }
        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }

        return {
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        setShowModal(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showModal]);

  return (
    <section className="pt-52 pb-20 bg-transparent min-h-screen gradient-overlay">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-[85px] md:text-[100px] font-semibold text-white mb-20 tracking-[-0.04em] leading-[1.1]">
            Build Stunning<br />
            Websites with AI.
          </h1>
          <div className="w-full max-w-[720px]">
            <div className="relative">
              <input
                type="text"
                placeholder="Generate a website for my online store"
                className="w-full px-7 py-[18px] bg-[#141414] text-white rounded-[14px] border border-[#282828] focus:outline-none focus:border-[#383838] text-[17px] placeholder-gray-400 font-normal"
              />
              <button 
                onClick={() => setShowModal(true)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:bg-[#282828] p-3 rounded-lg transition-colors duration-200 group"
              >
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  className="text-gray-400 group-hover:text-[#FF2D55] transition-colors duration-200"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" strokeWidth={2} />
                  <path d="M7 11V7a5 5 0 0110 0v4" strokeWidth={2} strokeLinecap="round" />
                </svg>
              </button>
            </div>
            
            {/* Digital Clock Countdown */}
            <div className="mt-8 flex justify-center items-center">
              <div className="bg-[#141414]/50 backdrop-blur-sm border border-[#282828] rounded-xl p-6">
                <div className="flex items-center gap-4">
                  {/* Hours */}
                  <div className="bg-[#0F0F0F]/50 px-4 py-3 rounded-lg border border-[#282828]/50">
                    <div className="font-mono text-5xl text-[#FF2D55] font-bold tracking-wider opacity-90" style={{ fontFamily: 'digital-7, monaco, monospace' }}>
                      {String(time.hours).padStart(2, '0')}
                    </div>
                  </div>
                  
                  {/* Blinking Colon */}
                  <div className="text-[#FF2D55] text-5xl font-bold opacity-75 animate-[blink_1s_steps(1)_infinite]">
                    :
                  </div>

                  {/* Minutes */}
                  <div className="bg-[#0F0F0F]/50 px-4 py-3 rounded-lg border border-[#282828]/50">
                    <div className="font-mono text-5xl text-[#FF2D55] font-bold tracking-wider opacity-90" style={{ fontFamily: 'digital-7, monaco, monospace' }}>
                      {String(time.minutes).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Blinking Colon */}
                  <div className="text-[#FF2D55] text-5xl font-bold opacity-75 animate-[blink_1s_steps(1)_infinite]">
                    :
                  </div>

                  {/* Seconds */}
                  <div className="bg-[#0F0F0F]/50 px-4 py-3 rounded-lg border border-[#282828]/50">
                    <div className="font-mono text-5xl text-[#FF2D55] font-bold tracking-wider opacity-90" style={{ fontFamily: 'digital-7, monaco, monospace' }}>
                      {String(time.seconds).padStart(2, '0')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {showModal && (
        <div className="fixed bottom-6 right-6 z-50 animate-slide-up">
          <div className="bg-[#FF0033]/10 backdrop-blur-sm border-2 border-[#FF0033] rounded-lg p-3 max-w-[280px] shadow-2xl">
            <div className="flex items-center justify-between gap-3">
              <p className="text-[#FF0033] text-sm font-semibold">
                Hold 500,000 tokens to unlock this feature
              </p>
              <button 
                onClick={() => setShowModal(false)}
                className="text-[#FF0033] hover:text-[#FF0033]/80 transition-colors flex-shrink-0"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  )
}

export default Hero 