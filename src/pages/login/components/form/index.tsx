import { useForm, SubmitHandler } from "react-hook-form";
import { login } from "../../../../api/api";
import { useState } from "react";
import { Input } from "../../../../components/Input/input";
import { Inputs } from "../../type";
import { TFunction } from "i18next";

export const Form = ({ translations }: { translations: TFunction<"translation", undefined> }) => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    await login(data.email, data.password);
    // await handleCreateUser(data.name,data.email, data.password);
    setLoading(false);
  };

  watch("name");

  if (loading) return <div>Loading...</div>;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control  mb-[10px]">
        <label className="absolute top-1 left-3 opacity-60" htmlFor="email">
          Email
        </label>
        <Input type="text" registerName="email" register={register} />
      </div>

      {errors.email && (
        <div>
          <br /> <span>This field is required</span>
        </div>
      )}

      <div className="form-control">
        <label className="absolute top-1 left-3 opacity-60" htmlFor="email">
          {translations("password")}
        </label>
        <Input type="password" registerName="password" register={register} />
      </div>
      <div className="flex justify-between w-full items-center mt-[15px]">
        <div className="flex items-center gap-2">
          <div className="w-[25px] h-[25px] border-1 border-solid border-zinc-400 rounded-full relative">
            <div className="rounded-full bg-blue-800 w-[85%] h-[85%] absolute left-1/2 ml-[-9.80px] top-1/2 mt-[-9.80px]"></div>
          </div>
          <span className=" opacity-60">{translations('remember')}</span>
        </div>
        <p className="opacity-50 cursor-pointer">{translations('forgotPassword')}</p>
      </div>

      <input
        className="w-full cursor-pointer mt-[30px] bg-blue-800 text-white rounded py-5 font-semibold text-xs text-center gap-2 transition-colors hover:bg-blue-400"
        type="submit"
      />
    </form>
  );
};
