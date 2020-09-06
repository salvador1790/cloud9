//FIRE BASE CONNNECTION
var firebaseConfig = {
    apiKey: "AIzaSyCVY-tqI-b2plwmY2x5MID-gRF8-jd5WLM",
    authDomain: "project-46178.firebaseapp.com",
    databaseURL: "https://project-46178.firebaseio.com",
    projectId: "project-46178",
    storageBucket: "project-46178.appspot.com",
    messagingSenderId: "355624261881",
    appId: "1:355624261881:web:33df5262c2a4833992ea28",
    measurementId: "G-7FXZK198LW"
};

firebase.initializeApp(firebaseConfig);

let database = firebase.database();

//FIRE BASE CONNECTION END//


//VERIFY THAT USER IS SIGNED IN //

firebase.auth().onAuthStateChanged(function(user) {

    if (user) {
        
      $("#wrapper").css("display","block");
      $("#notLoggedIn").hide();
      
            window.location.replace("https://salvador1790.github.io/cloud9/home.html")

     
    } else {
    
    }
  });

//VERIFY THAT USER IS SIGNED IN END //

//CREATE A NEW USER LOG//

$("#submitNewUSer").on("click",function(){

  let newEmail = $("#newUSer_Email").val();
  let newPassword = $("#newUser_password").val();

  console.log(newEmail, newPassword);

  firebase.auth().createUserWithEmailAndPassword(newEmail, newPassword).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    
    alert("Error : " + errorMessage);
  });


})





//CREATE NEW USER LOGIC END//



//GETS THE VALUE OF EMAIL AND PASSWORD ON CLICK ON SUBMIT BUTTON//
$("#loginbtn").on("click", function () {

    let email = $("#email_field").val();
    let password = $("#password_field").val();

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        
        alert("Error : " + errorMessage);

      });

})

// END//
