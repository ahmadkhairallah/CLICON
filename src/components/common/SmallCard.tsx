import Image from "next/image";

type SmallCardProps = {
  id: string;
  image: string;
  title: string;
  price: number;
};

const SmallCard = ({ product }: { product: SmallCardProps }) => {
  const { id, image, title, price } = product;

  return (
    <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg shadow-sm bg-white hover:shadow-md transition duration-300">
     
      <Image
        src={image}
        alt={title}
        width={80}
        height={80}
        className="w-20 h-20 object-cover rounded-md"
      />

      
      <div className="flex flex-col justify-between flex-1">
        <h1 className="text-sm md:text-base font-semibold text-gray-800 line-clamp-2">
          {title}
        </h1>
        <span className="font-bold text-primary-500 text-lg">${price.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default SmallCard;
