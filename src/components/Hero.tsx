import { useState, useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const { connected } = useWallet();

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        setShowModal(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [showModal]);

  const getModalMessage = () => {
    if (connected) {
      return "Please bare with us, as we validate the contract address for $FLOW, in order to confirm if you hold the correct number of tokens";
    }
    return "Hold 500,000 tokens to unlock this feature";
  };

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
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {showModal && (
        <div className="fixed bottom-6 right-6 z-50 animate-slide-up">
          <div className="bg-[#FF0033]/10 backdrop-blur-sm border-2 border-[#FF0033] rounded-lg p-3 max-w-[280px] shadow-2xl">
            <div className="flex items-center justify-between gap-3">
              <p className="text-[#FF0033] text-sm font-semibold">
                {getModalMessage()}
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