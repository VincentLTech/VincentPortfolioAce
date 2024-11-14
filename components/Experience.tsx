// import React from "react";

// import { experience } from "@/data/experience";
// import { Button} from "./ui/moving-border";

// const Experience = () => {
//   return (
//     <div className="py-20 w-full">
        
//       <h1 className="heading">
//         My <span className="text-purple">work experience</span>
//       </h1>

//       <div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-10">
//         {experience.map((card) => (
//             <Button key={card.id} borderRadius="1.75rem" className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
//             style={{
//                 //   add these two
//                 //   you can generate the color from here https://cssgradient.io/
//                 background: "rgb(4,7,29)",
//                 backgroundColor:
//                   "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
//                 // add this border radius to make it more rounded so that the moving border is more realistic

//               }}>
//             <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
//               <img src={card.thumbnail} alt={card.thumbnail} className="lg:w-32 md:w-20 w-16" />
//               <div className="lg:ms-5">
//                 <h1 className="text-start text-xl md:text-2xl font-bold">
//                   {card.title}
//                 </h1>
//                 <p className="text-start text-white-100 mt-3 font-semibold">
//                   {card.desc}
//                 </p>
//               </div>
//             </div>
//           </Button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Experience;