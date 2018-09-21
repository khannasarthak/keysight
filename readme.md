## DEMO: [http://www.sarthakkhanna.me/keysight/](http://www.sarthakkhanna.me/keysight/)

### Objective
Creating a UI with drag and drop features to create expressions.

### Technologies used
- JavaScript
- jQuery & jQuery UI
- HTML/CSS
- Bootstrap

### Assumptions
- Dropping will create new placeholder Divs.
- Functions are available on page load and do not change dynamically.
- Currently only 5 functions with multiple number of arguments:
    - ADD - 2 arguments
    - SUBTRACT - 3 arguments
    - MULTIPLY - 4 arguments
    - NEGATE - 1 argument
    - SQUARE - 1 argument
- More functions can be added or the present ones can be replaced. 

### Additional Features
- **Clear Screen** : clears the expression area
- **Recursion Depth**: Currently functions are droppable indefinitely, but can be capped by setting the level and depth variables. 


### Screenshots:
1. Basic UI
![Basic UI](1.PNG)

2. UI with functions dropped
![Dropped Functions](2.PNG)