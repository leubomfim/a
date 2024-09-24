import c from "classnames";
import phoneImage from '../../../../assets/images/phone2.jpeg'

interface Props {
  heroText: string;
  heroButton: string;
  language: string;
}

export const Hero = (props: Props) => {
  return (
    <div className="relative w-full max-w-screen-2xl mt-[100px] m-auto">
      <div className="flex justify-between">
        <div
          className={c({
            "w-[550px]": props.language === "br",
            "w-[570px]": props.language !== "br",
          })}
        >
          <h2 className="text-5xl">{props.heroText}</h2>
          <button className="w-[200px] bg-blue-500 text-white rounded py-3 font-semibold text-xs mt-[30px] transition-colors hover:bg-blue-400">
            {props.heroButton}
          </button>
        </div>
        <div className="w-[600px]">
          <img src={phoneImage} alt="a" />
        </div>
      </div>
    </div>
  );
};
