import React, { useState, useEffect } from 'react';

const languageSymbols = [
  { char: 'あ', lang: 'Japanese' },
  { char: 'ا', lang: 'Arabic' },
  { char: 'A', lang: 'English' },
  { char: '你', lang: 'Chinese' }
];

const messages = [
  "Unlock potential with AI-enhanced messaging",
  "AI-powered words that convert and captivate",
  "Your ideas, AI-amplified for maximum impact",
  "Compelling content, AI-crafted to perfection"
];

const cursorAnimation = `
@keyframes moveCursor {
  0% { transform: translate(calc(50% - 8px), calc(50% - 8px)); }
  25% { transform: translate(calc(100% - 8px), calc(50% - 8px)); }
  50% { transform: translate(calc(100% - 8px), calc(100% - 8px)); }
  75% { transform: translate(calc(50% - 8px), calc(100% - 8px)); }
  100% { transform: translate(calc(50% - 8px), calc(50% - 8px)); }
}
`;

const supportedLanguages = [
  { text: 'English', class: '' },
  { text: 'Español', class: '' },
  { text: 'हिन्दी', class: 'font-hindi text-[0.75em]' },
  { text: 'Français', class: '' },
  { text: 'اردو', class: 'font-urdu' },
  { text: '中文', class: 'font-chinese' },
  { text: 'Deutsch', class: '' }
];

const TypeWriter = () => {
  const [displayText, setDisplayText] = useState('');
  const [messageIndex, setMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  useEffect(() => {
    const text = messages[messageIndex];
    let index = 0;
    let timer: NodeJS.Timeout;

    if (isTyping) {
      timer = setInterval(() => {
        if (index <= text.length) {
          setDisplayText(text.slice(0, index));
          index++;
        } else {
          setIsTyping(false);
          // Wait before starting to erase
          setTimeout(() => setIsTyping(false), 2000);
        }
      }, 100);
    } else {
      timer = setInterval(() => {
        if (index >= 0) {
          setDisplayText(text.slice(0, index));
          index--;
        } else {
          setIsTyping(true);
          setMessageIndex((prev) => (prev + 1) % messages.length);
        }
      }, 50);
    }

    return () => {
      clearInterval(timer);
    };
  }, [messageIndex, isTyping]);

  return (
    <div className="text-white text-xl h-20"> {/* Fixed height to prevent layout shift */}
      {displayText}
      <span className="animate-pulse">|</span>
    </div>
  );
};

const LanguageRotator = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % supportedLanguages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-flex align-baseline text-[0.9em]">
      {supportedLanguages.map((lang, index) => (
        <span
          key={lang.text}
          className={`transition-all duration-500 ${lang.class} ${
            index === currentIndex 
              ? 'opacity-100' 
              : 'opacity-0 absolute inset-0'
          }`}
        >
          {lang.text}
        </span>
      ))}
    </span>
  );
};

const Features = () => {
  const [currentLangIndex, setCurrentLangIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLangIndex((prev) => (prev + 1) % languageSymbols.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{cursorAnimation}</style>
      <section className="py-20 bg-transparent">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#111111]/80 to-transparent" />
          <div className="container mx-auto px-6 relative z-10">
            {/* Main Title with Icon */}
            <div className="flex flex-col items-center mb-16">
              <div className="w-12 h-12 bg-[#E11D48]/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#E11D48]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                </svg>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-center mb-4">
                Create Stunning<br />
                websites in <span className="text-[#E11D48] inline-flex">
                  <LanguageRotator />
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-12 gap-6">
              {/* Large Preview Box - Left Side */}
              <div className="col-span-8 bg-[#141414]/50 rounded-2xl border border-[#282828] p-4">
                {/* Browser Chrome */}
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex space-x-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 px-3 py-1 bg-[#1A1A1A] rounded text-xs text-gray-400 flex items-center">
                    <span>🔒 https://yourwebsite.com</span>
                    <button className="ml-auto px-2 py-0.5 bg-[#282828] rounded text-xs">Export</button>
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="relative bg-[#1A1A1A] rounded-lg p-3">
                  <div className="absolute -left-4 top-1/2 w-4 h-px bg-[#E11D48]/20"></div>
                  <div className="absolute -right-4 top-1/2 w-4 h-px bg-[#E11D48]/20"></div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-[#282828] rounded px-3 py-2 text-sm text-gray-400">
                      Create a Website for my <span className="text-white">Online Store</span>
                    </div>
                    <button className="bg-[#1E1E1E] text-gray-300 px-3 py-2 rounded flex items-center gap-1 text-sm whitespace-nowrap">
                      Generate <span className="text-[#E11D48]">✨</span>
                    </button>
                  </div>
                </div>

                {/* Feature Description */}
                <div className="mt-3">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#E11D48]/20 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#E11D48]"></div>
                    </div>
                    <span className="text-white text-base font-medium">
                      AI-powered design (re)generation
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mt-2 ml-7 leading-relaxed">
                    Describe your website in any language, and our AI will create a beautiful,
                    professional design tailored to your vision.
                  </p>
                </div>
              </div>

              {/* AI Amplified Box - Top Right */}
              <div className="col-span-4 bg-[#141414]/50 rounded-2xl border border-[#282828] p-6 relative">
                {/* Circuit Lines */}
                <div className="absolute -left-3 top-8 w-6 h-px bg-[#E11D48]/20"></div>
                <div className="absolute -right-3 bottom-12 w-6 h-px bg-[#E11D48]/20"></div>
                
                {/* Content */}
                <div className="relative h-full">
                  {/* Border Design */}
                  <div className="absolute right-0 top-0 w-48 h-48">
                    <div className="absolute right-0 top-0 w-32 h-32 border border-[#E11D48]/10 rounded-lg"></div>
                    <div className="absolute left-0 bottom-0 w-32 h-32 border border-[#E11D48]/5 rounded-lg"></div>
                  </div>

                  {/* Text Content */}
                  <div className="relative z-10 pt-8">
                    <TypeWriter />
                    <div className="mt-auto pt-8 flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#E11D48]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z"/>
                      </svg>
                      <span className="text-white text-sm">AI-powered copywriting</span>
                    </div>
                    <p className="text-gray-400 text-sm mt-2 ml-7">
                      Generate compelling, conversion-focused content for your website automatically
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Row - 3 Feature Boxes */}
              <div className="col-span-4 bg-[#141414]/50 rounded-2xl border border-[#282828] p-6">
                <div className="mb-6 relative h-28 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full border border-[#E11D48] flex items-center justify-center overflow-hidden">
                    {languageSymbols.map((symbol, index) => (
                      <div
                        key={symbol.lang}
                        className={`absolute transition-all duration-500 flex flex-col items-center ${
                          index === currentLangIndex 
                            ? 'transform translate-y-0 opacity-100' 
                            : 'transform translate-y-full opacity-0'
                        }`}
                      >
                        <span className="text-[#E11D48] text-2xl">{symbol.char}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2 text-xs mt-4">
                    {languageSymbols.map((symbol, index) => (
                      <span 
                        key={symbol.lang}
                        className={`transition-colors duration-300 ${
                          index === currentLangIndex 
                            ? 'text-[#E11D48]' 
                            : 'text-gray-500'
                        }`}
                      >
                        {symbol.lang}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="text-white font-medium mb-2">Quick multilingual edits</h3>
                <p className="text-gray-400 text-sm">
                  Make instant changes to your website using simple instructions in any language.
                </p>
              </div>

              <div className="col-span-4 bg-[#141414]/50 rounded-2xl border border-[#282828] p-6">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-32 h-24 border border-[#282828] rounded-lg flex items-center justify-center bg-[#1A1A1A]">
                      <div className="w-16 h-12 border border-[#282828] rounded bg-[#282828]/50 relative overflow-hidden">
                        {/* Cursor Icon */}
                        <div className="absolute w-2.5 h-2.5 animate-[moveCursor_4s_linear_infinite] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                          <svg 
                            className="w-full h-full text-[#E11D48]" 
                            viewBox="0 0 24 24" 
                            fill="currentColor"
                            style={{ filter: 'drop-shadow(0 0 2px rgb(225, 29, 72))' }}
                          >
                            <path d="M13.64,21.97C13.14,22.21 12.54,22 12.31,21.5L10.13,16.76L7.62,18.78C7.45,18.92 7.24,19 7,19A1,1 0 0,1 6,18V3A1,1 0 0,1 7,2C7.24,2 7.47,2.09 7.64,2.23L7.65,2.22L19.14,11.86C19.57,12.22 19.62,12.85 19.27,13.27C19.12,13.45 18.91,13.57 18.7,13.61L15.54,14.23L17.74,18.96C18,19.46 17.76,20.05 17.26,20.28L13.64,21.97Z"/>
                          </svg>
                          {/* Subtle glow effect */}
                          <div className="absolute inset-0 rounded-full bg-[#E11D48]/10 blur-md transform scale-150"></div>
                        </div>
                      </div>
                    </div>
                    {/* Arrow Icon */}
                    <div className="absolute -right-2 -bottom-2">
                      <div className="w-8 h-8 rounded-lg bg-[#E11D48] flex items-center justify-center">
                        <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-white font-medium mb-2">Mobile-responsive design</h3>
                <p className="text-gray-400 text-sm">
                  Create responsive websites that adapt seamlessly to devices of any sizes.
                </p>
              </div>

              <div className="col-span-4 bg-[#141414]/50 rounded-2xl border border-[#282828] p-6">
                <div className="flex justify-center mb-6">
                  <button className="bg-[#1A1A1A] text-white px-6 py-2 rounded-lg flex items-center gap-2">
                    Export <span className="text-[#E11D48]">↓</span>
                  </button>
                </div>
                <h3 className="text-white font-medium mb-2">Export Your Website</h3>
                <p className="text-gray-400 text-sm">
                  Download your site in multiple formats. Customize exports to fit your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Features 