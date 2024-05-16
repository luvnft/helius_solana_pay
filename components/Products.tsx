<div className="flex flex-col" style={{ alignItems: "center" }}>
 <div className="flex flex-row" style={{ marginBottom: "60px", gap: "40px" }}>
   {products.map((product) => {
     return (
       <div key={product.id}>
         <Image
           src={product.imageUrl}
           width={200}
           height={200}
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
           <span className="mt-4 text-xl font-bold">
             {product.priceSol} SOL
           </span>
         </p>
         <div className="mt-1">
           <NumberInput name={product.id} formRef={formRef} />
         </div>
       </div>
     );
   })}
 </div>

 <button
   style={{
     backgroundColor: "#FCA310",
     width: "fit-content",
     padding: "10px",
     borderRadius: "10px",
     color: "white",
   }}
   disabled={!enabled}
 >
   Checkout
 </button>
</div>
