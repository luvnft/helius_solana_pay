'use client';

import { useRef } from 'react';
import Products from '../components/Products';

export default default function Home() {
  const formRef = useRef<HTMLFormElement>(null);

  // 🪙 Example Solana marketplace data
  const products = [
    {
      id: '1',
      name: 'L$VE Tee',
      imageUrl: '/images/love-tee-1024.png',
      description: 'Soft cotton tee that spreads love and Solana vibes.',
      location: 'Atlanta, GA',
      tiktokurl: 'https://tiktok.com/@wizardofhahz/video/1',
      priceSol: 5,
    },
    {
      id: '2',
      name: 'Wizard Hat NFT',
      imageUrl: '/images/wizard-hat-1024.png',
      description: 'Digital wizard hat NFT wearable for metaverse avatars.',
      location: 'Metaverse',
      tiktokurl: 'https://tiktok.com/@wizardofhahz/video/2',
      priceSol: 12,
    },
    {
      id: '3',
      name: 'AR Photo Booth Pass',
      imageUrl: '/images/ar-booth-pass-1024.png',
      description: 'Access to one AR Photo Booth session powered by LUMEE.',
      location: 'Los Angeles, CA',
      tiktokurl: 'https://tiktok.com/@wizardofhahz/video/3',
      priceSol: 8,
    },
    {
      id: '4',
      name: 'NFT Creator Masterclass',
      imageUrl: '/images/masterclass-1024.png',
      description: 'Learn Web5 NFT strategy and mint your first tokenized reel.',
      location: 'Online',
      tiktokurl: 'https://tiktok.com/@wizardofhahz/video/4',
      priceSol: 15,
    },
    {
      id: '5',
      name: 'Bitcoin ₿L$VE Hoodie',
      imageUrl: '/images/hoodie-1024.png',
      description: 'Limited edition ₿L$VE hoodie—only 100 minted.',
      location: 'Brooklyn, NY',
      tiktokurl: 'https://tiktok.com/@wizardofhahz/video/5',
      priceSol: 20,
    },
    {
      id: '6',
      name: 'Solana IRL Drop',
      imageUrl: '/images/irl-drop-1024.png',
      description: 'Unlock local IRL events and Solana pay discounts.',
      location: 'Miami, FL',
      tiktokurl: 'https://tiktok.com/@wizardofhahz/video/6',
      priceSol: 3,
    },
    {
      id: '7',
      name: 'Metaverse Event Ticket',
      imageUrl: '/images/metaverse-ticket-1024.png',
      description: 'Access to virtual concerts and community events.',
      location: 'Decentraland',
      tiktokurl: 'https://tiktok.com/@wizardofhahz/video/7',
      priceSol: 9,
    },
    {
      id: '8',
      name: 'NFTV Creator Mic 🎙️',
      imageUrl: '/images/nftv-mic-1024.png',
      description: 'Branded creator mic for recording RFP or NFTV content.',
      location: 'Las Vegas, NV',
      tiktokurl: 'https://tiktok.com/@wizardofhahz/video/8',
      priceSol: 7,
    },
    {
      id: '9',
      name: 'FoodCoin Gift Card',
      imageUrl: '/images/foodcoin-1024.png',
      description: 'Redeemable for discounts at local restaurants accepting FOOD tokens.',
      location: 'Oakland, CA',
      tiktokurl: 'https://tiktok.com/@wizardofhahz/video/9',
      priceSol: 6,
    },
    {
      id: '10',
      name: 'RFP Rapid Response',
      imageUrl: '/images/rfp-response-1024.png',
      description: 'Pitch-ready 1-minute RFP response crafted by AI.',
      location: 'New York, NY',
      tiktokurl: 'https://tiktok.com/@wizardofhahz/video/10',
      priceSol: 35,
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-10">
      <div className="flex flex-col items-center text-center space-y-8 max-w-6xl">
        <h1 className="text-4xl font-mono font-bold">
          🧙🏼‍♂️ @WizardofHahz Marketplace
        </h1>
        <p className="text-xl font-mono max-w-2xl">
          Web5 SOLpreneurs accept Solana ($SOL) with zero middleman fees 💰  
          Donate or buy direct using your wallet.
        </p>

        <form ref={formRef} className="mt-10 w-full flex justify-center">
          <Products products={products} formRef={formRef} />
        </form>
      </div>
    </main>
  );
}
