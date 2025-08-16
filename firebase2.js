<script>
  var firebaseConfig = {
    apiKey: "AIzaSyAHCYxUClxGazeEdwYeLPCM4bGDhjFCnCY",
    authDomain: "koulu-info-tv.firebaseapp.com",
    projectId: "koulu-info-tv",
    storageBucket: "koulu-info-tv.firebasestorage.app",
    messagingSenderId: "1002414133585",
    appId: "1:1002414133585:web:d66ba57bac6046cc544370",
    measurementId: "G-FSPR8TG6ET"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var remoteConfig = firebase.remoteConfig();
  remoteConfig.settings = {
    minimumFetchIntervalMillis: 60000
  };
  remoteConfig.defaultConfig = {
    refresh_version: "v1"
  };

  remoteConfig.fetchAndActivate()
    .then(function () {
      var current = remoteConfig.getValue("refresh_version").asString();
      console.log("Current version:", current);
      // You can trigger reload or other logic here
    })
    .catch(function (err) {
      console.error("Remote Config error:", err);
    });
</script>
