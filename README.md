# Development

### Link to Deployed Website
https://tragicpanda10.github.io/development/

### Goal and Value of the Application
The goal of the app is to allow users to easily browse and select fish in Animal Crossing based on criteria such as location, price, and rarity. A user might find it useful to have a collection of all the available fish in the game in order to know where to go fishing for any particular fish. Alternatively, they might use the app to keep track of which fish they've caught. 

### Usability Principles Considered
I used a fixed side panel to always keep the controls for sorting and filtering available to users. The options for filtering were grouped by type and visually separated by dividers. I used a high contrast background to the cards being displayed to maximize readability and draw the user's attention to the cards. Buttons to add or remove fish from the inventory have different, contrasting colors to distinguish them. 

### Organization of Components
FishCard - takes in the name of a fish as a parameter and returns a card containing the name, price, location, rarity, image, and description of that fish from the API-retrieved information in fish.json

FilteredList - Handles the sorting and filtering aspect of the app, which is passed down from App.js. Also handles displaying the cart and aggregating the items in the inventory. Returns a sorted collection of FishCards in a grid for all fish that pass through the filter. 

Inventory - Displays the total price of all items in the inventory in a bottom fixed menu bar. 

App - Handles the creation of the side panel of buttons and the displaying of all components. 

### How Data is Passed Down Through Components
App - Passes down an array containing the filters selected and the sorting type to FilteredList.

FilteredList - Passes down a Javascript object containing information about a particular fish's name, price, description, location, and rarity to FishCard. Passes down the sum of prices of fish in the inventory to Inventory. 


### How the User Triggers State Changes
App: sortBy - string state that changes whenenver a user clicks on a sort button
    myFilter - array state that changes whenever a user chooses a filter option of rarity, location, or the cart

FilteredList: cart - Javascript object state that changes whenever a user clicks on a card's "Add to inventory" or "Return to Sea" buttons. The former adds the fish object into the cart and the latter removes it.





