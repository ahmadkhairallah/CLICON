import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NewsCard from "../common/NewsCard"
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";

export interface NewsItem {
    id: number;            
    title: string;         
    description: string;   
    image: string;          
    user: string;           
    date: string;          
    comments: string;       
            
  }

const LatestNews = () => {

    const news: NewsItem[] = [
        {
            id: 1,
            title: "New Apple Homepod Mini",
            description:
                "Jam-packed with innovation, HomePod mini delivers unexpectedly.",
            image: "/images/latestNews/unsplash_iZVrfElG1t0.png",
            user: "Kristin",
            date: "2023-09-01",
            comments: "452",
           
        }, 
        {
            id: 2,
            title: "Xiaomi True Wireless Earbuds",
            description:
                "Escape the noise, It’s time to hear the magic with Xiaomi Earbuds.",
            image: "/images/latestNews/unsplash_FO7JIlwjOtU.png",
            user: "Rebert",
            date: "2023-09-01",
            comments: "738",
           
        },
        {
            id: 3,
            title: "Xiaomi True Wireless Earbuds",
            description:
                "Escape the noise, It’s time to hear the magic with Xiaomi Earbuds.",
            image: "/images/latestNews/unsplash_6MNmDi1hc_Y.png",
            user: "Arlene",
            date: "2022-09-01",
            comments: "865",
            
        }
    ]
    return (
        <section className="py-10 mt-6 animate-fadeInUp">
      <div className="container mx-auto">
       
        <div className="flex items-center gap-3 mb-6">
          <FontAwesomeIcon
            icon={faNewspaper}
            className="text-primary-500 w-8 h-8 animate-bounce" 
          />
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 leading-tight hover:underline transition-all duration-300">
            Latest News
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <NewsCard key={item.id} news={item} />
          ))}
        </div>
      </div>
    </section>
    )
}

export default LatestNews