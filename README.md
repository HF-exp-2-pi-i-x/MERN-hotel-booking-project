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

# Main features

## Login
Information needed: <b>username</b> & <b>password</b>
1. check whether username exists 
2. verify the password
3. create cookie (JWT that contains user information) to remember the visit

## Register 
Information needed: <b>username</b>, <b>password</b> and other personal datas
1. Hash the password
2. Create a new user object that contains all information except setting password = hash
3. Insert a new user document to MongoDB

## Search 
Information needed: <b>locations</b>, <b>dates</b> and <b>options</b>
1. Navigate to hotel list page after search button is clicked
2. In the list page, display hotels that fit the criteria 
3. Navigate to the page of the hotel selected

## Booking
1. Login is required for reserve
2. Display the available rooms in the Reserve component
3. Rooms that are not available cannot be selected
4. Modify available dates in Room document after selecting rooms and clicking button






