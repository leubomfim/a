import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Props } from "../../types";
import { ProductList } from "./productList";


export const ProductionHome = (props: Props) => {
  const { t } = useTranslation();
  return (
    <div className="container">
      <div>
        <div className="divide-y divide-x-0 divide-zinc-400 divide-solid">
          <div className="flex justify-between items-center">
            <h3 className="text-[1.7rem] text-zinc-700 pb-[10px]">
              {props.title}
            </h3>
            <Link
              className="text-[0.875rem] text-blue-800 font-semibold"
              to="/products"
            >
              {t("seeAll")} {`>`}
            </Link>
          </div>
          <div className="pt-[20px] flex gap-[30px]">
            <ProductList sectionTitle={props.title}  />
          </div>
        </div>
      </div>
    </div>
  );
};
