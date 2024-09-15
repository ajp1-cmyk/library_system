const express = require('express')
const path = require('path');

const app = express();

app.get("/",(req,res) => {
	res.sendFile(__dirname + '/views/book_form.html');
});

app.post("/submit-book", (req,res)=>{
	res.send("Book Submitted");

});

app.use((req,res,next)=>{
	console.log(`${req.method} request for ${req.url}`);
	next();
});

const port = 3000;
app.listen(port,() => {
	console.log(`Server listening to port ${port}`);
})
