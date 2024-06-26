import img from "../images/girl.jpg";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <div className="Home-Page bg-dark text-white container-fluid d-flex justify-content-center align-items-center">
      <div className="row container">
        <div
          className="col-lg-6 d-flex justify-content-center align-items-start flex-column"
          style={{ height: "91.5vh" }}
        >
          <h2 style={{ fontSize: "80px" }}>BOOK STORE</h2>
          <h3 style={{ fontSize: "50px" }}>FOR YOU</h3>
          <p className="mb-0" style={{ color: "silver" }}>
            Checkout the books from here
          </p>
          <Link to="/books" className="viewBook my-3">
            View Books
          </Link>
        </div>
        <div
          className="col-lg-6 d-flex justify-content-center align-items-end flex-column"
          style={{ height: "91.5vh" }}
        >
          <img className="img-fluid homeImg" src={img} alt="girl studying" />
        </div>
      </div>
    </div>
  );
};

export default Home;
