import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../../../api/api";
// import { ProductState } from "../../../../state/profile/type";
import { sortProducts } from "./hooks/sortByTitle";
import { useSelector } from "react-redux";
import { RootState } from "../../../../state/store";
import { ProductsType } from "../../../home/types";
import { motion } from "framer-motion";

export const ProductListInPage = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["getProducts"],
    queryFn: getProducts,
  });
  const nextBuyState = useSelector((state: RootState) => state.nextBuy);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  const sortedItems: ProductsType[] | undefined = sortProducts(
    data,
    nextBuyState.sortType
  );
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5, type: "spring" }}
      >
        {sortedItems?.map((product) => (
          <div key={product.id}>
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </motion.div>
    </>
  );
};
