// import React from 'react';
// import './App.css';
// import Navbar from './components/Navbar';
// import Manager from './components/Manager';
// import Footer from './components/Footer';

// // goes into components folder

// function App() {
//   return (
//   <>

//   <Navbar/>
//   <Manager/>
//   <Footer/>
  
//   </>
//   )
// }

// export default App;


import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Manager from './components/Manager';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify'; // ✅ import
import 'react-toastify/dist/ReactToastify.css';   // ✅ import CSS

function App() {
  return (
    <>
      <Navbar />
      <Manager />
      <Footer />

      {/* ✅ Add this once, usually at the bottom */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;




