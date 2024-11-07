export const StarIcon = ({ iconWidth, starType }: { iconWidth: number, starType: string }) => {
  return (
    <>
      <svg
        id=":rc:-5"
        aria-hidden="true"
        className="fabkit-Rating-star"
        viewBox="0 0 20 20"
      >
        <defs>
          <path
            d="M19.96 7.86c0-.296-.223-.48-.67-.552l-6.023-.875-2.7-5.458c-.15-.328-.346-.492-.586-.492s-.435.164-.587.492l-2.7 5.458-6.02.875C.222 7.38 0 7.564 0 7.86c0 .168.1.36.3.576l4.367 4.247-1.032 5.998c-.016.113-.024.193-.024.24 0 .168.043.31.127.426.084.117.21.174.378.174.144 0 .304-.047.48-.143l5.386-2.832 5.387 2.832c.168.096.328.143.48.143.16 0 .282-.057.366-.174.083-.115.125-.258.125-.425 0-.103-.004-.183-.012-.24l-1.03-5.997 4.353-4.247c.207-.208.31-.4.31-.576z"
            id="a-:rc:-5"
          ></path>
        </defs>
        <mask id="b-:rc:-5" fill="#fff">
          <use xlinkHref="#a-:rc:-5"></use>
        </mask>
        <rect
          className="fabkit-Rating-background"
          width="20"
          height="20"
          mask="url(#b-:rc:-5)"
        ></rect>
        <rect
          className="fabkit-Rating-fill"
          width={starType === "full" ? 20 : starType === "half" ? iconWidth : 0}
          height="20"
          mask="url(#b-:rc:-5)"
        ></rect>
      </svg>
    </>
  );
};
