const express = require('express');
const library = require("./library.js");
const PORT = 3500;

const app = express();



// `localhost:3500/bookinfo/Emma`

app.get('/', (req, res) => {
    // let name = req.query.name
    // let { bookName } = req.query
    // let author = library.getBookAuthor(name)
    // console.log(req.query);
    // res.json({ message: "hello bootcampers", author: author });
    res.json({ message: "hello bootcampers" });
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


