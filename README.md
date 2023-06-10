# LightBnB

## Project Structure

```
.
├── db
│   ├── json
│   └── database.js
├── public
│   ├── javascript
│   │   ├── components 
│   │   │   ├── header.js
│   │   │   ├── login_form.js
│   │   │   ├── new_property_form.js
│   │   │   ├── property_listing.js
│   │   │   ├── property_listings.js
│   │   │   ├── search_form.js
│   │   │   └── signup_form.js
│   │   ├── libraries
│   │   ├── index.js
│   │   ├── network.js
│   │   └── views_manager.js
│   ├── styles
│   │   ├── main.css
│   │   └── main.css.map
│   └── index.html
├── routes
│   ├── apiRoutes.js
│   └── userRoutes.js
├── styles  
│   ├── _forms.scss
│   ├── _header.scss
│   ├── _property-listings.scss
│   └── main.scss
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── server.js
```

* `db` contains all the database interaction code.
  * `json` is a directory that contains a bunch of dummy data in `.json` files.
  * `database.js` is responsible for all queries to the database. It doesn't currently connect to any database, all it does is return data from `.json` files.
* `public` contains all of the HTML, CSS, and client side JavaScript. 
  * `index.html` is the entry point to the application. It's the only html page because this is a single page application.
  * `javascript` contains all of the client side javascript files.
    * `index.js` starts up the application by rendering the listings.
    * `network.js` manages all ajax requests to the server.
    * `views_manager.js` manages which components appear on screen.
    * `components` contains all of the individual html components. They are all created using jQuery.
* `routes` contains the router files which are responsible for any HTTP requests to `/users/something` or `/api/something`. 
* `styles` contains all of the sass files. 
* `server.js` is the entry point to the application. This connects the routes to the database.


# how to run the program
# 1. cd LightBnB_WebApp-master
# 2. npm start
# 3. visit http://localhost:3000/
# 4. Register and login to create listing

# To see list of resverations
# you have to login with an account that has reservation


# Screenshots
![Home page](https://github.com/Momowaz/lightbnb/blob/main/Screenshot/home%20page%20-%20getAllProperties.png)

![My listing view](https://github.com/Momowaz/lightbnb/blob/main/Screenshot/My%20listing.png)

![My resveration view](https://github.com/Momowaz/lightbnb/blob/main/Screenshot/my%20reservation.png)

![Search for max cost of $2](https://github.com/Momowaz/lightbnb/blob/main/Screenshot/search%20for%20max%20cost%202.png)

![Search result](https://github.com/Momowaz/lightbnb/blob/main/Screenshot/search%20result%20for%20maximum%20cost%202.png)

![Search for min cost of $5](https://github.com/Momowaz/lightbnb/blob/main/Screenshot/search%20for%20minimum%20cost%205.png)

![Search result](https://github.com/Momowaz/lightbnb/blob/main/Screenshot/search%20result%20for%20minimum%20cost%205.png)
