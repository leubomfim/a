import { motion } from 'framer-motion'

export const GeometricBackground = () => {
  const elementsClass = [
    {
      className: "w-[200px] h-[200px] absolute rounded-full left-[60%] bottom-[-14%] bg-blue-950 opacity-60",
      children: false
    },
    {
      className: "w-[200px] h-[200px] absolute rounded-full left-20 top-20 bg-blue-950 opacity-60",
      children: false
    },
    {
      className: "w-[200px] h-[300px] absolute rounded-3xl rotate-12 right-[12%] bottom-[20%] bg-blue-950 opacity-60",
      children: false
    },
    {
      className: "w-[20px] h-[500px] absolute rounded-full right-[27%] rotate-[60deg] top-[-70px] bg-blue-950 opacity-60",
      children: false
    },
    {
      className: "w-[200px] h-[200px] absolute rounded-lg rotate-45 left-[-10px] bottom-[-10px] bg-blue-950 opacity-60",
      children: false
    },
    {
      className: "w-[200px] h-[400px] absolute rounded-xl left-1/2 top-1/2 ml-[-100px] mt-[-200px] rotate-12 bg-blue-950 opacity-60",
      children: true
    },
    {
      className: "w-[100px] h-[400px] absolute rounded-3xl left-[33%] top-[-10%] bg-blue-950 opacity-60",
      children: false
    },
  ]
  return (
    <>
    {elementsClass.map(geometric => (
      <motion.div           
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 2, type: "spring" }} 
        className={geometric.className}>
        {geometric.children && (
        <div className="relative h-full w-full">
          <div className="absolute h-[10px] w-[10px] rounded-full left-1/2 top-[10px] ml-[-5px] bg-white"></div>
          <div className="absolute h-[30px] w-[30px] rounded-full left-1/2 bottom-[10px] ml-[-15px] border-solid border-1 bg-zinc-700 border-white"></div>
        </div>
        )}
      </motion.div>
    ))}
    </>
  );
};
