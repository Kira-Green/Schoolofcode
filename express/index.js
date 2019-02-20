const express = require('express');
const library = require("./library.js");
const PORT = 3500;
const fs = require("fs");
const bodyParser = require("body-parser");
const app = express();



app.use((req, res, next) =>{
    console.log(`The time is ${Date.now()}`)
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json())

// `localhost:3500/bookinfo/Emma`

app.get('/', (req, res) => {
        res.json({ message: "hello bootcampers" });
})

app.post("/", (req, res) => {
    console.log(req.body);
    res.json({ message: "hello, welcome to the post route!" });
})

app.post('/books', (req, res) => {
    fs.readFile('./books/books.json', 'utf8', (err, booksData) => {
        if (err) {
            console.log(err);
        }
        const oldData = JSON.parse(booksData)
        const newBook = req.body
        const newData = JSON.stringify({
            ...oldData,
            ...newBook
        });
        fs.writeFile('./books/books.json', newData, err => {
            if (err){
                console.error(err)
            }
            res.json({message: 'you just added a new book'
        });
        })
    })  
 } )

app.get('/books', (req,res) => {
    let query = req.query;
    console.log({query});
    let bookName = req.query.title 

    fs.readFile('./books/books.json', 'utf8', (err, booksData) => {
    if(err) {
        console.log(err);
    }
    let data = JSON.parse(booksData)
    if (!bookName) {
        res.json(data)
    }
    let book = data[bookName]
    console.log({book})
    res.json(book);
})
})

app.get('/bookinfo/:bookName', (req, res) => {                       //looks for query parameter
    console.log(req.param);
    // let name = req.query.name
    // let { bookName } = req.query
    const {bookName} = req.params;
    let author = library.getBookAuthor(bookName)
    let date = library.getDatePublished(bookName)
    // console.log(req.query);
    res.json({ message: "hello bootcampers", author: author, date: date });
})

app.get('/authorinfo/:bookName', (req, res) => {                       //looks for query parameter
    console.log(req.param);
    // let name = req.query.name
    // let { bookName } = req.query
    const { bookName } = req.params;
    let author = library.getBookAuthor(bookName)
    
    // console.log(req.query);
    res.json({ message: "hello bootcampers", author: author });
})

app.get('/publishinfo/:bookName', (req, res) => {                       //looks for query parameter
    console.log(req.param);
    // let name = req.query.name
    // let { bookName } = req.query
    const { bookName } = req.params;
    let date = library.getDatePublished(bookName)
    // console.log(req.query);
    res.json({ message: "hello bootcampers", date: date });
})




app.get('/cats', (req, res) => {
    console.log(req.query);
    res.json({ message: "I like cats" });
})
app.listen(PORT, () => {
    console.log(`I am listening on port ${PORT}`);
});


