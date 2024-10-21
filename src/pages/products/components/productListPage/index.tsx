// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from "../../../../state/store";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../../../api/api";
// import { addProducts } from "../../../../state/profile/profileSlice";
// import { useEffect } from "react";
import { ProductState } from "../../../../state/profile/type";

export const ProductListInPage = () => {
  // const products = useSelector((state: RootState) => state.profile.products);
  // const dispatch: AppDispatch = useDispatch();
  const { data, error, isLoading } = useQuery(
    {
      queryKey: ["getProducts"],
      queryFn: getProducts,
    }
  );
  console.log(data)
  // useEffect(() => {
  //   if (isSuccess) {
  //     dispatch(addProducts(data));
  //   }
  //   console.log(data, products, error, isLoading);
  // }, [data, isSuccess, dispatch]);
  return (
    <>
      {!isLoading && !error ? (
        <div>
          {data.map((product: ProductState) => (
            <div key={product.id}>
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      ) : isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : null}
    </>
  );
};
