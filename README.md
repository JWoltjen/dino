# dino
A clone of Chrome's 404 screen


## How are collisions handled? 
The key is to keep track of each object's rectangles on the screen. This is handled by a function called getDinoRect() and getCactusRects, which asks for any element with a data-dino or data-cactus attribute to return the bounding rectangles for that element. Then in scripts.js, a function called checkLose() is created which keeps track of whether the dino rectangle overlaps with any of the cactus rectangles. This logic is handled by a helper function called isCollision, which takes in two rectangles as parameters and determines if there are any overlapping conditions between them, if there are, it evaluates to true. 
