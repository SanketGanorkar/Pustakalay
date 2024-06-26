const router = require("express").Router();
const bookModel = require("../models/bookModel.js");

router.post("/add", async (req, res) => {
    try {
      const data = req.body;
  
      // Check if a book with the same name already exists
      const existingBook = await bookModel.findOne({ bookname: data.bookname });
      if (existingBook) {
        return res.status(400).json({
          message: "A book with the same name already exists",
          success: false,
        });
      }
  
      // If no book with the same name exists, proceed to add the new book
      const newBook = new bookModel(data);
      const result = await newBook.save();
      console.log(result);
      res.status(200).json({
        message: "Book added successfully",
        success: true,
        result: result,
      });
    } 
    catch (err) {
      console.log(err);
      res.status(500).json({
        message: "An error occurred",
        success: false,
      });
    }
  });

router.get("/getBooks", async (req, res) => {
  let books;
  try {
    books = await bookModel.find();
    res.status(200).json({ books });
  } catch (err) {
    console.log(err);
  }
});

// GET book with id
router.get("/getBooks/:id", async (req, res) => {
  let books;
  const id = req.params.id;
  try {
    books = await bookModel.findById(id);
    res.status(200).json({ books });
  } catch (err) {
    console.log(err);
  }
});

// UPDATE book with id
router.post("/updateBook/:id", async (req, res) => {
  const id = req.params.id;
  let { bookname, description, author, image, price } = req.body;
  // const name = req.body.bookname;
  console.log("req-body: ", req.body);
  let book;

  if (!bookname || !description || !author || !price)
    return res.status(400).json({ error: "All fields required" });

  price = parseInt(price);
  console.log(typeof price);

  try {
    book = await bookModel.findByIdAndUpdate(id, {
      $set: {
        bookname,
        description,
        author,
        // image,
        price,
      },
    });

    await book.save().then((result) => {
      console.log(result);
      return res.status(200).json({
        message: "Data updated successfully",
        result,
      });
    });
    console.log("Update point");
  } catch (err) {
    console.log(err);
  }
});

// DELETE book by id
router.delete("/deleteBook/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await bookModel.findByIdAndDelete(id).then((result) =>
      res.status(201).json({
        message: "Data deleted successfully",
        result,
      })
    );
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
