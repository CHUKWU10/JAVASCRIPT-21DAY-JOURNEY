I was supposed to have done 30 days of javascript but lets stick to 21 days of javascript.
MY 21 DAYS OF JAVASCRIPT

WHAT IS JAVASCRIPT?
Javascript is the programming language of the web. 
it is used to make web pages interactive. 
it is a high-level programming language that is interpreted by the browser. 
it is a client side language, meaning that it runs on the user's computer rather than on the server.
This allows for faster response times and less load on the server. 
Javascript is an event driven language, meaning that it responds to user actions such as clicks, key presses, and mouse movements. 
This allows for dynamic web pages that can change in response to user actions.
Javascript is an object oriented language, meaning that it uses objects to represent data and functions. this allows for code reuse and modularity. 
Javascript is also a functional language meaning that it allows for functions to be passed as arguments to other functions.

LINKING JAVASCRIPT TO HTML
This is how you link javascript to HTML:
<script src="main.js"></script>

VARIABLES
A variable is a container for storing data values.
There are three main ways to declare one:
1. VAR: use is outdated so no longer used except for some instances.
2. LET: Use let for values that can and needs to be reassigned.
3. CONST: For values that are constant, not reassignable.

DATATYPES
THERE ARE TWO TYPES OF DATA TYPES.
1. PRIMITIVE DATA TYPES 
2. NON - PRIMITIVE DATA TYPES 

PRIMITIVE DATA TYPES
1. STRING 
    They are enclosed in a single or double quote. 
    or simply say text writte in quotes.
    let firstName = "immanuel" 
2. NUMBER
    Integers or decimals
    let age = 30;
3. BOOLEAN
    A true or false validation.
    let isProgrammer = true;
4. NULL
    intentionally left empty.
    let nothing = null;
5. UNDEFINED 
    a variable declared but not assigned.
    let name;
    the above variable is declared but not assigned. 
    a variable assigned is the one with an equal sign. 
6. BIGINT
    For really large numbers
7. SYMBOL
    unique identifiers
    symbol('id')

    SUMMARY
    let name = "Immanuel";  (string)
    let age = 25;           (number)
    let isCool = true;      (boolean)
    let money;              (undefined)
    let goal = null;        (null)
    let big = 123456789n;   (bigin)
    let id = Symbol("id");  (symbol)


 NON - PRIMITIVE OR REFERENCE DATA - TYPES
 These are complex structures that can hold multiple values and are mutable ( i.e they can be changed )

 1. OBJECT
    Javascript Objects are written with curly braces {},
    Object properties are written as name: value pairs, separated by commas.

    const person = {
        firstName: "John",
        lastName: "Mark",
        age: 30,
        dob: 19 - 10 -2000,
    }

2.  ARRAY
    Arrays are list of items written in a square bracket.
    Array itemss are separated by commas.

    const cars = ["Benz", "BMW", "Range rover"];

3. FUNCTION
    Block of code that can run when called. 
    function (parameter){statement}

    DIFFERENCE BETWEEN PRIMITIVE AND REFERENCE/NON - PRIMITIVE
    Primitive contains a single value. Like writing your name on a piece of paper and keeping it or handing it over. 

    Reference contains more than one values in them. Just like a folder that contains a lot of files in them.
    




