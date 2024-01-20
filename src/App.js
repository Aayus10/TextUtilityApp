import React, { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [btntype, setBtntype] = useState("primary");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0B233F";
      setBtntype("light");
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      setBtntype("primary");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route exact path="/about" element={<About />}></Route>

          <Route
            exact
            path="/"
            element={
              <div className="container">
                <Textform
                  btntype={btntype}
                  mode={mode}
                  alert={showAlert}
                  heading="Enter the text to analyze"
                />
              </div>
            }
          ></Route>
        </Routes>
        <Alert alert={alert}></Alert>
      </Router>
    </>
  );
}

export default App;
