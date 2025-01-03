import { useState } from 'react'

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"; // 32 X's

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="relative pt-16">
      {/* CTA Section with background text */}
      <section className="relative overflow-hidden min-h-[50vh] flex items-center justify-end flex-col">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#111111]/80 to-transparent" />
        
        {/* Top Separator */}
        <div className="relative w-full mb-8">
          <div className="w-full h-[1px] bg-gray-800" />
        </div>
        
        {/* Background Text */}
        <div className="relative w-full flex items-center justify-center pointer-events-none select-none overflow-hidden mb-16">
          <h2 className="text-[120px] md:text-[180px] lg:text-[220px] font-bold text-[#1A1A1A] tracking-tight leading-none whitespace-nowrap opacity-50">
            WEBFLOW
          </h2>
        </div>
      </section>

      {/* Contract Address Button */}
      <div className="flex justify-center pb-16">
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-2 px-4 py-2 bg-[#141414] hover:bg-[#1A1A1A] border border-[#282828] rounded-lg transition-all duration-200"
        >
          <span className="text-gray-300 font-mono text-sm">
            {contractAddress}
          </span>
          <div className="w-5 h-5 flex items-center justify-center">
            {copied ? (
              <svg 
                className="w-4 h-4 text-[#CCFF00]" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              <svg 
                className="w-4 h-4 text-gray-400" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                />
              </svg>
            )}
          </div>
        </button>
      </div>

      {/* Bottom Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="w-full h-[1px] bg-gray-800" />
      </div>
    </div>
  )
}

export default Footer 