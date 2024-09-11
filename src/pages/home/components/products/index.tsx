import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

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
            <div className="pt-[10px]">
              {promotions.map((promotion) => (
                <div className="w-[200px] h-[200px]" key={promotion.id}>
                  <p>{promotion.title}</p>
                  <p>{promotion.price}</p>
                  <p>{promotion.discount}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
