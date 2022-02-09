document.getElementsByTagName("h1")[0].style.backgroundColor = "white";
const blogs = document.getElementById("blogs");
// console.log(blogs.childNodes);
blogs.style.border = "2px solid black";
blogs.style.borderRadius = "5px";
blogs.style.padding = "0 5px";
const blog = document.getElementsByClassName("blog");
const blog2 = document.querySelectorAll(".blog");
console.log(blog2);
for (const b of blog) {
    b.style.border = "1px solid yellow";
    b.style.borderRadius = "10px";
    b.style.padding = "10px";
    b.style.margin = "5px";
}
