import { useForm, SubmitHandler } from "react-hook-form";
import {  login } from "../../api/api";
import { useState } from "react";
// handleCreateUser,
type Inputs = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
};

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true)
    await login(data.email, data.password);
    // await handleCreateUser(data.name,data.email, data.password);
    setLoading(false)
  };

  if (loading) return <div>Loading...</div>

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="border border-zinc-500 border-solid"
            type="text"
            {...register("name", { required: true, minLength: 3 })}
          />

          <input
            className="border border-zinc-500 border-solid"
            type="text"
            {...register("email", { required: true })}
          />
          <input
            className="border border-zinc-500 border-solid"
            type="password"
            {...register("password", { required: true })}
          />
          <input
            className="border border-zinc-500 border-solid"
            type="password"
            {...register("password_confirm", {
              required: true,
              validate: (val: string) => {
                if (watch("password") !== val) {
                  return "Your password do no match!";
                }
              },
            })}
          />
          <input type="submit" />
          {errors.name && (
            <div>
              <br /> <span>This field is required</span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
