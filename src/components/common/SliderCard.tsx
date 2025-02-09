import Image from "next/image";

type ProductType = {
  id: string;
  brand: string;
  images: string[];
};

const SliderCard = ({ product }: { product: ProductType }) => {
  return (
    <div
      className="
        flex-shrink-0 w-[70px] sm:w-[90px] md:w-[100px] 
        aspect-[3/4] bg-white border border-gray-200 rounded-lg shadow-md 
        flex flex-col items-center justify-center overflow-hidden p-2
        transition-all duration-300 ease-in-out 
         hover:shadow-lg hover:border-primary-300
      "
    >
      
      <div className="relative w-full h-[80%] group">
        <Image
          src={product.images[0]}
          alt={product.brand}
          layout="fill"
          objectFit="cover"
          className="rounded-lg transition-all duration-300 group-hover:opacity-80"
        />
      </div>

      
      <p 
        className="
          mt-1 text-gray-900 font-bold text-xs sm:text-sm md:text-base text-center 
          h-8 flex items-center justify-center 
          tracking-wide transition-all duration-300 
          group-hover:text-primary-500
        "
      >
        {product.brand}
      </p>
    </div>
  );
};

export default SliderCard;
