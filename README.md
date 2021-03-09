# CSC-307-Lucky7
![alt text](https://travis-ci.org/rtshinta/CSC-307-Lucky7.svg?branch=main) <br />

### Linter
we will be using camel case stylization for naming functions.

a line break of at max 120 characters will be used.

We will be using the plugin Prettier to deal with code formatting. This can be found in the extensions of visual studio code.

A spacing format of one space within functions max, with two spaces between functions themselves.

Arrow functions will be primarily used for inside function calls. This structure may change as most outside functions will need to be changed from current arrow format, but seems most people following this stylization.

Using travis CI for push checking.

Tags that have no children will always self-close.
So...
<foo></foo> will be <foo />

Python, functions with too many inputs will have their inputs on newlines and tabbed.
foo = long_function_name(
    var_one, var_two,
    var_three, var_four)...

List constructs will be newlined in an appropriate layout similar to the board in tic tac toe to make visualization easier.
my_list = [
    1, 2, 3,
    4, 5, 6,
]

Python will have same 120 character limit.
Python will be following traditional tab indention.

imports will all be given own line to increase readibility. imports will be.
from ... import ...


_______________________________________________________________________________________________________________________________

### Project Blurb

Our project is a popup event web app where people can view and also add popup events to the website. 
Clicking on a popup event card will take you to another page where you can see all the details of the event
and also leave a like on the event. Press the hamburger menu at the top right of the screen where you can access the homepage,
form page, and the about page. Pressing the logo at the top left will redirect you back to the homepage.
Users can filter events in their feed by categories, sort by date, sort by amount of likes, and also search
for events by their name. The user can also filter by location by entering a zip code and specifying the max range
by changing the slider.


_______________________________________________________________________________________________________________________________


### UI Prototype

Link: https://www.figma.com/file/UbuZG9Uyi9Dswpcku2TjB8/App?node-id=0%3A1

The link above takes you to our initial Figma UI Prototype where we planned how our frontend would appear.<br />
Last updated on February 5, 2021


_______________________________________________________________________________________________________________________________



### Development Environment Setup


First clone our repository
cd into the CSC-307-Lucky7 Folder

To start the react frontend install the following packages:<br />
npm install<br />
npm install react-bootstrap bootstrap<br />
npm install react-bootstrap-range-slider<br />
npm install --global yarn<br />
To start react:<br />
npm start<br />

To install Flask and setup a virtual environment depending on your system:<br />
First cd into the flask folder<br />
Follow the instructions from https://flask.palletsprojects.com/en/1.1.x/installation/<br />
Once you have installed Flask and your virtual environment:<br />
For Windows use the following commands to start Flask:<br />
set FLASK_APP=sample_backend.py<br />
set FLASK_ENV=development<br />
flask run<br />

For Mac/Linux use the following commands to start Flask:<br />
export FLASK_APP=sample_backend.py<br />
export FLASK_ENV=development<br />
flask run<br />

To stop Flask:<br />
(Press CTRL+C to quit)


_______________________________________________________________________________________________________________________________



### Links to our Diagrams on GitHub Wiki

Link to our UML Diagram wiki page: https://github.com/rtshinta/CSC-307-Lucky7/wiki/UML-Diagram<br/>

Link to our Use Case Diagram wiki page: https://github.com/rtshinta/CSC-307-Lucky7/wiki/Use-Case-Diagram