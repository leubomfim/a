import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../../../../api/api";
import { RatingProduct } from "../rating";
import { SliderContent } from "./components/SliderContent";
import { sortProductsByStock } from "./hooks/sortByTitle";
import { ProductsType } from "../../../types";
import { Loading } from "../../../../../components/loading/loading";
import "./styles.css"

export const ProductList = ({ sectionTitle }: { sectionTitle: string }) => {
  const { data, isLoading }: { data: ProductsType[] | undefined , isLoading: boolean } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });


  if(isLoading) return <Loading />

  const sortedProducts = sortProductsByStock(data, sectionTitle)
  return (
    <>
      {sortedProducts?.map((product) => (
        <div
          className="w-[268px] h-[436px] relative rounded-[8px] p-2 flex flex-col product-card"
          key={product.id}
        >
          <RatingProduct ratingValue={4} />
          <SliderContent product={product} />
        </div>
      ))}
    </>
  );
};
