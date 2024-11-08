import { Logo } from "../../assets/icons/logo";
import { Link } from "react-router-dom";
import { Form } from "./components/form";
import { FormPresentation } from "./components/FormPresentation";
import { LoginBackground } from "./components/loginBackground";
import { useTranslation } from "react-i18next";

export const Login = () => {
  const { t } = useTranslation();
  return (
    <main className="flex">
      <section className="flex items-center justify-end h-full grow">
        <div className="p-[20px] h-[100vh] w-[30%] flex justify-center items-center relative">
          <Link to={"/"}>
            <button className="absolute left-5 top-10 bg-blue-600 text-white px-4 py-2 rounded">
              {"Home"}
            </button>
          </Link>
          <div className="absolute top-20">
            <Logo />
          </div>
          <div className="flex flex-col items-center gap-12">
            <FormPresentation translations={t} />
            <Form translations={t} />
          </div>
        </div>
         <LoginBackground />
      </section>
    </main>
  );
};
