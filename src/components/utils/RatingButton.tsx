import { Star } from "lucide-react";

const RatingButton = ({ stars, setValue }: any) => {
  return (
    <div className="flex items-center">
      <button type="button" onClick={() => setValue('stars', 1)}>{stars >= 1 ? <Star size={20} fill="#FFB800" stroke="#FFB800"/>:<Star size={20} />}</button>
      <button type="button" onClick={() => setValue('stars', 2)}>{stars >= 2 ? <Star size={20} fill="#FFB800" stroke="#FFB800"/>:<Star size={20} />}</button>
      <button type="button" onClick={() => setValue('stars', 3)}>{stars >= 3 ? <Star size={20} fill="#FFB800" stroke="#FFB800"/>:<Star size={20} />}</button>
      <button type="button" onClick={() => setValue('stars', 4)}>{stars >= 4 ? <Star size={20} fill="#FFB800" stroke="#FFB800"/>:<Star size={20} />}</button>
      <button type="button" onClick={() => setValue('stars', 5)}>{stars >= 5 ? <Star size={20} fill="#FFB800" stroke="#FFB800"/>:<Star size={20} />}</button>
    </div>
  );
};

export default RatingButton;
