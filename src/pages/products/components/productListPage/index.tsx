import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../../../api/api";
// import { ProductState } from "../../../../state/profile/type";
import { sortProducts } from "./hooks/sortByTitle";
import { useSelector } from "react-redux";
import { RootState } from "../../../../state/store";
import { ProductsType } from "../../../home/types";

export const ProductListInPage = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["getProducts"],
    queryFn: getProducts,
  });
  const profileState = useSelector((state: RootState) => state.profile);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  const sortedItems: ProductsType[] | undefined = sortProducts(data, profileState.sortType);
  return (
    <>
      <div>
        {sortedItems?.map((product) => (
          <div key={product.id}>
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};
