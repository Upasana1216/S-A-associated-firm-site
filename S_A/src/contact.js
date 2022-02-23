// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDd4rS8uyJcXJYBst9KuFNWzDlY05qa67g",
  authDomain: "test-form-2f999.firebaseapp.com",
  databaseURL: "https://test-form-2f999-default-rtdb.firebaseio.com",
  projectId: "test-form-2f999",
  storageBucket: "test-form-2f999.appspot.com",
  messagingSenderId: "332543371212",
  appId: "1:332543371212:web:e1c4068ceb6b57cf689f69"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector("#contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let phone = document.querySelector("#phone").value;
  let message = document.querySelector("#message").value;
  console.log(name, email, message);

  saveContactInfo(name, email, phone, message);

  document.querySelector("#contactForm").reset();


  document.querySelector(".alert").style.display = 'block';

  setTimeout(function(){
    document.querySelector('.alert').style.display = "none";
  },3000)
}

// Save infos to Firebase
function saveContactInfo(name, email, phone, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    phone: phone,
    message: message,
  });
}