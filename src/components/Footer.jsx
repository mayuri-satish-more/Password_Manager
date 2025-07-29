// import React from 'react';

// const Footer = () => {
//   return (
//     <div className="bg-slate-800">
//         <div className="logo font-bold text-white text-2xl">
//             <span className="text-green-500"> &lt; </span>
//             <span>Pass</span><span className="text-green-500">OP/&gt;</span>

//         <div>
//         Created with <img src="icons/heart.png" alt="" /> by mayuri more 
//     </div>
//   );
// }

// export default footer;



import React from 'react';

const Footer = () => {
  return (
    <div className="bg-slate-800 p-4 text-white text-center">
      <div className="logo font-bold text-4xl">
        <span className="text-green-900"> &lt; </span>
        <span>Pass</span>
        <span className="text-green-900">OP/&gt;</span>
      {/* </div> */}

      <div className="mt-2 flex items-center justify-center gap-1 text-sm">
        Created with 
        <lord-icon 
    src="https://cdn.lordicon.com/rjzlnunf.json"
    trigger="hover"
    colors="primary:#8b0000,"
    style= {{ width: "30px", height: "30px" }}>
</lord-icon>

        by Mayuri
      </div>
    </div>
    </div>
  );
};

export default Footer;



