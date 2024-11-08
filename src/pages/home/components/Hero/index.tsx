import c from "classnames";
import phoneImage from "../../../../assets/images/phone2.webp";
import { PreloadImage } from "../../../../components/preloadImage";
import { useTranslation } from "react-i18next";

interface Props {
  heroText: string;
  heroButton: string;
  language: string;
}

export const Hero = (props: Props) => {
  const { t } = useTranslation();
  return (
    <div className="relative w mt-[100px] container">
      <div className="flex justify-between items-center">
        <div
          className={c({
            "w-[550px]": props.language === "br",
            "w-[570px]": props.language !== "br",
          })}
        >
          <h2 className="text-5xl text-white">{props.heroText}</h2>
          <button className="w-[200px] bg-[#FDE021] text-black rounded py-3 font-semibold text-xs mt-[30px] transition-colors hover:bg-blue-400">
            {props.heroButton}
          </button>
        </div>
        <div className="w-[600px]">
          {/* <img src={phoneImage} alt="a" /> */}
          <PreloadImage
            src={phoneImage}
            srcSet={`${phoneImage} 500w, ${phoneImage} 1000w, ${phoneImage} 1900px`}
            sizes="(max-width: 500px) 480px, (max-width: 1900px) 600px, 600px"
            alt={t("altHomePage")}
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};
