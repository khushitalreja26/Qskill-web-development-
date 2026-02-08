// LOGIN VALIDATION
function validateLogin() {
let username = document.getElementById("username").value.trim();
let password = document.getElementById("password").value.trim();
  if (username === "" || password === "") {
        alert("All fields are required!");
        return;
    }
       if (username.length < 4) {
        alert("Username must be at least 4 characters");
        return;
    }
 if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return;
    }

    // Dummy Login
    if (username === "admin" && password === "123456") {
        alert("Login Successful!");

        document.getElementById("loginBox").classList.add("hidden");
        document.getElementById("spotifyBox").classList.remove("hidden");
 } else {
        alert("Invalid Username or Password");
    }
}


// SPOTIFY DOWNLOAD FUNCTION
async function downloadSong() {
let link = document.getElementById("spotifyLink").value.trim();
if (link === "") {
        alert("Please enter Spotify link");
        return;
    }
if (!link.includes("spotify.com")) {
        alert("Invalid Spotify Link");
        return;
    }
 alert("Processing... Please wait");
 const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd644d6f67bmshedb4b420359c791p1eb12fjsn55ae2e925fd4',
            'X-RapidAPI-Host': 'spotify-downloader-api.p.rapidapi.com'
        }
    };
try {
 const url = `https://spotify-downloader-api.p.rapidapi.com/download?url=${encodeURIComponent(link)}`;
  const response = await fetch(url, options);
 const data = await response.json();
  console.log(data); // For debugging

        // REAL API RESPONSE
        if (data && data.link) {

            window.open(data.link, "_blank");
            alert("Download Started!");

        }
        // DEMO MODE (When API Fails)
        else {

            alert("API Failed. Opening Demo Song...");

            window.open(
                "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                "_blank"
            );
        }

    }
    catch (error) {

        alert("Server Error. Opening Demo Song...");

        window.open(
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
            "_blank"
        );
    }
}
