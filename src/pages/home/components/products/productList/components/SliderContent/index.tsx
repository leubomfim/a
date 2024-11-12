import i18next, { t } from "i18next";
import { Link } from "react-router-dom";
import PhoneImage from "../../../../../../../assets/images/phone2.webp";
import { PreloadImage } from "../../../../../../../components/preloadImage";
import { ProductsType } from "../../../../../types";
import { FaCartPlus } from "react-icons/fa";

export const SliderContent = ({ product }: { product: ProductsType }) => {
  const currencySign = i18next.language === "br" ? "R$" : "$";
  return (
    <>
      <div className="w-full h-[200px] pt-5 flex items-center justify-center">
        <PreloadImage
          loadingType="eager"
          src={PhoneImage}
          srcSet={`${PhoneImage} 500w, ${PhoneImage} 1000w, ${PhoneImage} 1900px`}
          sizes="(max-width: 500px) 170px, (max-width: 1900px) 170px, 170px"
          alt={product.name}
          width={170}
          height={170}
        />
        {/* <img className="h-full" src={PhoneImage} alt="Product photo" /> */}
      </div>
      <div className="mt-[10px]">
        <Link
          to="/product/1"
          className="hover:text-blue-500 transition-all duration-200 line-clamp-3 text-ellipsis"
        >
          {product.name}
        </Link>
        <p className="text-xl font-bold text-blue-500">
          {currencySign + " " + product.price}
        </p>
        <p>{currencySign + " " + product.discount}</p>
      </div>
      <div className="mt-auto">
        <button className="w-full bg-blue-800 text-white rounded py-3 font-semibold text-xs flex justify-center items-center gap-2 transition-colors hover:bg-blue-400">
          {t("cart")} {<FaCartPlus className="text-2xl " />}
        </button>
      </div>
    </>
  );
};
