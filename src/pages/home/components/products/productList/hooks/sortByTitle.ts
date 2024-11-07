import { ProductsType } from "../../../../types";

const sortProductsByStock = (
  products: ProductsType[] | undefined,
  sectionTitle: string
) => {
  if (sectionTitle === "Best Sellers" || sectionTitle === "Mais vendidos") {
    return products?.sort((a, b) => a.stock - b.stock);
  }

  if(sectionTitle === "Promotions" || sectionTitle === "Promoções") {
    return products?.filter((product) => product.discount > 0);
  }

  const shuffleArray = (array: ProductsType[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const suffledArray = shuffleArray(products || []);
  return suffledArray.slice(0, 10)
};
export { sortProductsByStock };
