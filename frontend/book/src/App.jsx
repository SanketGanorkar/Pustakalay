import "./App.css";
import Navbar from "./components/Navbar.jsx";
import AddBook from "./pages/AddBook.jsx";
import Books from "./pages/Books.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/addBook" element={<AddBook />} />
        </Routes>
        <Footer/>
      </Router>
  );
}

export default App;
