// const cl = console.log;



// const blogForm = document.getElementById("blogForm");

// const blogTitlectrl = document.getElementById("blogTitle");
// const blogContentCtrl = document.getElementById("blogContent");


// const blogContainer = document.getElementById("blogContainer");



// const uuid = () => {
//     return String("xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx").replace(/[xy]/g, (character) => {
//         const random = (Math.random() * 16) | 0;
//         const value = character === "x" ? random : (random & 0x3) | 0x8;
//         return value.toString(16);
//     })
// };


// const snackbar = (title, icon) => {
//     Swal.fire({
//         title,
//         icon,
//         timer: 800
//     })
// }


// let blogArr = [{
//     title: "Javascript",
//     content: "JavaScript is a programming language and core technology of the Web, alongside HTML and CSS.It was created by Brendan Eich in 1995. Ninety - nine percent of websites use JavaScript on the client side for webpage behavior."
// },
// {
//     title: "HTML",
//     content: "Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content."
// }];



// function onBlogSubmit(eve) {
//     eve.preventDefault();


//     let blogObj = {
//         title: blogTitlectrl.value,
//         content: blogContentCtrl.value
//     }
//     cl(blogObj);
//     //eve.target.reset();

//     postBlogObj(blogObj)
//         .then(res => {
//             cl(res)
//             snackbar(res.msg)
//             createBlogs(res.blog)

//         })
//         .catch(err => {
//             cl(err)
//             snackbar(`Something went wrong while creating new blog`, "error")
//         })
// }


// function postBlogObj(blog) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let err = Math.random() > .5 ? false : true;
//             if (!err) {
//                 blogArr.push(blog)
//                 let Data = {
//                     msg: `New blog added Successfully!!`,
//                     blogObj: { ...blog, id: uuid() }
//                 }
//                 resolve(Data)
//             } else {
//                 let err = {
//                     msg: `Something went wrong while creating new blog`,
//                     stetuscode: 400
//                 }
//                 reject(err)
//             }
//         }, 1000)
//     })
// }



// function featchBlog() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let err = Math.random() > .5 ? false : true;
//             if (!err) {
//                 blogArr.push(blog)
//                 let Data = {
//                     msg: `All blog featch Successfully!!`,
//                     blogObj: blogArr
//                 }
//                 resolve(Data)
//             } else {
//                 let err = {
//                     msg: `Something went wrong while creating new blog`,
//                     stetuscode: 400
//                 }
//                 reject(err)
//             }
//         }, 500)
//     })
// }

// const createBlogs = (data) => {
//     let result = "";
//     data.forEach(blog => {
//         result += `
//         <div class="row mt-2" id="blogContainer">
//             <div class="col-md-3 col-sm-6 text-center">
//                 <div class="card">
//                     <div class="card-header">
//                         <h5>${blog.title}</h5>
//                     </div>
//                     <div class="card-body">
//                         <p>${blog.content}</p>
//                     </div>
//                      <button class="btn btn-sm btn-outline-primary btn-block mt-5">Add Blog</button>
//                             <button class="btn btn-sm btn-outline-primary btn-block mt-5 d-none">Update Blog</button>
//                 </div>
//             </div>`
//     })
//     blogContainer.innerHTML = result;
// }
// createBlogs(blogArr);

// blogForm.addEventListener("submit", onBlogSubmit)