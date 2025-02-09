import AddBanner from "../common/AddBanner";

const BannerSection = () => {
  const banner = [
    {
      id: 1,
      title: "New Apple Homepod Mini",
      description:
        "Jam-packed with innovation, HomePod mini delivers unexpectedly.",
      image: "/images/speakers/image 6(1).png",
      
    },
    {
        id: 2,
        title: "Xiaomi True Wireless Earbuds",
        description:
        "Escape the noise, It’s time to hear the magic with Xiaomi Earbuds.",
        image: "/images/headphones/Image(14).png",
        
    },
  ];

  return (
    <section >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        {banner.map((item) => (
          <AddBanner
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
           
          />
        ))}
      </div>
    </section>
  );
};

export default BannerSection;
