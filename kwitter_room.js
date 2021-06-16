

localStorage.getItem("user_name",user_name);
user_name = document.getElementById("name_user").innerHTML;

var firebaseConfig = {
    apiKey: "AIzaSyAaG56ALRIcp6O25edFWonekPJQ0KBFuxI",
    authDomain: "kwitter-page-3a488.firebaseapp.com",
    databaseURL: "https://kwitter-page-3a488-default-rtdb.firebaseio.com",
    projectId: "kwitter-page-3a488",
    storageBucket: "kwitter-page-3a488.appspot.com",
    messagingSenderId: "365724262469",
    appId: "1:365724262469:web:d312c8b7e094670d15832c",
    measurementId: "G-MHJR5GYEEJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

 function add_room(){
     room_name = document.getElementById("add_room_input").value;
     firebase.database().ref("/").child("room_name").update({
         purpose : "adding room name"
     });
 }

function logout(){
    window.location ="kwitter.html";    
}




