import Image from 'next/image';
import Link from 'next/link';
import NumberInput from './NumberInput'; // Make sure to import NumberInput if it's a custom component

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
  formRef: any; // Adjust the type according to your formRef type
}

const Products = ({ products, formRef }: ProductsProps) => {
  return (
    <div className="flex flex-col" style={{ alignItems: 'center' }}>
      <div className="flex flex-row" style={{ marginBottom: '60px', gap: '40px' }}>
        {products.map((product) => (
          <div key={product.id}>
            <Image
              src={product.imageUrl}
              width={300}
              height={600}
              alt={product.name}
            />
            <h3 className="text-2xl font-bold">{product.name}</h3>
            <p className="text-sm text-gray-800">{product.description}</p>
            <Link href={product.location}>
              <a className="text-sm text-gray-800">{product.location}</a>
            </Link>
            <Link href={product.tiktokurl}>
              <a className="text-sm text-gray-800">{product.tiktokurl}</a>
            </Link>
            <p className="my-4">
              <span className="mt-4 text-xl font-bold">{product.priceSol} SOL</span>
            </p>
            <div className="mt-1">
              <NumberInput name={product.id} formRef={formRef} />
            </div>
          </div>
        ))}
      </div>

      <button
        style={{
          backgroundColor: '#FCA310',
          width: 'fit-content',
          padding: '10px',
          borderRadius: '10px',
          color: 'white',
        }}
        disabled={!enabled}
      >
        Donate
      </button>
    </div>
  );
};

export default Products;
