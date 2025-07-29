import React from "react";
import { useRef, useState } from "react";
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";





const Manager = () => {
  const ref = useRef()
  const [ form, setForm]  = useState({site:"", username:"", password:""});
  const[PasswordArray, setPasswordArray] = useState([]);


  // const getPasswords = () => {
  //   let Passwords = localStorage.getItem("passwords");

  // }


  const getPasswords =  async () => {
    let req = await fetch("http://localhost:3000/");
    let Passwords = await req.json();
    
    setPasswordArray(Passwords);
    console.log(Passwords);
    
  };

  useEffect(() => {
    // let Passwords = localStorage.getItem("passwords");
    // let req = fetch("https://localhost:3000");
    // if(Passwords) {
    //   setPasswordArray = (JSON.parse(Passwords))
    getPasswords()
    },

 [] )


const copyText = (text) => {
  alert("copied to clipboard" + text)
  navigator.clipboard.writeText(text)

}


// useEffect(() => {
//   let Password = localStorage.getItem("passwords");
//   let passwordArray;
//   if (Passwords) {
//     passwordArray = Json.parse(Passwords)
//   }
// else {
//   PasswordArray = []
// }
// }, [] )




  const showPassword = ( ) => {
    alert("show the password");
    console.log(ref.current.src)
    if(ref.current.src.includes("icons/eyeCross2.png")) {
      ref.current.src ="icons/eye2.png"

    }
    else{
      ref.current.src = "icons/eyeCross2.png"
    }
  }

  

  const savePassword = async ( ) => {
    // setPasswordArray([...PasswordArray, {...form, id: uuidv4()}])
    // setForm({site:"", username:"", password:""})
    if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3)
 {
      setPasswordArray([...PasswordArray, {...form, id: uuidv4()}])
      let res = await fetch("http://localhost:3000/", {method: "DELETE", headers: {"Content-type": "application/json"}, 
      body: JSON.stringify({ id: form.id})})

    // localStorage.setItem("Passwords", JSON.stringify([...PasswordArray, {...form, id: uuidv4()}]))
    // console.log([...PasswordArray, form])
    console.log("Saving:", form)
    console.log("Updated Array:", [...PasswordArray, form]);
    setForm({site:"", username:"", password:""})
    toast.success ("password saved!", {
      position: "top-right",
      autoclose: 5000,
      hideProgressBar: false,
      PauseObHover: true,
      closeOnClick: true,
      draggable: true,
      Progress: undefined,
      theme: "dark",

    });


  }
else {
  toast("error: Password not saved!");
}
}
  

  const DeletePassword= async (id) => {
    console.log("Deleting passwords with id ", id)
    let c = confirm("Do you really want to delete this Password")
    if(c){
    setPasswordArray(PasswordArray.filter(item=>item.id!==id))
    // localStorage.setItem("Passwords", JSON.stringify(PasswordArray.filter (item=>item.id!==id)))
    let res = await fetch("http://localhost:3000/", {method: "DELETE", headers: {"Content-type": "application/json"}, 
      body: JSON.stringify({ id})})

    toast.success ("Password deleted!", {
   position: "top-right",
  autoClose: 5000,         // ✅ correct casing
  hideProgressBar: false,
  pauseOnHover: true,      // ✅ fix typo
  closeOnClick: true,
  draggable: true,
  progress: undefined,     // ✅ lowercase 'progress'
  theme: "dark",
});
    }
  }

  

   const editPassword=(id) => {
    console.log("editing passwords with id ", id)
    setForm({...PasswordArray.filter(i=>i.id===id)[0], id: id})
    setPasswordArray(PasswordArray.filter(item=>item.id!==id))
    toast.success("password Edited!", {
      position: "top-right",
      autoclose: 5000,
      hideProgressBar: false,
      PauseObHover: true,
      closeOnClick: true,
      draggable: true,
      Progress: undefined,
      theme: "dark",

    });

   }

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})




  }




  return (
    <>
     <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient
     (to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient
     (circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>
     
      <div className="flex flex-col p-4 text-black p-2 md:p-0 md:myContainer">
        <h1 className="text-4xl text font-bold text-center">
          <span className="text-green-700">&lt;</span>
          <span>Pass</span> <span className="text-green-700">OP/&gt;</span>
        </h1>
        <p className="text-green-900 text font-bold text-lg text-center">
          Your Own password manager
        </p>

        <div className="text-white flex flex-col gap-8 items-center text-black">
          <input value={form.site} onChange={handleChange} placeholder="Enter website url"
            className="rounded-full border-green-500 w-full p-4 py-1"
            type="text" name="site" id="site"/>

          <div className="flex w-full justify-between gap-8">
            <input value={form.username} onChange={handleChange} placeholder="Enter username"
              className="rounded-full border-green-500 w-full" type="text" name="username" id=""/>


              <input value={form.password} onChange={handleChange} placeholder="Enter password" 
              className="rounded-full border-green-500 w-full" type="text" name="password" id=""/>

              <span onClick={showPassword}>
                   <img ref={ref} className="p-1" width={30} src="icons/eye2.png" alt="eye"/>
                   </span>
          </div>
        </div>
      </div>




      <div>
      {/* <lord-icon
        src="https://cdn.lordicon.com/jgnvfzqg.json"
        trigger="hover"
        style={{ width: "30px", height: "30px" }}>
       </lord-icon> */}
      <button onClick={savePassword} className="bg-green-500 hover:bg-green-500 border-black-500 rounded-full ">
        <lord-icon
        src="https://cdn.lordicon.com/jgnvfzqg.json"
        trigger="hover"
        style={{ width: "30px", height: "30px" }}>
       </lord-icon> Save Password </button>
      </div>

{/* 
       <div className="bg-red-500">
      <lord-icon 
    src="https://cdn.lordicon.com/rjzlnunf.json"
    trigger="hover"
    colors="primary:#8b0000,"
    style= {{ width: "30px", height: "30px" }}>
</lord-icon>
</div> */}

    {/* <lord-icon
  src="https://cdn.lordicon.com/ekcathkq.json" 
  trigger="hover"
  colors="primary:#e83a30,secondary:#e83a30"
  style= {{ width: "30px", height: "30px"}}>
</lord-icon> */}


      <div className="Password">
        <h2 className="font-bold text-2xl py-4">Your Password</h2>
        {/* {PasswordArray.length === 0 && <div>No Passwords show</div>}
        {PasswordArray.length !=0 && */}
        
        <table className="table-auto w-full rounded-full"> 
          <thead className="bg-green-500 text-center">
            <tr>
              <td>site</td>
              <td>Username</td>
              <td>Password</td>
              <td>Actions</td>
            </tr>
          </thead>

          <tbody className="bg-green-200">
            {PasswordArray.map((item, index)   => {
              return (
               <tr key={index}>
              <td className="text-center w-32 flex items-center justify-center text-black-900"><a href={item.site} target="_blank">{item.site}</a>
              <div className="size-7 cursor-pointer" onClick={()=>{copyText(item.site)}}>
              <lord-icon 
              src="https://cdn.lordicon.com/iykgtsbt.json"
              trigger="hover"
              style = {{width: "25px", height: "25"}}>

              </lord-icon>
              </div>
            
              </td>

              <td className="text-center ">
                <div className="w-32 flex items-center justify-center text-black-900">
              <a href={item.site} target="_blank">{item.username}</a>
              <div className="size-7" onClick={()=>{copyText(item.username)}}>
              <lord-icon 
              src="https://cdn.lordicon.com/iykgtsbt.json"
              trigger="hover"
              style = {{width: "25px", height: "25"}}>

              </lord-icon>
              </div>
              </div>
              
              </td>

              <td className="text-center">
                <div className="w-32 flex items-center justify-center text-black-900">
              <a href={item.site} target="_blank">{"*".repeat (item.password.length)}</a>
              <div className="size-7" onClick={()=>{copyText(item.password)}}>
              <lord-icon 
              src="https://cdn.lordicon.com/iykgtsbt.json"
              trigger="hover"
              style = {{width: "25px", height: "25"}}>

              </lord-icon>
              </div>
              </div>

              </td>

              <td className="justify-center text-center">
                <span className="cursor-pointer" onClick={()=>{editPassword(item.id)}}>
                  <lord-icon 
                  src="https://cdn.lordicon.com/gwlusjdu.json"
                  trigger="hover"
                  style={{width:"25px", height: "25px"}}>
                  </lord-icon>
                  </span>

                  <span className="cursor-pointer" onClick={()=>{DeletePassword(item.id)}}>
                  <lord-icon 
                  src="https://cdn.lordicon.com/skkahier.json"
                  trigger="hover"
                  style={{width:"25px", height: "25px"}}>
                  </lord-icon>
                  </span>

              </td>
              
            </tr>
              );
            })}
            

            {/* <tr>
              <td className="text-center w-1">The sliding</td>
              <td className="text-center w-1">Mayuri more</td>
              <td className="text-center w-1">satish more</td>
              
              </tr>

              <tr>
              <td className="text-center w-1">The sliding</td>
              <td className="text-center w-1">Mayuri more</td>
              <td className="text-center w-1">satish more</td>
              
              </tr> */}
              
          </tbody>

        </table>
        </div>
    

      
    </>
  );
};

export default Manager;

