# dino
A clone of Chrome's 404 screen


## How do objects update their position on screen? 
Three functions contained in updateCustomeProperty.js are largely responsible for keeping track of values that determine movement. These are getCustomProperty(), setCustomProperty(), and incrementCustomProperty(). These functions take in an element, and a custom css property, and then manipulate that element's property value. 

For instance, to set up a dinosaur at the start of the game, the setupDino() function calls setCustomProperty(dinoElem, "--bottom", 0). What this does is set the value of the dino element's bottom property to 0. Meanwhile in styles.css, the .dino element is styled with a --bottom attribute of 0;, but also styles bottom itself as calc(var(--bottom) * 1%). This allows us to quickly change the position of the dinoElem on a jump for instance. 

If the dinosaur jumps, incrementCustomProperyt is calledd, which again takes in the (dinoElem, "--bottom", and a variable called yVelocity * delta), in order to determine how --bottom value should be changed, which directly results in a positional change of the dinoElem on the display. 



## How are collisions handled? 
The key is to keep track of each object's rectangles on the screen. This is handled by a function called getDinoRect() and getCactusRects, which asks for any element with a data-dino or data-cactus attribute to return the bounding rectangles for that element. Then in scripts.js, a function called checkLose() is created which keeps track of whether the dino rectangle overlaps with any of the cactus rectangles. This logic is handled by a helper function called isCollision, which takes in two rectangles as parameters and determines if there are any overlapping conditions between them, if there are, it evaluates to true. 

