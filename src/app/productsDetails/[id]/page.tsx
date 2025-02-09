import { notFound } from "next/navigation";
import Image from "next/image";


type ProductType = {
  id: string;
  name: { en: string; ar: string };
  brand: string;
  price: number;
  currency: string;
  images: string[];
  ratings: { average: number; total_reviews: number };
  stock: number;
  discount?: number;
  description?: { en: string; ar: string };
};


const fetchProduct = async (id: string): Promise<ProductType | null> => {
  if (!id) return null; 

  try {
    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
      cache: "no-store", 
    });

    if (!res.ok) return null; 

    return res.json();
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};


const ProductDetails = async ({ params }: { params: { id: string } }) => {
  if (!params?.id) return notFound(); 

  
  const product = await fetchProduct(params.id);

  
  if (!product) {
    return notFound();
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold">{product.name.en}</h1>

      
      <Image
        src={product.images[0] || "/images/placeholder.png"}
        alt={product.name.en}
        width={500}
        height={500}
        className="w-full max-w-md mx-auto rounded-lg shadow-lg"
      />

     
      <p className="text-gray-600 mt-4">{product.description?.en}</p>

      
      <p className="text-primary-500 font-bold mt-2 text-2xl">
        ${product.price}
      </p>
    </div>
  );
};

export default ProductDetails;
