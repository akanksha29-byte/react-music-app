# Music app

App is divided into three parts:

### Home
Home page of the app.

### Music
Displays all the data coming from Itunes api in the form of cards. On clicking the cards Itunes webpage will open with the entire collection of songs present in the selected album. There is a Heart icon on every card. On clicking the heart icon album will be addes to favroites list. 

### Favorites
It contains all your favroite albums. We can add more as well as delete albums from the favorites page. On reloading the page the state of the favorites list remains the same.

## Libraries used
Redux: For state management.\
Redux-thunk: It is a middleware for handling dispatches also allowes us to make API calls in Redux.
React-router-dom : For creating different routes
React-bootstrap: For making website responsive.
Redux-persist: For storing the favorite album details in localstorage so that the state is not lost after refreshing the app.

### Search bar
You can search albums by the name or by the artist name.


