const express = require('express');
const library = require("./library.js");
const PORT = 3500;

const app = express();

app.get('/', (req,res) => {
    let name = req.query.name
    let author = library.getBookAuthor(name)
    console.log(req.query);
    res.json({message: "hello bootcampers", author : author});
})

app.get('/cats', (req, res) => {
    console.log(req.query);
    res.json({ message: "I like cats" });
})
app.listen(PORT, () => {
    console.log(`I am listening on port ${PORT}`);
});
