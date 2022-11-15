# Overview

This is a website I made in ReactJS called My Recipe Storer. It is still a work in progress, but the basic
idea is that a user can register with the website using their Google sign in, and then create and save recipes.
Each recipe is stored in Firebase Firestore and is tied to a user's Gmail account. 

[Software Demo Video](https://www.youtube.com/watch?v=2X01j5q7UZk)

# Web Pages

* The Home page is the first page the users will see when they load the website. This page contains basic steps
that the user can follow to create their first recipe.

* The Create New Recipe page contains a form that the user will fill out, and when they click the submit button all of that info will be saved to a firestore database.

* The Saved Recipes page will display each of the recipes that the user has submitted on the Create New Recipe page. 

# Development Environment

I developed this project using the Visual Studio Code IDE as it's one I am very familiar with. I used the basic
React library, as well as the React-Router-Dom and Firebase libraries. 

# Useful Websites

{Make a list of websites that you found helpful in this project}
* [Cloud Firestore](https://firebase.google.com/docs/firestore)
* [How To Set Up React With Firebase/Firestore](https://www.youtube.com/watch?v=VJmNtYZl8i4&t=117s)
* [How to store form data in Cloud Firestore with React](https://www.youtube.com/watch?v=9keBDA_FLzs&t=29s)
* [React Router 6 Tutorial #3 - Redirects & useNavigate](https://www.youtube.com/watch?v=zCgruoRUxlk)
* [React With Firebase/Firestore | CRUD and Queries | Version 9](https://www.youtube.com/watch?v=-yrnWnN0g9o&t=477s)

# Future Work


* Change the Saved Recipes page to only display the recipe title and an image, and then upon
clicking the recipe title you will be redirected to a page that displays only that recipe.
* Add firebase storage so that users can store their own images and videos.
* Create a sign in system that allows users to sign in with emails other than Google. 