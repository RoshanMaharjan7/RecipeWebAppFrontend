import { PiStarFill } from "react-icons/pi";
import { PiStarBold } from "react-icons/pi";

const InActiveRating = () => {
  return <PiStarBold className="text-[18px]" />;
};

const ActiveRating = () => {
  return <PiStarFill className="text-[#FFB800] text-[18px]" />;
};

const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex justify-center items-center">
      {rating>=1 ? <ActiveRating /> : <InActiveRating/>}
      {rating>=2 ? <ActiveRating /> : <InActiveRating/>}
      {rating>=3 ? <ActiveRating /> : <InActiveRating/>}
      {rating>=4 ? <ActiveRating /> : <InActiveRating/>}
      {rating>=5 ? <ActiveRating /> : <InActiveRating/>}
    </div>
  );
};

export default RatingStars;
