import axios from "axios";
import { useEffect, useState } from "react";
import BookSection from "../components/BookSection.jsx";

const Books = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:1000/api/v1/getBooks");
        setData(response.data.books);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [data]); // The empty array ensures this runs only once after the initial render

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-white">Error: {error}</div>;
  }

  return (
    <div className="bg-dark" style={{ minHeight: "91.5vh" }}>
      <div className="d-flex justify-content-center align-items-center py-3">
        <h4 className="text-white">Books Section</h4>
      </div>
      {data ? <BookSection data={data} /> : <div className="text-white">No books available</div>}
    </div>
  );
};

export default Books;
