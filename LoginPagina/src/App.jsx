import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./componenten/paginas/Home.jsx";
import Doel from "./componenten/paginas/Doel.jsx";
import Navigatie from "./componenten/Navigatie.jsx";
import LogIn from "./componenten/paginas/LogIn.jsx";

function App() {
  const mysql = require("mysql");

  const connection = mysql.createConnection({
    host: "localhost",
    user: "username",
    password: "password",
    database: "database_name",
  });

  connection.connect((err) => {
    if (err) {
      console.error("Error connecting to MySQL: " + err.stack);
      return;
    }

    console.log("Connected to MySQL as ID " + connection.threadId);
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigatie />}>
          <Route index element={<Home />} />
          <Route path="doel" element={<Doel />} />
          <Route path="login" element={<LogIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
