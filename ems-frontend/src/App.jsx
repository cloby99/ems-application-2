import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ListEmployee from "./components/ListEmployee";
import AddEmployee from "./components/AddEmployee";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element = {<ListEmployee/>}></Route>
          <Route path="/employees" element = {<ListEmployee/>}></Route>
          <Route path="/add-employee" element = {<AddEmployee/>}></Route>
          <Route path="/update-employee/:id" element = {<AddEmployee/>}></Route>

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
