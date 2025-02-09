import Image from "next/image";

const KeyFeatures = () => {
  return (
    <section className="pb-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 border border-gray-200 rounded-lg shadow-sm p-2 bg-white">
        
        <div className="group flex items-center gap-4 border-b md:border-b-0 md:border-r border-gray-200 pb-6 md:pb-0 md:pr-6 hover:bg-gray-100 transition-all duration-300 ease-in-out rounded-lg p-2">
          <div className="transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:translate-y-[-2px]">
            <Image
              src="/images/icons/Package.png"
              alt="Fast Delivery"
              width={40}
              height={40}
              className="w-10 h-10"
            />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 text-lg group-hover:text-gray-900 transition-all duration-300">
              Fast Delivery
            </h3>
            <span className="text-gray-600 text-sm">
              Delivery within 24 hours
            </span>
          </div>
        </div>

       
        <div className="group flex items-center gap-4 border-b md:border-b-0 md:border-r border-gray-200 pb-6 md:pb-0 md:pr-6 hover:bg-gray-100 transition-all duration-300 ease-in-out rounded-lg p-2">
          <div className="transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:translate-y-[-2px]">
            <Image
              src="/images/icons/Trophy.png"
              alt="Money-back Guarantee"
              width={40}
              height={40}
              className="w-10 h-10"
            />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 text-lg group-hover:text-gray-900 transition-all duration-300">
              24 Hours Return
            </h3>
            <span className="text-gray-600 text-sm">
              100% money-back guarantee
            </span>
          </div>
        </div>

        
        <div className="group flex items-center gap-4 border-b md:border-b-0 md:border-r border-gray-200 pb-6 md:pb-0 md:pr-6 hover:bg-gray-100 transition-all duration-300 ease-in-out rounded-lg p-2">
          <div className="transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:translate-y-[-2px]">
            <Image
              src="/images/icons/CreditCard.png"
              alt="Secure Payment"
              width={40}
              height={40}
              className="w-10 h-10"
            />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 text-lg group-hover:text-gray-900 transition-all duration-300">
              Secure Payment
            </h3>
            <span className="text-gray-600 text-sm">Your money is safe</span>
          </div>
        </div>

       
        <div className="group flex items-center gap-4 hover:bg-gray-100 transition-all duration-300 ease-in-out rounded-lg p-2">
          <div className="transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:translate-y-[-2px]">
            <Image
              src="/images/icons/Headphones.png"
              alt="24/7 Support"
              width={40}
              height={40}
              className="w-10 h-10"
            />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 text-lg group-hover:text-gray-900 transition-all duration-300">
              Support 24/7
            </h3>
            <span className="text-gray-600 text-sm">Live chat & messaging</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
