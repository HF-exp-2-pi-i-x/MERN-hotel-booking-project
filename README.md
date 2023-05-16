# MERN-hotel-booking-project

### A responsive hotel booking site built by MERN stack. It consists of functions like login, register, booking and search.


# Folder structure
- api 
  - controller (auth/hotel/room/user.js)
  - models (Hotel/Room/User.js)
  - routes (auth/hotel/room/user.js)
  - utils (error & verifyToken.js)
  - env 
  - index.js

- client 
  - src
    - assets
    - components 
    - context (Auth/Search)
    - hooks (useFetch)
    - pages
    - App.jsx
    - main.jsx

# api
In this project, I used Mongoose for the connection between express server and MongoDB. In the index.js file, several routes were added to modify and read data from the database.

In the routes folder, router was created to handle requests (GET,POST,PUT,DELETE). In the routes, handler functions will be triggered when a request is made on certain URL.
