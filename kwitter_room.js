
//AÑADE TUS ENLACES DE FIREBASE
var firebaseConfig = {
      apiKey: "AIzaSyD0xn_1wSf3V38pO6SqjGKWHkjOie7nt-Q",
      authDomain: "pruebaclase-733cd.firebaseapp.com",
      projectId: "pruebaclase-733cd",
      storageBucket: "pruebaclase-733cd.appspot.com",
      messagingSenderId: "386505971095",
      appId: "1:386505971095:web:79f870acf98e4f465e20d2"}
    ;
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig); 
    document.getElementById("user_name").innerHTML="Bienvenido "+user_name+"!" ;

     function addRoom() {
      room_name=document.getElementById("room_name").value ;
      firebase.database().ref("/").child("room_name").update({
            purpose:"adding room name"
      }) ;
     localStorage.setItem("room_name",room_name) ;
     window.location="kwitter_page.html" ;


}

function getData() { 
      firebase.database().ref("/").on('value', function(snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot) {
                  childKey  = childSnapshot.key;
                  childData=childSnapshot.val ;
                  if(childKey != "purpose") {
                        firebase_message_id=childKey ;
                        message_data=childData ;
                        console.log(firebase_message_id) ;
                        console.log(message_data) ;
                        name = message_data['name'];
                         message = message_data['message'];
                          like = message_data['like'];
                           name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'>";
                           message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                            like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
                             span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag ;
document.getElementById("output").innerHTML+=row ;

                  }

      });});}
getData();
function logout() {
      localStorage.removeItem("user_name") ;
      localStorage.removeItem("room_name") ;
      window.Location.replace("index.html")
}