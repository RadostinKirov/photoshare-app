# PhotoShare React Documentation

This app was built using React framework
 - the App is hosted on Firebase - https://photoshare-app-server.herokuapp.com/
 - for the server side it is used Express app hosted on Heroku - https://photoshare-app-server.herokuapp.com/
 - the data is stored on a Mongo DB cloud
  

## Main views and functionality

### Home Page - Guest
 #### adress: /home
  - A preview of all posted pictures is availabe 

### Home Page - Logged user
 #### adress: /home
  - A preview of all posted pictures is availabe 
  - Ranklist for top 3 users available
  - Most liked picture is shown

### Login / Register page
 #### adress: /login 
 #### adress: /register
  - Validation implamented for both Login and Register page
  - Username should be at least 5 characters
  - Password should be at least 6 characters 
  - During registration both Password and Repassword should match
  - OnSubmit errors and Server errors are shown in additional Error Box which auto hides in 5 seconds

### Profile page
 #### adress: /profile/:userId
  - A profile page is available for the currently logged user in the Header
  - A profile page is available for the top 3 users from the Ranklist


### Details page
 #### adress: /details/:photoId
  
  There is information available for the Image Title, Image Description and Image owner
  - Commetnig the photo is available . Last 3 comments are shown
  -  
   - Photo owner : 
     - has access to Edit / Delete buttons 
     - Like button is not active
   - Logged user who is not owner of the photo:
     - has no access to Edit / Delete buttons
     - Can like once the photo and then the like button become inactive
 

### Edit page
 ### adress: /edit/:photoId
    - only the owner of the photo has access to the Edit page
    - The input field are pre-field with the current photo information
    
    
#### 404 Page
 ### adress: /*
   - for all invalid URL a specific 404 page is shown
