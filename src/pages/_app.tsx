import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import StarryBackground from '@/components/StarryBackground'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import { useMemo } from 'react';

// Import wallet adapter CSS
require('@solana/wallet-adapter-react-ui/styles.css');

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

function MyApp({ Component, pageProps }: AppProps) {
  // Set to 'mainnet-beta' for production
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
    ],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <div className={`min-h-screen bg-transparent relative ${inter.variable} font-sans`}>
            <StarryBackground />
            <div className="relative z-0">
              <Component {...pageProps} />
            </div>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default MyApp 