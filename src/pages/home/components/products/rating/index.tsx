import { StarIcon } from "../../../../../assets/icons/starIcon";
interface RatingProps {
  ratingValue: number;
}

export const RatingProduct = (props: RatingProps) => {
  const isInteger = props.ratingValue % 1 === 0;
  const width = isInteger ? props.ratingValue === 0 ? 0 : 20 : (props.ratingValue % 1) * 20;
  const verifyRatingValue = (fullValue: number, ratingMoreThan: number,ratingLessThan: number) => {
    if (props.ratingValue >= fullValue) {
      return "full";
    }
    if (props.ratingValue >= ratingMoreThan && props.ratingValue <= ratingLessThan) {
      return "half";
    }

    return "none";
  };

  const rating = [
    { id: 1, type: verifyRatingValue(1, 0.1, 0.9) },
    { id: 2, type: verifyRatingValue(2, 1.1, 1.9) },
    { id: 3, type: verifyRatingValue(3, 2.1, 2.9) },
    { id: 4, type: verifyRatingValue(4, 3.1, 3.9) },
    { id: 5, type: verifyRatingValue(5, 4.1, 4.9) },
  ];
  return (
    <div className="absolute right-2">
      <div className="flex items-center gap-1">
        <div className="flex">
          {rating.map((rati) => (
            <StarIcon iconWidth={width} starType={rati.type} key={rati.id} />
          ))}
        </div>
        <div className="text-sm text-zinc-600">(0)</div>
      </div>
    </div>
  );
};
