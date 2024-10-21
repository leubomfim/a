import { ProductListInPage } from "./components/productListPage";
import { FilterArea } from "./components/filterArea";
import { SortArea } from "./components/sortArea";

export const Products = () => {
  return (
    <div className="container">
      <section className="mt-[80px]">
        <div className="flex gap-9">
          <FilterArea />
          <div className="flex flex-col gap-3">
            <SortArea />
            <ProductListInPage />
          </div>
        </div>
      </section>
    </div>
  );
};
