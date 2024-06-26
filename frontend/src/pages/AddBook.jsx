import { useState } from "react";
import axios from "axios";

const AddBooks = () => {
  const [data, setData] = useState({
    bookname: "",
    author: "",
    description: "",
    price: "",
    image: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:1000/api/v1/add", data);
      if (response.status === 200) {
        alert("Book added successfully!");
        setData({
          bookname: "",
          author: "",
          description: "",
          price: "",
          image: "",
        });
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div
      className="bg-dark d-flex justify-content-center align-items-center"
      style={{ minHeight: "91.5vh" }}
    >
      <div className="container p-4">
        <div className="mb-3">
          <label htmlFor="bookname" className="form-label text-white">
            Book name
          </label>
          <input
            type="text"
            className="form-control"
            id="bookname"
            placeholder="Enter book name"
            name="bookname"
            onChange={change}
            value={data.bookname}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label text-white">
            Author
          </label>
          <input
            type="text"
            className="form-control"
            id="author"
            placeholder="Enter name of author"
            name="author"
            onChange={change}
            value={data.author}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label text-white">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="Enter description of book"
            name="description"
            onChange={change}
            value={data.description}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label text-white">
            Image
          </label>
          <input
            type="text"
            className="form-control"
            id="image"
            placeholder="Enter the URL of image"
            name="image"
            onChange={change}
            value={data.image}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label text-white">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            placeholder="Enter price of book"
            name="price"
            onChange={change}
            value={data.price}
            required
          />
        </div>
        <button className="btn btn-success" onClick={submit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddBooks;
