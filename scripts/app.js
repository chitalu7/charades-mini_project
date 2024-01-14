// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCt_RUSlyThUOfUA0YY3KzATeNnvYXzoLg",
    authDomain: "vb-pt-v00.firebaseapp.com",
    databaseURL: "https://vb-pt-v00-default-rtdb.firebaseio.com",
    projectId: "vb-pt-v00",
    storageBucket: "vb-pt-v00.appspot.com",
    messagingSenderId: "138516709186",
    appId: "1:138516709186:web:a07292e431c3347a1512db"
  };

  
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Function to join the game
function joinGame() {
    // Generate a random username for simplicity
    const username = "Player" + Math.floor(Math.random() * 1000);

    // Create a reference to the 'players' node in the database
    const playersRef = database.ref('players');

    // Add the player to the database
    const playerRef = playersRef.push({
        username: username
    });

    // Listen for changes in the players list
    playersRef.on('value', (snapshot) => {
        updatePlayersList(snapshot.val());
    });

    // Remove player when they leave the page
    window.onbeforeunload = function () {
        playerRef.remove();
    };
}

// Function to update the players list on the page
function updatePlayersList(players) {
    const playersListElement = document.getElementById('players-list');
    playersListElement.innerHTML = '<h2>Players:</h2>';
    
    for (const playerKey in players) {
        const player = players[playerKey];
        playersListElement.innerHTML += `<p>${player.username}</p>`;
    }
}
