import i18next, { t } from "i18next";
import { ProductsType, Props } from "../../../types";

export const ProductList = () => {
  const sign = i18next.language === "br" ? "R$" : "$";

  const promotions: ProductsType[] = [
    {
      id: 1,
      name: "Celular novo 2024, 16gb ram processador ultima geração tela ips aaaaaaaaaaaaaaa aaaaaaaa aaaaaaaaa",
      price: 50,
      discount: 20,
      userEmail: "",
      userName: "",
      stock: 10,
      image_url: "",
      rating: 3.2,
      ratingLength: 30,
      purchased: 2,
      freight: 20,
      description: "",
    },
  ];
  const productsComponents: Props[] = [
    {
      title: t("bestSellers"),
      currencySign: sign,
      products: promotions,
    },
    {
      title: t("titlePromotion"),
      currencySign: sign,
      products: promotions,
    },
    {
      title: t("title"),
      currencySign: sign,
      products: promotions,
    },
  ];

  return (
    <>
    </>
  )
};
