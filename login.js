// const cl = console.log;

// const snackbar = (icon, msg) => {
//     Swal.fire({
//         icon: icon,
//         title: msg,
//         timer: 1000
//     })
// }

// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let err = Math.random() > .5 ? false : true;

//         if (!err) {
//             let Data = `Login Successfully!!!`
//             resolve(Data)
//         } else {
//             let err = `invalied details!!!`
//             reject(err)
//         }
//     }, 800)
// })

// function redirectToDashboard() {
//     cl(`Redirect to Dashboard!!`)
// }

// p.then(res => {
//     cl(res)
//     snackbar("success", 'login Successfully!!!!')
//     redirectToDashboard();
// })
//     .catch(err => {
//         cl(err)
//         snackbar("error", 'invalied details!!!!')
//     })