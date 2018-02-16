# liri-node-app

Liri Node App is a Node.js based application that takes in user arguments to request information from various API's to return information the user is requesting.

## Getting Started

Direct your terminal/bash to the root file. Install all Node packages: twitter, node-spotify-api, and request. 

Begin by typing in any of the below commands:

Twitter
```
node liri.js my-tweets
```

Spotify
```
node liri.js spotify-this-song "<song name>"
```

OMDB
```
node liri.js movie-this "<movie name>"
```

Do What It Says
```
node liri.js do-what-it-says
```

## API's Used

* Twitter (https://www.npmjs.com/package/twitter) - Used to pull the past 20 user tweets.
* OMBD (http://www.omdbapi.com/) - Pulls movie information.
* Spotify (https://developer.spotify.com/web-api/) - Pulls music and song information.

## Other Technologies

* Request (https://www.npmjs.com/package/request) - Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.
* dotenv (https://www.npmjs.com/package/dotenv) - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

## Deployment

https://github.com/jketring6/liri-node-app

## Authors

* **Jordan Ketring** -(https://github.com/jketring6)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details