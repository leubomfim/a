// import { AvatarUpload } from "../../hooks/imageUploaded";
// import { ChangeEvent, useState } from "react";

export const Register = () => {
  // const [avatar, setAvatar] = useState<string>('');

  // const handleFileUploaded = async (e: ChangeEvent<HTMLInputElement>) => {
  //   const filesAvatar = e.target.files;
  //   if (e.target.files) {
  //     AvatarUpload(filesAvatar![0], setAvatar);
  //   }
  // };
  return (
    <div className="w-ful h-[100vh] flex items-center justify-center">
      <div>
        <label
          onMouseEnter={() => console.log("oi")}
          onMouseOut={() => console.log('tchau')}
          className="px-5 py-3 border-1 border-solid cursor-pointer rounded-[50%]"
          htmlFor="file"
        >
          Custom
        </label>
        <input className="hidden" type="file" name="" id="file" />
      </div>
    </div>
  );
};
