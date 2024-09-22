import { PiStarFill } from "react-icons/pi";
import { PiStarBold } from "react-icons/pi";
import { cn } from "../lib/utils";

const InActiveRating = () => {
  return <PiStarBold/>;
};

const ActiveRating = () => {
  return <PiStarFill className="text-[#FFB800]" />;
};

const RatingStars = ({ rating, className }: { rating: number, className?: string }) => {
  return (
    <div className={cn("flex items-center text-[16px]", className)}>
      {rating>=1 ? <ActiveRating /> : <InActiveRating/>}
      {rating>=2 ? <ActiveRating /> : <InActiveRating/>}
      {rating>=3 ? <ActiveRating /> : <InActiveRating/>}
      {rating>=4 ? <ActiveRating /> : <InActiveRating/>}
      {rating>=5 ? <ActiveRating /> : <InActiveRating/>}
    </div>
  );
};

export default RatingStars;
