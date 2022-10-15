
const firebaseConfig = {
  apiKey: "AIzaSyBQJyC5LGdbd-_wav4ahHCVGRiOfQwiUX8",
  authDomain: "turtle-17f20.firebaseapp.com",
  databaseURL: "https://turtle-17f20-default-rtdb.firebaseio.com",
  projectId: "turtle-17f20",
  storageBucket: "turtle-17f20.appspot.com",
  messagingSenderId: "936957448523",
  appId: "1:936957448523:web:36aa483c554df6164d18ce",
  measurementId: "G-6MY0F5J8HX"
};


//funni comment
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
    
    window.location = "tap_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();


function redirectToRoomName(name)
{
      console.log(name)
      localStorage.setItem("room_name", name);
      window.location = "tap_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html"
}
