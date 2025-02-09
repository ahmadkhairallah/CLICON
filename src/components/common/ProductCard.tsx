import Image from "next/image";
import ActionIcons from "./ActionIcons";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";


type ProductType = {
    id: string;
    name: { en: string; ar: string };
    brand?: string;
    price?: number;
    images: string[];
    ratings?: { average: number; total_reviews: number };
  };
  

const ProductCard = ({ product }: { product: ProductType }) => {
  if (!product) return null;


  const imageUrl = product.images?.length > 0 ? product.images[0] : "/images/placeholder.png";

  return (
    <div 
      className="
        border border-gray-200 p-4 rounded-lg shadow-md 
        flex flex-col items-center text-center gap-2 
        h-full transition-all duration-300 relative group
        md:p-3 md:gap-1 lg:p-4 lg:gap-2
      "
    >
      
      <div className="relative w-full flex-grow flex justify-center items-center overflow-hidden">
        <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-sm z-50">Hot</div>
        <Image
          src={imageUrl}
          alt={product.name?.en || "Product image"}
          width={250}
          height={250}
          className="
            object-contain transition-all duration-300
            h-40 sm:h-48 md:h-56 lg:h-40 xl:h-36 2xl:h-32
            group-hover:opacity-75
          "
        />

     
        <div 
          className="
            absolute inset-0 bg-gray-900 opacity-0 
            group-hover:opacity-20 transition-all duration-300
          "
        ></div>

      
        <div
        className="
            absolute bottom-4 flex gap-2 opacity-0 
            group-hover:opacity-100 transition-all duration-300
            translate-y-4 group-hover:translate-y-0
          "
      >
 
        <Link href="/wishList">
          <button
            className="
                bg-gray-200 text-primary-500 
                rounded-full hover:bg-primary-500 hover:text-white 
                duration-300 p-2 shadow-md flex items-center justify-center
              "
          >
            <FontAwesomeIcon
              icon={faHeart}
              className="text-gray-600 group-hover:text-white w-5 h-5 md:w-4 md:h-4"
            />
          </button>
        </Link>

        
        <Link href="/shoppingCart">
          <button
            className="
                bg-primary-500 rounded-full hover:bg-primary-400 text-white  
                duration-300 p-2 shadow-md flex items-center justify-center
              "
          >
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="text-white w-6 h-6 md:w-4 md:h-4"
            />
          </button>
        </Link>

        
        <Link href={`/productsDetails/${product.id}`}>
          <button
            className="
                bg-gray-200 rounded-full hover:bg-primary-500 text-primary-500 hover:text-white 
                duration-300 p-2 shadow-md flex items-center justify-center
              "
          >
            <FontAwesomeIcon
              icon={faEye}
              className="text-gray-600 group-hover:text-white w-5 h-5 md:w-4 md:h-4"
            />
          </button>
        </Link>
      </div>
      </div>

      
      <div className="text-yellow-500 text-sm md:text-xs lg:text-sm">
        {product.ratings?.average ? "⭐⭐⭐⭐⭐" : "⭐"}
      </div>

     
      <p className="
        font-semibold text-gray-800 
        text-sm md:text-xs lg:text-sm xl:text-base 
        line-clamp-2 h-10 flex items-center justify-center
      ">
        {product.name?.en || "No Name"}
      </p>

    
      <span className="
        text-secondary-500 font-bold 
        text-lg md:text-sm lg:text-base xl:text-lg
      ">
        {product.price ? `$${product.price.toFixed(2)}` : "N/A"}
      </span>
    </div>
  );
};

export default ProductCard;
