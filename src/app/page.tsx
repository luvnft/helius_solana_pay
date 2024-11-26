import Products from "../../components/Products";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col">
        <h1 className="text-4xl font-mono font-bold text-center text-white">
        🧙🏼‍♂️ @WizardofHahz
        </h1>
        <h3 className="text-2xl font-mono text-center text-white">
          Web5 $SOLpreneurs accept Solana ($SOL) payments with zero middleman fees. Donate easily using a QR code.
        </h3>

        <div className="mt-32 mb-32 flex flex-row text-center gap-4 justify-center">
          {/* Use lowercase `products` and remove the curly braces around `Products` */}
          <Products products={products} />
        </div>
      </div>
    </main>
  ) 
}
