import {
  faCalendar,
  faComment,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { NewsItem } from "../homePageComponents/LatestNews";

interface NewsCardProps {
  news: NewsItem;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <div className="flex flex-col gap-4 bg-white shadow-lg rounded-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
     
      <div className="overflow-hidden">
        <Image
          src={news.image}
          alt={news.title}
          width={400}
          height={250}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

     
      <div className="px-4 flex justify-start gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faUser} className="w-4 h-4 text-primary-500" />
          <span>{news.user}</span>
        </div>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon
            icon={faCalendar}
            className="w-4 h-4 text-primary-500"
          />
          <span>{news.date}</span>
        </div>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon
            icon={faComment}
            className="w-4 h-4 text-primary-500"
          />
          <span>{news.comments}</span>
        </div>
      </div>

    
      <div className="px-4 flex flex-col gap-2 pb-4">
        <h1 className="text-xl font-bold text-gray-800 hover:text-primary-500 transition-colors duration-300 cursor-pointer">
          {news.title}
        </h1>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {news.description}
        </p>
      </div>

      
    </div>
  );
};

export default NewsCard;
