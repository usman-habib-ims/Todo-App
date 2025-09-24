// import React from 'react'
// import { TiTick } from "react-icons/ti";
// import { MdDelete } from "react-icons/md";



// const TodoItems = ({text, id, isComplete, deleteTodo, toggle}) => {
//   return (
//     <div className='flex items-center my-3 gap-2'>

//         <div onClick={() => {toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
//             <TiTick isComplete? TiTick className='w-7 text-white bg-orange-500 rounded-full'/>
//             <p className='text-slate-700 ml-4 text-[17px]'> { text } </p>
//         </div>

//         <MdDelete onClick={() => {deleteTodo(id)}} className='w-3.5 cursor-pointer' />

//     </div>
//   )
// }

// export default TodoItems



import React from 'react'
import { TiTick } from "react-icons/ti";
import { MdDelete } from "react-icons/md";

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center my-3 gap-2">

      {/* Toggle completion */}
      <div
        onClick={() => toggle(id)}
        className="flex flex-1 items-center cursor-pointer"
      >
        <div
          className={`w-7 h-7 flex items-center justify-center rounded-full border 
          ${isComplete ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-400"}`}
        >
          {isComplete && <TiTick className="w-5 h-5" />}
        </div>

        <p
          className={`ml-4 text-[17px] ${
            isComplete ? "line-through text-gray-400" : "text-slate-700"
          }`}
        >
          {text}
        </p>
      </div>

      {/* Delete button */}
      <MdDelete
        onClick={() => deleteTodo(id)}
        className="w-5 h-5 text-red-500 cursor-pointer"
      />
    </div>
  );
};

export default TodoItems;




// import React from 'react'
// import { TiTick } from "react-icons/ti";
// import { MdDelete } from "react-icons/md";

// const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
//   return (
//     <div className="flex items-center my-3 gap-2">

//       {/* Toggle completion */}
//       <div
//         onClick={() => toggle(id)}
//         className="flex flex-1 items-center cursor-pointer"
//       >
//         <div
//           className={`w-7 h-7 flex items-center justify-center rounded-full border 
//           ${isComplete ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-400"}`}
//         >
//           {isComplete && <TiTick className="w-5 h-5" />}
//         </div>

//         <p
//           className={`ml-4 text-[17px] text-slate-700 ${
//             isComplete ? "text-orange-500 font-semibold" : ""
//           }`}
//         >
//           {text}
//         </p>
//       </div>

//       {/* Delete button */}
//       <MdDelete
//         onClick={() => deleteTodo(id)}
//         className="w-5 h-5 text-red-500 cursor-pointer"
//       />
//     </div>
//   );
// };

// export default TodoItems;
