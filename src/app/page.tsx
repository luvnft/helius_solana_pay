'use client'
import Products from "../../components/Products";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col">
        <h1 className="text-4xl font-mono font-bold text-center text-white">
          $SOLbiz
        </h1>
        <h3 className="text-2xl font-mono text-center text-white">
          $SOLpreneurs accept Solana $SOL money with no middleman fees. Checkout with a QR code.
        </h3>

        <div className="mt-32 mb-32 flex flex-row text-center gap-4 justify-center">
        <Products submitTarget="/checkout" enabled={true} />
        </div>
      </div>
    </main>
  ) 
}
