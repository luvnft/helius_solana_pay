'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import NumberInput from './NumberInput';

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  location: string;
  tiktokurl: string;
  priceSol: number;
}

interface ProductsProps {
  products: Product[];
  formRef: React.RefObject<HTMLFormElement>;
}

const Products = ({ products, formRef }: ProductsProps) => {
  const [enabled, setEnabled] = useState(false);

  const handleInputChange = () => setEnabled(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('🚀 Sending SOL transaction (mock)...');
    // TODO: integrate Solana Pay / Phantom / Backpack here
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white text-black rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-all duration-300"
          >
            <Image
              src={product.imageUrl}
              width={1024}
              height={1024}
              alt={product.name}
              className="rounded-xl object-cover mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{product.name}</h3>
            <p className="text-sm text-gray-700 mb-2">{product.description}</p>
            <p className="text-xs text-gray-500">{product.location}</p>

            <Link
              href={product.tiktokurl}
              target="_blank"
              className="text-blue-500 text-sm hover:underline mt-1"
            >
              TikTok Preview 🎥
            </Link>

            <p className="mt-3 text-lg font-semibold text-purple-600">
              {product.priceSol} SOL
            </p>

            <div className="mt-2">
              <NumberInput name={product.id} formRef={formRef} />
            </div>
          </div>
        ))}
      </div>

      <button
        type="submit"
        onClick={handleSubmit}
        disabled={!enabled}
        className={`px-8 py-4 rounded-xl text-lg font-semibold transition ${
          enabled
            ? 'bg-yellow-500 hover:bg-yellow-400 text-white'
            : 'bg-gray-500 text-gray-300 cursor-not-allowed'
        }`}
      >
        Donate
      </button>
    </div>
  );
};

export default Products;
