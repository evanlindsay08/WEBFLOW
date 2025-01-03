import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Header = () => {
  const [scrollState, setScrollState] = useState(0)
  const { connected } = useWallet()

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      if (scrollY > 200) {
        setScrollState(2)
      } else if (scrollY > 100) {
        setScrollState(1)
      } else {
        setScrollState(0)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getHeaderClasses = () => {
    const baseClasses = "fixed top-0 left-1/2 -translate-x-1/2 w-[90%] max-w-[1200px] z-50 transition-all duration-500 border border-transparent"
    
    switch (scrollState) {
      case 2:
        return `${baseClasses} bg-[#1A1A1A]/95 backdrop-blur-md mt-4 rounded-2xl border-[#282828]/20`
      case 1:
        return `${baseClasses} bg-[#171717]/80 backdrop-blur-sm mt-2 rounded-xl`
      default:
        return `${baseClasses} bg-transparent`
    }
  }

  return (
    <header className={getHeaderClasses()}>
      <nav className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#FF0033] rounded-full flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-black">
                  <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h9zm-9-2h10V8H12v8z"/>
                </svg>
              </div>
              <span className="text-white text-xl font-medium">WebFlow</span>
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link 
              href="/login" 
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              Twitter
            </Link>
            <WalletMultiButton className="!bg-[#FF0033] hover:!bg-[#FF0033]/90 !text-white !px-5 !py-2 !rounded-lg !text-sm !font-medium transition-all duration-200" />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header 