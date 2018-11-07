const express = require('express');

const app = express();

app.use(( req, res, next ) => {

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Header", "Origin, X-Requested-Width, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods",
        "GET, POST, PUT, OPTIONS, PATCH, DELETE");
  next();

});


app.use('/api/posts' , (req, res, next) => {

const posts = [
  {
    id: "asdasi2i2",
    title: "first title",
    content: "first title's content"
  },
  {
    id: "sasasds021",
    title: "Second title",
    content: "Second title's content"
  }
];

res.status(200).json({
  message: "Posts fetched successfully!",
  posts: posts
});

});



module.exports = app;
