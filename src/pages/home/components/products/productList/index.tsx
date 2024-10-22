import i18next, { t } from "i18next";
import { ProductsType } from "../../../types";
import { Link } from "react-router-dom";
import { RatingProduct } from "../rating";
import { FaCartPlus } from "react-icons/fa";
import PhoneImage from "../../../../../assets/images/phone2.webp";
import { PreloadImage } from "../../../../../components/preloadImage";

export const ProductList = () => {
  const currencySign = i18next.language === "br" ? "R$" : "$";

  const products: ProductsType[] = [
    {
      id: 1,
      name: "Celular novo 2024, 16gb ram processador ultima geração tela ips aaaaaaaaaaaaaaa aaaaaaaa aaaaaaaaa",
      price: 50,
      discount: 20,
      userEmail: "",
      userName: "",
      stock: 10,
      image_url: "",
      rating: 3.2,
      ratingLength: 30,
      purchased: 2,
      freight: 20,
      description: "",
    },
  ];

  return (
    <>
      {products.map((product) => (
        <div
          className="w-[268px] h-[436px] border-solid border-zinc-400 border-1 rounded p-2 flex flex-col hover:shadow-xl shadow-cyan-700 transition-all relative hover:border-[#5086fa79]"
          key={product.id}
        >
          <RatingProduct ratingValue={4} />
          <div className="w-full h-[200px] pt-5 flex items-center justify-center">
            <PreloadImage
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
            <button className="w-full bg-blue-500 text-white rounded py-3 font-semibold text-xs flex justify-center items-center gap-2 transition-colors hover:bg-blue-400">
              {t("cart")} {<FaCartPlus className="text-2xl " />}
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
