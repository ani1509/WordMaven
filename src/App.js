import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import Footer from "./components/Footer";

function App() {
  // Load initial mode from localStorage or default to "light"
  const [mode, setMode] = useState(localStorage.getItem("mode") || "light");
  const [alert, setAlert] = useState(null);

  // Show alert message
  const showAlert = (message, type) => {
    setAlert({ msg: message, type });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  // Toggle between light and dark modes
  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("mode", newMode); // Persist mode to localStorage

    if (newMode === "dark") {
      document.body.style.backgroundColor = "#212532";
      showAlert("Dark mode enabled", "success");
    } else {
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
    }
  };

  // Sync UI background color with the saved mode on load
  useEffect(() => {
    if (mode === "dark") {
      document.body.style.backgroundColor = "#212532";
    } else {
      document.body.style.backgroundColor = "white";
    }
  }, [mode]);

  return (
    <>
      <Navbar title="TextEase" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading="Enter Your Text" mode={mode} showAlert={showAlert} />
        <Footer mode={mode} />
      </div>
    </>
  );
}

export default App;

// import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";
// import React, { useState, useEffect } from "react";
// import Alert from "./components/Alert";
// import Footer from "./components/Footer";

// function App() {
//   const [mode, setMode] = useState("light");
//   const [alert, setAlert] = useState(null); // taking NULL because it's used as an object

//   // Check localStorage for the theme preference on component mount
//   useEffect(() => {
//     const savedMode = localStorage.getItem("mode");
//     if (savedMode) {
//       setMode(savedMode);
//       if (savedMode === "dark") {
//         document.body.style.backgroundColor = "#212532";
//       } else {
//         document.body.style.backgroundColor = "white";
//       }
//     } else {
//       // Set default mode to 'light' if not found in localStorage
//       localStorage.setItem("mode", "light");
//       document.body.style.backgroundColor = "white";
//     }
//   }, []);

//   // Show alert function
//   const showAlert = (message, type) => {
//     setAlert({
//       msg: message,
//       type: type,
//     });

//     setTimeout(() => {
//       setAlert(null);
//     }, 1500);
//   };

//   // Toggle theme function
//   const toggleMode = () => {
//     if (mode === "light") {
//       setMode("dark");
//       document.body.style.backgroundColor = "#212532";
//       localStorage.setItem("mode", "dark");
//       showAlert("Dark mode enabled", "success");
//     } else {
//       setMode("light");
//       document.body.style.backgroundColor = "white";
//       localStorage.setItem("mode", "light");
//       showAlert("Light mode enabled", "success");
//     }
//   };

//   return (
//     <>
//       <Navbar title="TextEase" mode={mode} toggleMode={toggleMode} />
//       <Alert alert={alert} />
//       <div className="container my-3">
//         <TextForm heading="Enter Your Text" mode={mode} showAlert={showAlert} />
//       </div>
//       <Footer mode={mode} />
//     </>
//   );
// }

// export default App;

// // https://v5.reactrouter.com/web/guides/quick-start

// // FOR ERROR SOLVING USE --->> https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom

// import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";
// import React, { useState } from "react";
// import Alert from "./components/Alert";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Footer from "./components/Footer";

// function App() {
//   const [mode, setMode] = useState("light");
//   const [alert, setAlert] = useState(null); // taking NULL bcz it's used as an object ****

//   const showAlert = (message, type) => {
//     setAlert({
//       // ******* here we can use same variable or different variables name *******
//       msg: message,
//       type: type,
//     });

//     //  ***** below is used to set setAlert to NULL after 1.5sec *****
//     setTimeout(() => {
//       setAlert(null);
//     }, 1500);
//   };

//   const toggleMode = () => {
//     if (mode === "light") {
//       setMode("dark");
//       document.body.style.backgroundColor = "#212532";
//       showAlert("Dark mode enabled", "success");
//     }
//     else {
//       document.body.style.backgroundColor = "white";
//       setMode("light");
//       showAlert("Light mode enabled", "success");
//     }
//   };

//   return (
//     <>
//       {/* <Router> */}
//         <Navbar title="TextEase" mode={mode} toggleMode={toggleMode} />
//         <Alert alert={alert} />
//         <div className="container my-3">
//           {/* <Routes> */}
//             {/* <Route */}
//               {/* exact
//               path="/"
//               element={ */}
//                 <TextForm
//                   heading="Enter Your Text"
//                   mode={mode}
//                   showAlert={showAlert}
//                 />
//               {/* }
//             /> */}
//             {/* <Route exact path="/about" element={<About />} /> */}
//           {/* </Routes> */}
//           <Footer mode={mode} />
//         </div>
//       {/* </Router> */}
//     </>
//   );
// }
// export default App;

// import React, { useState } from "react";
// import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";
// import Alert from "./components/Alert";
// import Footer from "./components/Footer";

// // App component
// function App() {
//   // States to handle mode (light/dark) and alert messages
//   const [mode, setMode] = useState("light");
//   const [alert, setAlert] = useState(null); // Used for displaying alerts

//   // Show alert with message and type (success, warning, danger, etc.)
//   const showAlert = (message, type) => {
//     setAlert({
//       msg: message,
//       type: type,
//     });

//     // Automatically hide alert after 1.5 seconds
//     setTimeout(() => {
//       setAlert(null);
//     }, 1500);
//   };

//   // Toggle between light and dark modes
//   const toggleMode = () => {
//     if (mode === "light") {
//       setMode("dark");
//       document.body.style.backgroundColor = "#212532"; // Dark background
//       showAlert("Dark mode enabled", "success");
//     } else {
//       document.body.style.backgroundColor = "white"; // Light background
//       setMode("light");
//       showAlert("Light mode enabled", "success");
//     }
//   };

//   return (
//     <>
//       {/* Main container with flex layout */}
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           minHeight: "100vh", // Make sure the footer is at the bottom
//         }}
//       >
//         {/* Navbar */}
//         <Navbar title="TextEase" mode={mode} toggleMode={toggleMode} />

//         {/* Alert message */}
//         <Alert alert={alert} />

//         {/* Main Content Area */}
//         <div
//           className="container my-3"
//           style={{
//             flex: 1, // This allows the content to take up available space
//             backgroundColor: mode === "dark" ? "#0f1118" : "#ffffff",
//             color: mode === "dark" ? "white" : "#042743",
//           }}
//         >
//           {/* TextForm component */}
//           <TextForm
//             heading="Enter Your Text"
//             mode={mode}
//             showAlert={showAlert}
//           />
//         </div>

//         {/* Footer */}
//         <Footer mode={mode} />
//       </div>
//     </>
//   );
// }

// export default App;
