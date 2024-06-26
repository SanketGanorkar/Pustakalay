import { useEffect, useState } from "react";
import UpdatePopUp from "./UpdatePopUp";
import axios from "axios";

const BookSection = ({ data }) => {

  const [selectData, setSelectData] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(()=>{
    console.log(selectData);
  }, [selectData]);


  const handleDeleteBook = async(id)=>{
    try {
      const confirmation = window.confirm("Are you sure to delete this book from records?");
      if(confirmation){
        const res = await axios.delete(`https://pustakalay-backend.onrender.com/api/v1/deleteBook/${id}`);
        
        if(res.status === 201){
          console.log("Successfully deleted");
          window.alert("Successfully deleted");
        }
        else{
          window.alert("Something went wrong");
        }
      }
      else{
        return;
      }
    } catch (error) {
      console.log(error);
      window.alert("Something went wrong");
    }
  }

  return (
    <div className="d-flex justify-content-around align-items-center flex-wrap my-3">
      {data &&
        data.map((item, index) => (
          <>
            <div
              className="m-3"
              style={{
                width: "200px",
                height: "350px",
                border: "1px solid white",
                borderRadius: "20px",
              }}
            >
              <div>
                <img
                  style={{
                    width: "200px",
                    height: "210px",
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                  }}
                  src={item.image}
                />
              </div>
              <h6 className="px-2 my-1 text-white" style={{ fontSize: "15px" }}>
                {item.bookname.slice(0, 20)}...
              </h6>
              <b
                style={{ fontSize: " 30px", color: "red" }}
                className="mb-2 px-2"
              >
                Rs. {item.price}
              </b>
              <div className="d-flex justify-content-around align-items-center">
                <button className="btn btn-primary" onClick={()=>{setIsUpdate(true); setSelectData(item);}}>UPDATE</button>
                <button className="btn btn-danger" onClick={()=>handleDeleteBook(item._id)}>DELETE</button>
              </div>
            </div>
          </>
        ))
      }
      
      {(selectData && isUpdate) && <UpdatePopUp data={selectData} setSelectData={setSelectData} setIsUpdate={setIsUpdate}/>}
    </div>
  );
};
export default BookSection;
