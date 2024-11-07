// import { AvatarUpload } from "../../hooks/imageUploaded";
// import { ChangeEvent, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { login } from "../../api/api";
import { useState } from "react";
import { Inputs } from "../login/type";
import { Input } from "../../components/Input/input";

export const Register = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  // const [avatar, setAvatar] = useState<string>('');

  // const handleFileUploaded = async (e: ChangeEvent<HTMLInputElement>) => {
  //   const filesAvatar = e.target.files;
  //   if (e.target.files) {
  //     AvatarUpload(filesAvatar![0], setAvatar);
  //   }
  // };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    await login(data.email, data.password);
    // await handleCreateUser(data.name,data.email, data.password);
    setLoading(false);
  };

  watch("name");

  if (loading) return <div>Loading...</div>;

  return (
    <main className="flex">
      <section className="flex items-center justify-end h-full grow">
      <div className="w-[70%] bg-black h-[100vh]"></div>
        <div className="p-[20px] h-[100vh] w-[30%] flex justify-center items-center">
          
          <div>
            <label
              onMouseEnter={() => console.log("oi")}
              onMouseOut={() => console.log("tchau")}
              className="px-5 py-3 border-1 border-solid cursor-pointer rounded-[50%]"
              htmlFor="file"
            >
              Custom
            </label>
            <input className="hidden" type="file" name="" id="file" />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input type="text" registerName="name" register={register} />

            <Input type="text" registerName="email" register={register} />

            <Input
              type="password"
              registerName="password"
              register={register}
            />

            <Input
              type="password"
              registerName="password_confirm"
              register={register}
            />

            <input type="submit" />
            {errors.name && (
              <div>
                <br /> <span>This field is required</span>
              </div>
            )}
          </form>
        </div>

      </section>
    </main>
  );
};
