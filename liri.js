////////////////GLOBAL VARS///////////////////

require("dotenv").config();
var keys = require("./keys.js");

var Twitter = require('twitter');
var client = new Twitter(keys.twitter);
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var request = require("request");
var fs = require("fs");

var userInput = process.argv[2];

//////////////////MOVIE///////////////////////

if (userInput == "movie-this") {

    var movieName = "";

    var userArgs = process.argv;

    for (var i = 3; i < userArgs.length; i++) {

        if (i > 3 && i < userArgs.length) {

            movieName = movieName + "+" + userArgs[i];

        } else {

            movieName = movieName + userArgs[i];

        }
    }

    request("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=1e0a7861", function(error, response, body) {

        if (!error && response.statusCode === 200) {

            console.log("Title: " + JSON.parse(body).Title);
            console.log("Year Released: " + JSON.parse(body).Year);
            console.log("Rating: " + JSON.parse(body).Rated);
            console.log("Rotten Tomatoes: " + JSON.parse(body).Ratings[1].Value);
            console.log("Country of Origin: " + JSON.parse(body).Country);
            console.log("Language: " + JSON.parse(body).Language);
            console.log("Plot: " + JSON.parse(body).Plot);
            console.log("Actors: " + JSON.parse(body).Actors);
        }

    });
}

//////////////////SPOTIFY///////////////////////

function GetSong(song) {
    if (userInput == "spotify-this-song") {

        var songName = "";

        var userArgs = process.argv;

        for (var i = 3; i < userArgs.length; i++) {

            if (i > 3 && i < userArgs.length) {

                songName = songName + "+" + userArgs[i];

            } else {

                songName = songName + userArgs[i];
            }

        }

        spotify.search({ type: "track", query: songName, limit: 1 }, function(err, data) {

            if (err) {

                return console.log(err);

            }

            console.log("Artist: " + data.tracks.items[0].artists[0].name);
            console.log("Song Title: " + data.tracks.items[0].name);
            console.log("Preview Link: " + data.tracks.items[0].album.href);
            console.log("Album: " + data.tracks.items[0].album.name);
        });
    };
};

//////////////////TWITTER///////////////////////

if (userInput == "my-tweets") {

    client.get("statuses/user_timeline", function(error, tweets, response) {

        if (error) throw error;

        console.log("My Tweets:")

        for (var i = 1; i < 22; i++) {

            console.log("=========================")
            console.log(tweets[i].text);
        }

    });
}

//////////////////DO WHAT IT SAYS///////////////////////

if (userInput == "do-what-it-says") {
    fs.readFile("random.txt", "utf8", function(error, data) {

       	if (error) {

            return console.log(error);

        }

        var dataArray = data.split(",");

        spotify.search({ type: "track", query: dataArray[1], limit: 1 }, function(err, data) {

            if (err) {

                return console.log(err);

            }

            console.log("Artist: " + data.tracks.items[0].artists[0].name);
            console.log("Song Title: " + data.tracks.items[0].name);
            console.log("Preview Link: " + data.tracks.items[0].album.href);
            console.log("Album: " + data.tracks.items[0].album.name);
        });
    });
};

GetSong();