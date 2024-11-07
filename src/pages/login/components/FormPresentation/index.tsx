import { TFunction } from "i18next";

export const FormPresentation = ({ translations }: { translations: TFunction<"translation", undefined> }) => {
  return (
    <>
      <h3 className="text-4xl font-semibold text-zinc-700">{translations("welcomeBack")}</h3>
      <p>{translations('loginText')}</p>
    </>
  );
};
