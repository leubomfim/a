import c from "classnames";
import phoneImage from "../../../../assets/images/homepageImage600x600.webp";
import { PreloadImage } from "../../../../components/preloadImage";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

interface Props {
  heroText: string;
  heroButton: string;
  language: string;
}

export const Hero = (props: Props) => {
  const { t } = useTranslation();
  return (
    <div className="relative mt-[100px] container">
      <div className="flex justify-between items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, type: "spring" }}
          className={c({
            "w-[550px]": props.language === "br",
            "w-[570px]": props.language !== "br",
          })}
        >
          <h2 className="text-5xl text-white">{props.heroText}</h2>
          <button className="w-[200px] bg-[#FDE021] text-black rounded py-3 font-semibold text-xs mt-[30px] transition-colors hover:bg-blue-400">
            {props.heroButton}
          </button>
        </motion.div>
        <motion.div
          className="w-[600px]"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -50, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* <img src={phoneImage} alt="a" /> */}
          <PreloadImage
            loadingType="eager"
            src={phoneImage}
            srcSet={`${phoneImage} 500w, ${phoneImage} 1000w, ${phoneImage} 1900px`}
            sizes="(max-width: 500px) 480px, (max-width: 1900px) 600px, 600px"
            alt={t("altHomePage")}
            width={600}
            height={600}
          />
        </motion.div>
      </div>
    </div>
  );
};
