import { UseFormRegister } from "react-hook-form";
import { Inputs } from "../.././pages/login/type";

export const Input = ({
  register,
  type,
  registerName,
}: {
  register: UseFormRegister<Inputs>;
  type: string;
  registerName: "email" | "password" | "name" | "password_confirm";
}) => {
  return (
    <div>
      <input
        className="border border-zinc-400 border-solid pl-[11.2px] pr-[30px] pt-[30px] pb-[10px] w-full text-blue-700 text-[18px] font-medium"
        type={type}
        {...register(registerName, { required: true, minLength: 3 })}
      />
    </div>
  );
};