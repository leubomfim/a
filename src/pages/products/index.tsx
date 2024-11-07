import { ProductListInPage } from "./components/productListPage";
import { FilterArea } from "./components/filterArea";
import { ActionsArea } from "./components/sortArea";
import { useTranslation } from "react-i18next";

export const Products = () => {
  const { t } = useTranslation();
  return (
    <main className="mt-[80px]">
      <div className="container grow">
        <section className="w-full">
          <div className="flex gap-9 w-full">
            <FilterArea t={t} />
            <div className="flex flex-col gap-3 w-full">
              <ActionsArea t={t} />
              <ProductListInPage />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
