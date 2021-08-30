# **myFlix**

The server-side component of the Flex web application. The web application provides users with access to information about different movies, directors, and genres. Users will be able to sign up, update their personal information, and create a list of their favorite movies.

[Repo](https://github.com/akr0051/Flix) built with React

[Repo](https://github.com/akr0051/Flix-Angular) built with Angular 

## **Features**
* Returns a list of ALL movies to the user
* Returns data (description, genre, director, image URL, whether it’s featured or not) about a
single movie by title to the user
* Returns data about a genre (description) by name/title (e.g., “Thriller”)
* Returns data about a director (bio, birth year, death year) by name
* Allows new users to register
* Allows users to update their user info (username, password, email, date of birth)
* Allows users to add a movie to their list of favorites
* Allows users to remove a movie from their list of favorites
* Allows existing users to deregister

## **Core Back-End Technologies**
* MongoDB
* Express.js
* Node.js
* Mongoose
* Heroku
* NPM

## **Authentication**
The app uses JWT (token-based) authentication with the help of passport.js.
