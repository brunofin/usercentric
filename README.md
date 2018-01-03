# Usercentric GitHub

### Made with ❤ by [Bruno Finger](https://github.com/brunofin)

Usercentric GitHub is my solution to a challenge proposed by a company as part of their recruiting process.

The challenge consisted of creating an application which moves the focal point of GitHub from the repositories and codes, to the user and their interactions.

These are the proposed requirements:

*   The list of contributors to all Angular repositories. The ranking should be sortable by amount of contributions made by developer to all repositories, by amount of followers, public repos & gists he/she published;
*   The details page of each contributor with all repositories he contributed to and his details;
*   The repository details page where we can find other contributors.

The developed application implements all three above requirements, and:

*   Not only the Angular organization repositories, but it also supports showing the same level of details for any given organization;
*   When the User has their location set, the application will try to geolocate the data using the OpenStreetMaps Nominatim API and display it using a Leaflet component with OSM layer;
*   The application implements I18N, that means it is translatable. The following languages are implemented and usable within the app: English (US) and Portuguese (BR). Other languages can easily be implemented by extending one of the strings.json files.
*   There is an asynchronous search bar which will simultaneously display users and organizations based on the input, and once clicking on a result, will redirect to the correct view within the application for that specific kind of data. The search bar implements a debounce rate to avoid overflowing the search API and exceed the maximum amount of API requests limit.
*   The application internally cache some of the API calls to avoid making too many requests;
*   The application also has a somewhat responsive layout, though it wasn't the primary focus of this implementation.

The technological stack in use is:

*   AngularJS 1.5;
*   Angular Material;
*   OSM and Leaflet;
*   Babel (for transpiling ES6 into ES5);
*   Gulp;
*   SASS/SCSS;
*   More details can be found in the package.json file.

To locally visualize the solution, follow the instructions below:

First, make sure you have all the dependencies installed locally, those would be:

*   Python 3
*   Git
*   NodeJS 9
*   Yarn

If on Ubuntu/Debian-based distros or Ubuntu for Windows 10, simply run the `setupEnv.sh` script in a bash shell, and it should take care of it for you.

Then, simply run `yarn start`. It should make the source code ready and start a local web server running on port 8080.

There's a live demo at [https://usercentric.brunofinger.xyz](https://usercentric.brunofinger.xyz) as well.
