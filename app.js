// function login() {
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;
//     console.log(email, password);
    


//     firebase.auth().signInWithEmailAndPassword(email, password)
//   .then((userCredential) => {
//     // Signed in
//     var user = userCredential.user;
//     console.log(user);
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     console.log(errorMessage);
//   });
  
// // function logout() {
// //      alert("hello");
// // };
//     // firebase.auth().signOut().then(() => {
//     //     // Sign-out successful.
//     // }).catch((error) => {
//     //     // An error happened.
//     // });
    

// function signup() {
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
//     console.log(email, password);
//     firebase.auth().createUserWithEmailAndPassword(email, password)
//         .then((userCredential) => {
//             // Signed in 
//             var user = userCredential.user;
//             // ...
//         })
//         .catch((error) => {
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             // ..
//         });
// };
// };



// function login() {
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
//     console.log(email, password);



//     firebase.auth().signInWithEmailAndPassword(email, password)
//         .then((userCredential) => {
//             // Signed in 
//             const user = userCredential.user;
//             console.log(user);
//             // ...
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.log(errorMessage);
//             // ..
//         });
// }

// function logout() {
//     firebase.auth().signOut().then(() => {
//         // Sign-out successful.
//     }).catch((error) => {
//         // An error happened.
//     });
// }

// function signup() {
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
//     console.log(email, password);
//     firebase.auth().createUserWithEmailAndPassword(email, password)
//         .then((userCredential) => {
//             // Signed in 
//             var user = userCredential.user;
//             // ...
//         })
//         .catch((error) => {
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             // ..*(*)/
//         });
// }

// const form = document.getElementById("form");
// const name = document.getElementById("name");
// const email = document.getElementById("email");
// const password = document.getElementById("password");
// const button = document.getElementById("button")
function login() {
    var user = document.getElementById("name").value;
    // var email = document.getElementById("email");
    var myPass = document.getElementById("password").value;
    if(myPass) {
        return console.log(user, myPass);
    }


};

// form.addEventListener("submit",(e) => {
//     e.preventDefault();
//     alert(email, password);
// });
// email.addEventListener("focusout", (e)=>{
//     if(!validateEmail(email)){
//         email.style.borderColor = "red";
//         generateError("email", "Please enter a valid email");
//         email.parentElement.classList.add("error");
//     }
// });

// // Focusout event listener triggers when the user clicks anywhere else besides the input
// password.addEventListener("focusout", (e)=>{
//     if(!validatePassword(password)){
//         password.style.borderColor = "red";
//         generateError("password", "Please enter a valid password");
//         password.parentElement.classList.add("error");
//     }
// });