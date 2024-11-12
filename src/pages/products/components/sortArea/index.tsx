import { TFunction } from "i18next";
import { SortActionArea } from "./sortActionArea";
import { ViewActionArea } from "./viewActionArea";
import { motion } from "framer-motion";
export const ActionsArea = ({
  t,
}: {
  t: TFunction<"translation", undefined>;
}) => {
  return (
    <motion.div
    initial={{ y: -50,opacity: 0 }}
    animate={{ y: 0,opacity: 1 }}
    transition={{ duration: 1.7, type: "spring" }}
     className="w-full flex justify-end items-center gap-9">
      <SortActionArea t={t} />
      <ViewActionArea t={t} />
    </motion.div>
  );
};
