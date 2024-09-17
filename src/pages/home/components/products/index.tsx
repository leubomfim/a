import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { RatingProduct } from "./rating";
interface ProductsType {
  id: number;
  title: string;
  price: number;
  discount: number;
}

interface Props {
  title: string;
}

export const ProductionHome = (props: Props) => {
  const { t } = useTranslation();
  const promotions: ProductsType[] = [
    {
      id: 1,
      title: "Celular",
      price: 50,
      discount: 20,
    },
  ];

  return (
    <section className="w-full mt-[80px]">
      <div className="w-full max-w-screen-2xl m-auto">
        <div>
          <div className="divide-y divide-x-0 divide-zinc-400 divide-solid">
            <div className="flex justify-between items-center">
              <h3 className="text-[1.7rem] text-zinc-700 pb-[10px]">
                {props.title}
              </h3>
              <Link
                className="text-[0.875rem] text-orange-500 font-semibold"
                to="/products"
              >
                {t("seeAll")} {`>`}
              </Link>
            </div>
            <div className="pt-[20px]">
              {promotions.map((promotion) => (
                <div
                  className="w-[268px] h-[436px] border-solid border-zinc-400 border-1 rounded p-2 flex flex-col hover:shadow-xl shadow-cyan-700 transition-all relative hover:border-[#5086fa79]"
                  key={promotion.id}
                >
                  <RatingProduct ratingValue={4} />
                  <div className="w-full h-[150px]"></div>
                  <div className="mt-auto">
                    <p>{promotion.title}</p>
                    <p>{promotion.price}</p>
                    <p>{promotion.discount}</p>
                  </div>
                  <div className="mt-auto">
                    <button className="w-full bg-blue-500 text-white rounded py-3 font-semibold text-xs flex justify-center items-center gap-2 transition-colors hover:bg-blue-400">
                      {t("cart")} {<FaCartPlus className="text-2xl " />}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
