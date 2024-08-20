import React from 'react';

import { IoSearchSharp } from 'react-icons/io5';
import './Searchbar.css';

const Searchinput = () => {
  return (
    <div className="sea">
      <form action="">
        <input type="text" placeholder="search" />
        <button className="btn">
          <IoSearchSharp />
        </button>
      </form>
    </div>
  );
};

// const Searchinput = () => {
//   return (
//     <form className="flex items-center gap-2">
//       <input
//         className="input input-bordered rounded-full"
//         type="text"
//         placeholder="search "
//       />
//       <button className="btn btn-circle bg-sky-500 text-white" type="submit">
//         <IoSearchSharp />
//       </button>
//     </form>
//   );
// };

export default Searchinput;
