export default function Navbar() {
  return (
    <nav className="bg-slate-800 min-h-[10vh]">
      <div className="my container"></div>
      <div className="logo font-bold  text-white text-2xl">
        <span className="text-green-900"> &lt; </span>
        <span className="text-black-900">Pass</span>
        <span className="text-green-900">OP/&gt;</span>

        <div className="row-end-gap">
      <button className="text-white bg-green-500 my-5 rounded-full start-end-gap ring-white ring-1">

       <a href="https://github.com" target="_blank">
  <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" 
       alt="GitHub" 
       width="30" 
       height="30" />
</a>
        <span className="font-bold px-2 text-black-900">GitHub</span>
      </button>
      </div>

      </div>

      

      {/* <ul className="list-none row-end-gap">
        <li>
          <a className="hover:font-bold" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="hover:font-bold" href="#">
            About
          </a>
        </li>
        <li>
          <a className="hover:font-bold" href="#">
            Contact
          </a>
        </li>
      </ul> */}

      {/* <div>
      <button className="text-white bg-green-900 my-5 start-end-gap">

       <a href="https://github.com" target="_blank">
  <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" 
       alt="GitHub" 
       width="30" 
       height="30" />
</a>
        <span className="font-bold px-2 text-black-900">GitHub</span>
      </button>
      </div> */}

    </nav>
  );
}
