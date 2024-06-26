import axios from 'axios';
import { useState } from 'react'
 

function UpdatePopUp({data, setSelectData, setIsUpdate}) {

    const [book, setBook] = useState({ bookname: '', author: '', description: '', price: 0});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook({ ...book, [name]: value });
    };


    const handleUpdate = async()=>{
        try {  
            const res = await axios.post(`https://pustakalay-backend.onrender.com/api/v1/updateBook/${data._id}`, book);
            
            if(res.status === 200){
                window.alert("Updated successfully");
                setSelectData(null);
                setIsUpdate(false);
            }
            else{
                window.alert("Something went wrong");
            }
        } catch (error) {
            console.log(error);
            window.alert("Something went wrong");
        }
    }

    const handleCancel = ()=>{
        console.log("Cancel clicked")
        setSelectData(null);
        setIsUpdate(false);
    }


  return (
    <div className='pop-parent'>
        <div className='pop-up-card'>
            <div className='cancel' onClick={handleCancel}>esc</div>
            <div className='info'>
                <img src={data.image} alt="" height={500}/>  
                <p>Title: {data.bookname}</p>
                <p>Author: {data.author}</p>
                <p>Description: {data.description}</p>
                <p>Price: {data.price}</p>
            </div>
            <div className='update'>
                <div className='field'>
                    <label htmlFor="">Title</label>
                    <input type="text" name='bookname' value={book.bookname} onChange={handleChange} />
                </div>
                <div className='field'>
                    <label htmlFor="">Author</label>
                    <input type="text" name='author' value={book.author} onChange={handleChange}  />
                </div>
                <div className='field'>
                    <label htmlFor="">Description</label>
                    <textarea name="description" id="" rows={4} value={book.description} onChange={handleChange} ></textarea>
                </div>
                <div className='field'>
                    <label htmlFor="">Price</label>
                    <input type="number" name='price' value={book.price} onChange={handleChange}  />
                </div>

                <button className='btn btn-primary' onClick={handleUpdate}>Update</button>
            </div>
        </div>
    </div>
  )
}

export default UpdatePopUp
