import * as Slider from "@radix-ui/react-slider";
import { useState } from "react";

export const Products = () => {
  const [priceValue, setPriceValue] = useState<number[]>([0, 5000]);
  return (
    <div className="container">
      <section className="mt-[80px]">
        <div className="flex">
          <aside className="bg-white max-w-[300px] w-full rounded-[2px] p-3">
            <div>
              <div className="flex flex-col gap-1 text-lg">
                <label className="mb-2" htmlFor="by_name">Search By Name</label>
                <input
                  className="py-2 px-3 border-1 border-solid border-zinc-300 rounded-[2px] text-lg"
                  type="text"
                  name="search_by_name"
                  placeholder="Example: Teclado, Mouse, Tv."
                  id="by_name"
                />
              </div>
            </div>
            <div className="mt-[15px] flex-col flex">
              <p className=" text-lg mb-2">Price</p>
              <Slider.Root
                className="relative flex items-center select-none touch-none w-full h-5"
                defaultValue={[5, 5000]}
                max={5000}
                min={5}
                onValueChange={(number) => setPriceValue(number)}
                step={2}
              >
                <Slider.Track className=" bg-zinc-300 relative grow rounded-full h-[3px]">
                  <Slider.Range className="absolute bg-blue-500 rounded-full h-full" />
                </Slider.Track>
                <Slider.Thumb
                  className="block w-5 h-5 bg-blue-500 rounded-[50%]"
                  aria-label="Volume"
                />
                <Slider.Thumb
                  className="block w-5 h-5 bg-blue-500 rounded-[50%]"
                  aria-label="Volume"
                />
              </Slider.Root>
              <div className="flex items-center justify-between mt-3">
                <p>R$ {priceValue[0].toLocaleString("pt-BR")}</p>
                <p>R$ {priceValue[1].toLocaleString("pt-BR")}</p>
              </div>
            </div>
            <button className="w-full bg-blue-500 text-white rounded py-3 font-semibold text-xs flex justify-center items-center gap-2 transition-colors hover:bg-blue-400 mt-[15px]">
              CONFIRM
            </button>
          </aside>
          <div></div>
        </div>
      </section>
    </div>
  );
};
