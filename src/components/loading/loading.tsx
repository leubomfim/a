import "./styles.css";

export const Loading = () => {
  return (
    <div className="w-full h-[436px] flex items-center justify-center">
      <div className="typewriter">
        <div className="slide">
          <i></i>
        </div>
        <div className="paper"></div>
        <div className="keyboard"></div>
      </div>
    </div>
  );
};
