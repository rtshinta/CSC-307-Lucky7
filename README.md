# CSC-307-Lucky7
![alt text](https://travis-ci.org/rtshinta/CSC-307-Lucky7.svg?branch=main)
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
