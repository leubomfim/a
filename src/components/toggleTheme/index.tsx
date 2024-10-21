// export const ToggleTheme = () => {
//     const [themeToggle, setThemeToggle] = useState<ThemeTypes[]>([]);

//     useEffect(() => {
//       const rightTheme: ThemeTypes[] = theme.filter((el) => {
//         return el.id === 2;
//       });
//       setThemeToggle(rightTheme);
//     }, []);
//       // function change() {
//   //   const toggleTheme = theme.filter((el) => {
//   //     return el.id !== themeToggle[0].id;
//   //   });

//   //   setThemeToggle(toggleTheme);
//   // }

//  return (
//   <div>
//           ${themeToggle[0]?.bgColor}    {/* <button onClick={change} type="button">
//             change
//           </button> */}
//    <h1>Hello World!</h1>
//   </div>
//  )
// }