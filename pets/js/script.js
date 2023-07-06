//////////////////////////////////////////////////////////
// Set current year
import { firebaseConfig } from "js";
import { name } from "tar/lib/types";

// const firebaseConfig = {
//   apiKey: "AIzaSyDMd6HF0L9el2ak072Do_7eToXTVMwTg8A",
//   authDomain: "petlove-f7fd1.firebaseapp.com",
//   projectId: "petlove-f7fd1",
//   storageBucket: "petlove-f7fd1.appspot.com",
//   messagingSenderId: "357762529345",
//   appId: "1:357762529345:web:b1a60d593604c4b645eec0",
//   measurementId: "G-550ZYYT36T"
// };

// firebaseConfig.initializeApp(firebaseConfig);

// function writeData() {
//   firebaseConfig.database().ref("user").set({
//     YourName : document.getElementById("name").value,
//     YourEmail : document.getElementById("email").value
//   });
  
// }

// var messageRef = firebase.database().ref('messages');

// document.getElementById('form').addEventListener('Submit', submitForm);

// function submitForm(e){
//   e.preventDefault();

//   var name = getInputVal('full-name');
//   var email = gerInputVal('email');
//   var select = getInputVal('select-where');

//   saveMessage(name, email, select);

//   document.querySelector('.alert').style.display = 'block';

//   setTimeout(function () {
//     document.querySelector('.alert').style.display = 'none';

    
//   },3000);

//   document.querySelector('form').reset();
// }

//   function saveMessage(id) {
//     return document.querySelector(id).value;
//     }

//     function saveMessage(name, email, select) {
//       var newMessageRef = messageRef.push();
//       newMessageRef.set({
//         name:name,
//         email:email,
//         select: select
//       });
      
//     }

// Import the Firebase library
import firebase from "firebase";

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyDMd6HF0L9el2ak072Do_7eToXTVMwTg8A",
  authDomain: "petlove-f7fd1.firebaseapp.com",
  databaseURL: "https://petlove-f7fd1-default-rtdb.firebaseio.com"
});

// Get the reference to the database
const database = firebase.database();

// Create a function to write data to the database
function writeData() {
  // Get the values from the form
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const whereHeard = document.getElementById("select").value;

  // Create a new record in the database
  database.ref("contacts").push({
    name: name,
    email: email,
    whereHeard: whereHeard
  });
}

// Add an event listener to the submit button
document.getElementById("submit").addEventListener("click", writeData);

    




const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

//////////////////
// ////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".sec-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

///////////////////////////
