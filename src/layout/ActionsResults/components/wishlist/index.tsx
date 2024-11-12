import phone from "../../../../assets/images/phone2_180px.webp";

export const Wishlist = () => {
  return (
    <div className="w-[95%] flex mt-6">
      <div className="w-full">
        <div className="flex justify-between">
          <div className="flex gap-4">
            <img src={phone} className="w-[100px] h-[100px]" alt="" />
            <div>
              <p className="text-lg">Celular Dourado</p>
              <p>R$ 400</p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
