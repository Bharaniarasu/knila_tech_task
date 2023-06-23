# Introduction

    The "User Data Management React App "using Local Storage API  is a web application built using React.js that allows users to manage and store their personal information locally in the browser's localStorage. It provides a user-friendly interface for adding, editing, and deleting user data, as well as persistent storage using the browser's localStorage API.And map view also implemented to view users location on map.

# Features

    # Navbar : This app have a navigation bar to navigate to other pages.
    # Footer : This app have a Footer section to navigate to show some links and contact us details.
    # Routing : React router was implemanted to manage routing.
    # User Registration: Users can register by providing their name, email,phone number and other relevant details.
    # User Listing: The app displays a list of registered users with their basic information.
    # User sorting: The app also displays a sortable list of registered users .
    # Add User: We can add new users to the system by providing their details .
    # Edit User: Users can edit the details of existing users, such as their name, email,phone number and other relevant information.
    # Form validation : The input form was completely implemented based on input field validation.
    # Delete User: Users can delete user records from the system.
    # Local Storage: The app utilizes the browser's localStorage API to store user data locally, allowing for # persistent storage across sessions.
    # Redux : Redux state management tool used on this application to manage state very efficiently .
    # Map view : This app have an option to view users location on map view .

# Technologies

    # React.js: A popular JavaScript library for building user interfaces.
    # HTML5: The markup language used for structuring the app's components.
    # CSS3: The styling language used for visually enhancing the app's UI.
    # SCSS: The styling language used for visually enhancing the app's UI.
    # Bootstrap : Css Preprocessor to Enhancing the UI.
    # JavaScript: The programming language used for implementing the app's functionality.
    # Local Storage API: The browser API used for storing user data locally in the localStorage.
    # react hook form : To validate the user input form
    # Yup : To create schema for validation user form
    # Redux : The advance state management tool to manage user datas.
    # React-router-Dom : For routing react component .
    # google-map-react : To create a map view for show user locations with user name .

# Installation

-> Follow these steps to set up and run the User Data Management with Local Storage React App:

    # Clone the repository from [GitHub Repo URL].
    # Open a terminal and navigate to the project directory.
    # Run the command npm install to install the project dependencies.
    # After the installation is complete, run the command npm start to start the development server.
    # Open a web browser and visit http://localhost:3000 to access the app.

# Usage

    # Upon accessing the app, the user will be presented with a user listing page displaying the registered users.
    # To register a new user, click on the "Add User" button and fill in the required details in the registration form.
    # The user form was completely developed on form validation, Make sure to fill all inputs before submitting, else it will show error messages.
    # To edit a user's details, click on the "Edit" button next to the respective user and modify the necessary information.
    # To delete a user record, click on the "Delete" button next to the respective user.
    # The app automatically saves the user data locally using the browser's localStorage API, allowing for persistence across sessions.
    # To view users location in map view ,click the "Map View" button on the navbar.

-> sample data formate:
{
firstname: "John",
lastname: "Peter",
phoneNumber: "9877643221",
email: "Jpeter.t@gmail.com",
address: "no.234, fourth street, small town,",
city: "salem",
state: "tamilnadu",
country: "India",
id: 864834097,
postalCode: "637505",
}
