import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), "public")))

let blogs = [
  {
    title: "A special Title",
    desc: "A special Description"
  }
]


app.get("/crud/blogs", (req, res) => {
  res.render('crud/read', {blogs})
})
app.post("/crud/blog/create", (req, res) => {
  const {title, desc} = req.body;
  console.log(title, desc)
  blogs.push({title, desc});
  res.redirect("/crud/blogs")
})

app.get("/crud/blog/create", (req, res) => {
  res.render('crud/create', {blog: {}})
})


app.get("/crud/blog/:id", (req, res) => {
  const {id} = req.params;
  const blog = blogs[id];
  res.render('crud/blog', {blog, id})
})
app.get("/crud/blog/:id/edit", (req, res) => {
  const {id} = req.params;
  const blog = blogs[id];
  res.render('crud/create', {blog, id})
})
app.post("/crud/blog/:id/edit", (req, res) => {
  const {id} = req.params;
  const blog = blogs[id];
  const {title, desc} = req.body;
  blog.title = title;
  blog.desc = desc;
  res.redirect("/crud/blogs")
})

app.get('/crud/blog/:id/delete', (req, res) => {
  const {id} = req.params;
  blogs.splice(id, 1);
  res.redirect("/crud/blogs")
});







app.listen(8000, () => console.log("Started at http://localhost:8000"))
