import { FaStarHalf } from "react-icons/fa";
interface RatingType {
  value: number;
}

export const Rating = () => {
  const ratings: RatingType[] = [
    {
      value: 1,
    },
    {
      value: 2,
    },
    {
      value: 3,
    },
    {
      value: 4,
    },
    {
      value: 5,
    },
  ];
  return (
    <div>
      {ratings.map((star) => (
        <div key={star.value}>
            <FaStarHalf />
        </div>
      ))}
    </div>
  );
};
