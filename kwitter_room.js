//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyBW5UTIFOtufWNvtD8ovt8784PQNwpeQq0",
      authDomain: "kwitterlatest-822be.firebaseapp.com",
      databaseURL: "https://kwitterlatest-822be-default-rtdb.firebaseio.com",
      projectId: "kwitterlatest-822be",
      storageBucket: "kwitterlatest-822be.appspot.com",
      messagingSenderId: "85852776802",
      appId: "1:85852776802:web:180efbd0a39e55d4a8643b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { 
  document.getElementById("output").innerHTML = ""; 
  snapshot.forEach(function(childSnapshot) { 
    childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names
       +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
