import imgShop from "../../../../assets/images/loginImage2000x1333.jpg";
import { PreloadImage } from "../../../../components/preloadImage";

export const LoginBackground = () => {
  return (
    <div className="w-[70%] flex justify-center items-center h-[100vh] relative">
      <PreloadImage alt="Login page background" src={imgShop} srcSet="" height={2000} width={1333} sizes="" className="w-[100%] h-[100%] object-cover" />
      <div className="absolute inset-0 bg-gradient-to-l from-black opacity-40"></div>
    </div>
  );
};
