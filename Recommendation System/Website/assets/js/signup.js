$(document).ready(function () {

    var config = {
        apiKey: "AIzaSyAvVme6YNtgF4F8Mi8VoqI4j3yPb87OHFU",
        authDomain: "opendata-soton-travel.firebaseapp.com",
        databaseURL: "https://opendata-soton-travel.firebaseio.com",
        projectId: "opendata-soton-travel",
        storageBucket: "opendata-soton-travel.appspot.com",
        messagingSenderId: "49987776463",
        appId: "1:49987776463:web:a40d4163e22e9378"
    };
    firebase.initializeApp(config);
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', {
        //signInSuccessUrl: 'elements.html',
        signInSuccessUrl: 'dashboard.html',
        signInOptions: [{
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            buttonColor: '#e44c65'
        }
        ],
        credentialHelper: firebaseui.auth.CredentialHelper.NONE,
        // Terms of service url.
        tosUrl: 'http://google.com?q=terms-of-service',
        // Privacy policy url.
        privacyPolicyUrl: 'http://google.com?q=privacy-policy'
        // Other config options...
    });
    var uiConfig = {
        // callbacks: {
        //     signInSuccessWithAuthResult: function (authResult, redirectUrl) {
        //         // User successfully signed in.
        //         // Return type determines whether we continue the redirect automatically
        //         // or whether we leave that to developer to handle.
        //         return false;
        //     },
        //     uiShown: function () {
        //         // The widget is rendered.
        //         // Hide the loader.
        //         document.getElementById('loader').style.display = 'none';
        //     }
        // },
        // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        //signInFlow: 'popup',
        
        signInOptions: [
            // Leave the lines as is for the providers you want to offer your users.
            //firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            //firebase.auth.GithubAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
            //firebase.auth.PhoneAuthProvider.PROVIDER_ID
        ],
        // Terms of service url.
        tosUrl: 'http://google.com?q=terms-of-service',
        // Privacy policy url.
        privacyPolicyUrl: 'http://google.com?q=privacy-policy'
    };


});

