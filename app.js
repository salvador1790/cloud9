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
var user = firebase.auth().currentUser;

if (user) {
    // User is signed in
        window.location("https://salvador1790.github.io/cloud9/home.html")
} else {
    // No user is signed in.
}

//VERIFY THAT USER IS SIGNED IN END //



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
