'use client'; // Add this line at the top to mark this file as a Client Component

import { useRef } from 'react'; // Import useRef to create a ref
import Products from "../../components/Products";

export default function Home() {
  const formRef = useRef<HTMLFormElement>(null); // Create a formRef using useRef

  // Example products data
  const products = [
    { 
      id: '1', 
      name: 'Product 1', 
      imageUrl: 'image_url_1', 
      description: 'Description of product 1', 
      location: 'Location 1', 
      tiktokurl: 'https://tiktok.com/product1', 
      priceSol: 10 
    },
    { 
      id: '2', 
      name: 'Product 2', 
      imageUrl: 'image_url_2', 
      description: 'Description of product 2', 
      location: 'Location 2', 
      tiktokurl: 'https://tiktok.com/product2', 
      priceSol: 20 
    },
    // Add more products as needed
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col">
        <h1 className="text-4xl font-mono font-bold text-center text-white">
          🧙🏼‍♂️ @WizardofHahz
        </h1>
        <h3 className="text-2xl font-mono text-center text-white">
          Web5 SOLpreneurs accept Solana ($SOL) payments with zero middleman fees. Donate easily using a QR code.
        </h3>

        <div className="mt-32 mb-32 flex flex-row text-center gap-4 justify-center">
          {/* Pass formRef to Products */}
          <Products products={products} formRef={formRef} />
        </div>
      </div>
    </main>
  );
}
