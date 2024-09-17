import {
  MdOutlineStar,
  MdOutlineStarBorder,
  MdOutlineStarHalf,
} from "react-icons/md";

interface RatingProps {
  ratingValue: number;
}

export const RatingProduct = (props: RatingProps) => {
    const verifyRatingValue = (fullValue:number , ratingMoreThan: number, ratingLessThan:number) => {
        if(props.ratingValue >= fullValue) {
            return 'full'
        }
        if(props.ratingValue >= ratingMoreThan && props.ratingValue <= ratingLessThan) {
            return 'half'
        }

        return 'none'
    }

  const rating = [
    { id: 1, type: verifyRatingValue(1,0.1, 0.9) },
    { id: 2, type: verifyRatingValue(2,1.1, 1.9) },
    { id: 3, type: verifyRatingValue(3,2.1, 2.9) },
    { id: 4, type: verifyRatingValue(4,3.1, 3.9) },
    { id: 5, type: verifyRatingValue(5,4.1, 4.9) },
  ];
  return (
    <div className="absolute right-1">
      <div className="flex items-center gap-1">
        <div className="flex">
          {rating.map((rati) => (
            <div className=" text-orange-400 text-xl" key={rati.id}>
              {rati.type === 'full' && <MdOutlineStar width={16} height={16} />}
              {rati.type === 'half' && <MdOutlineStarHalf width={16} height={16} />}
              {rati.type === 'none' && <MdOutlineStarBorder width={16} height={16} />}
            </div>
          ))}
        </div>
        <div className="text-sm text-zinc-600">(0)</div>
      </div>
    </div>
  );
};
