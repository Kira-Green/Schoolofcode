const fs = require('fs');

let dataObject = null;


// fs.readFile('./books/books.json','utf8',(error,data)=>{
//     if(error) {
//         console.log(error)
//     }
//     let dataObject = JSON.parse(data);
//     console.log('Data from file is: ',dataObject)
//     let bookInfo = {
//         OrphanX: {
//             author: "Greg Hurwitz",
//             published: "2016"
//         }
//     };
//     let newData = JSON.stringify({
//         ...dataObject,
//         ...bookInfo
//     })
    
//     fs.writeFile('./books/books.json',newData, error => {
//         if (error) {
//         console.error(error);
//         }
//         console.log("file saved")
//      } )
// });

let appendNewData = JSON.stringify({
    stormbreaker: {
        author: "anthony horowitz",
        published: "a long time ago"
    }
});
fs.appendFile('./books/books.json', appendNewData, (error) => {
    if (error)
        {console.error(error)}
}
)
