
import SmallCard from "../common/SmallCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

export type FlashProduct = {
  id: string;
  title: string;
  image: string;
  price: number;
};

const FlashSales = async () => {
  const fetchProducts = async (): Promise<FlashProduct[]> => {
    try {
      const response = await fetch("http://localhost:3000/api/products", { cache: "force-cache" });
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();

      const flashProducts: FlashProduct[] = data.slice(0, 12).map((product: any) => ({
        id: product.id,
        title: product.name?.en || "No title",
        image: product.images && product.images.length > 0 ? product.images[0] : "/images/placeholder.png",
        price: product.price,
      }));

      return flashProducts;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  };

  const flashProducts = await fetchProducts();

  return (
    <section className="py-10 mt-6 animate-fadeInUp"> 
      <div className="container mx-auto">
       
        <div className="flex items-center gap-3 mb-6">
          <FontAwesomeIcon icon={faBolt} className="text-yellow-400 w-8 h-8 animate-pulse" />
          <h1 className="text-2xl font-extrabold text-gray-800 tracking-wide">Flash Sales</h1>
        </div>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {flashProducts.map((product) => (
            <div key={product.id} className="animate-cardFade">
              <SmallCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlashSales;
